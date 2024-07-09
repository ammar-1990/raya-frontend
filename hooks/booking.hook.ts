import { createBooking } from "@/actions/bookings";
import { getBookingsDate } from "@/actions/get-bookings-date";
import { useContact } from "@/contexts/contact-context";
import { bookingSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const useBooking = () => {
  const [bookings, setBookings] = useState<
    {
      date: Date;
      time: string;
      id: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getBookingsDate();
        if (data.success) {
          setBookings(data.bookings!);
          console.log(data.bookings);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: new Date(),
      description: "",
      email: "",
      name: "",
      phone: "",
      time: "",
      title: "",
    },
  });
  const formDate = form.watch("date");

  const relatedBookings = useMemo(() => {
    if (!formDate || !bookings.length) return [];
    return bookings.filter(
      (booking) =>
        new Date(new Date(booking.date).setHours(0, 0, 0, 0)).getTime() ===
        new Date(new Date(formDate).setHours(0, 0, 0, 0)).getTime()
    );
  }, [bookings, formDate]);

  console.log("relatedBookings", relatedBookings);

  const { setOpen } = useContact();

  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    try {
      const res = await createBooking({ values });

      if (!res?.success) return toast.error(res.error);

      toast.success(res.message);
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return { onSubmit, form, relatedBookings };
};
