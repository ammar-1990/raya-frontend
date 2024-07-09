import { useBooking } from "@/hooks/booking.hook";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn, generateTimes } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "./ui/calendar";
type Props = {};

const BookingForm = (props: Props) => {
  const { form, onSubmit,relatedBookings ,scrollerRef} = useBooking();
const isLoading = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-1 h-fit justify-between"
      >
       
        <div className=" h-[calc(100vh-170px)] overflow-y-auto pb-4 space-y-3">
        <div ref={scrollerRef}/>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-muted font-sans text-xs">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                  autoFocus={true}
                    className="text-black caret-black focus-visible:ring-transparent focus-visible:ring-0 focus:ring-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-transparent border-2 focus-within:border-gradient_main-start transition border-transparent  bg-gray-200"
                    placeholder=""
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-muted font-sans text-xs">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-black caret-black focus-visible:ring-transparent focus-visible:ring-0 focus:ring-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-transparent border-2 focus-within:border-gradient_main-start transition border-transparent bg-gray-200"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-muted font-sans text-xs">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-black caret-black focus-visible:ring-transparent focus-visible:ring-0 focus:ring-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-transparent border-2 focus:border-gradient_main-start transition border-transparent bg-gray-200"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-muted font-sans text-xs">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-black caret-black focus-visible:ring-transparent focus-visible:ring-0 focus:ring-transparent focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-transparent border-2 focus:border-gradient_main-start transition border-transparent bg-gray-200"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-muted font-sans text-xs">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="text-black caret-black focus-visible:ring-transparent focus-visible:ring-0 focus:ring-transparent resize-none min-h-[100px] focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-transparent border-2 focus:border-gradient_main-start transition border-transparent bg-gray-200"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-muted font-sans text-xs">
                  Choose Date
                </FormLabel>

                <FormControl>
                  <Calendar
                  
                    showOutsideDays={false}
                    mode="single"
                    className=" text-black bg-gray-200 flex justify-center rounded-xl w-full"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("date") && (
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-muted font-sans text-xs">
                    Choose Time
                  </FormLabel>

                  <FormControl>
                    <div className="grid grid-cols-3 gap-3 ">
                      {" "}
                      {generateTimes(9, 21, 1).map((time) => (
                        <span
                          onClick={() => {field.value===time ? field.onChange(undefined) : field.onChange(time)}}
                          className={cn(
                            "px-4 py-2 text-xs rounded-full border font-sans cursor-pointer hover:text-gradient_main-start hover:border-gradient_main-start transition",
                            field.value === time &&
                              "bg-gradient_main-start text-white  border-gradient_main-start hover:bg-gradient_main-start hover:text-white",
                              relatedBookings.some(el=>el.time===time)&& "pointer-events-none cursor-not-allowed hover:cursor-not-allowed bg-gray-200 text-gray-500 border-gray-500 opacity-90"
                          )}
                          key={time}
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <Button
        disabled={isLoading}
          className="bg-gradient-to-b border-none from-gradient_main-start border-2 to-gradient_main-end hover:opacity-95 transition mt-auto"
          type="submit"
        >
          Submit
          {isLoading && <Loader2 size={12} className="ml-3 animate-spin"/>}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
