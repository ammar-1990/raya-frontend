import z from 'zod'
import { generateTimes } from './lib/utils';
import { Icons } from '@prisma/client';

const requiredString = z.string().min(1,"Required")
const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const phoneSchema = z.string().regex(phoneRegex, {
    message: "Invalid phone number format",
  });

const hours = generateTimes(9,21,1)

export const bookingSchema = z.object({
    name:requiredString,
    email:z.string().email(),
    date:z.date().refine(data=>data >= new Date(new Date().setHours(0,0,0,0)),{message:"Enter Valid Date Please"}),
    time:requiredString.refine(data=>hours.includes(data),{message:"Enter Valid Time Please"}),
    phone:phoneSchema,
    title:z.string().optional(),
    description:z.string().optional()
})

export type IconsType = keyof typeof Icons
export const icons:IconsType[] = ["SOFTWARE","DESIGN","AI","MARKETING"] as const 