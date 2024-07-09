'use server'

import { CustomError } from "@/custom-error"
import { bookingSchema } from "@/schemas"
import { z } from "zod"
import prisma from '@/lib/prisma'

export const createBooking = async ({values}:{values:z.infer<typeof bookingSchema>})=>{

    try {
         
const validData = bookingSchema.safeParse(values)
if(!validData.success) throw new CustomError("Invalid Input")

await prisma.booking.create({
    data:{
        ...validData.data
    }
})

return {success:true,message:'Your Message Has Been Send'}

    } catch (error) {
        console.error(error)
        let message = 'Internal server error'
        if(error instanceof CustomError) message = error.message

        return {success:false,error:message}
    }
}