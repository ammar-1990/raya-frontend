'use server'
import prisma from "@/lib/prisma"

export const getBookingsDate = async()=>{

    try {

        const bookings = await prisma.booking.findMany({
            where:{
                date:{
                    gte:new Date(new Date().setHours(0,0,0,0))
                }
            },
            select:{
                id:true,
                time:true,
                date:true
            }
        })
return {success:true,bookings,message:"ok"}

        
    } catch (error) {
        console.log(error)
        return {success:false,error:"Internal Server Error"}
    }
}