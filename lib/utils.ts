import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTimes(startHour: number, endHour: number, interval: number): string[] {
  const times: string[] = [];
  for (let hour = startHour; hour <= endHour; hour += interval) {
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const period = hour >= 12 ? 'PM' : 'AM';
    const time = `${hour12.toString().padStart(2, '0')}:00 ${period}`;
    times.push(time);
  }
  return times;
}

const times = generateTimes(9, 21, 1);
 

