import { bookingSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export const useBooking = ()=>{


    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
          date: new Date(),
          description:"",
          email:"",
          name:"",
          phone:"",
          time:"",
          title:""
        },
      })



      function onSubmit(values: z.infer<typeof bookingSchema>) {
        alert(JSON.stringify(values,null,2))
      }

      return {onSubmit, form}
}