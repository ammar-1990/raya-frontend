import { ReactNode } from "react"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { Bot, Globe, Rocket } from "lucide-react";
import { $Enums } from "@prisma/client";

//bg-[#D4F0FF]
//bg-[#FFDED4]
//bg-[#FFEED4]


// export type IconsType = "SOFTWARE" | "DESIGN" | "AI" | "MARKETING"
// export type ColorsType = "LIGHT_PINK" | "LIGHT_YELLOW" | "LIGHT_BLUE"


export const iconsMapping: { [key in $Enums.Icons]: ReactNode } = {
    SOFTWARE: <LiaLaptopCodeSolid strokeWidth={0.01} size={25} />,
    AI: <Bot strokeWidth={1.5} size={20} />,
    DESIGN: <Globe strokeWidth={1.5} size={20} />,
    MARKETING: <Rocket strokeWidth={1.5} size={20} />,
  };

  
export const colorsMapping: { [key in $Enums.Colors]: string } = {
  LIGHT_BLUE: "bg-[#D4F0FF]",
  LIGHT_PINK: "bg-[#FFDED4]",
  LIGHT_YELLOW: "bg-[#FFEED4]",
} as const;




export const INSTAGRAM = 'https://www.instagram.com/yumaagency_/'
export const TIKTOK = 'https://www.tiktok.com/@yumaagency_'
export const FACEBOOK = 'https://www.facebook.com/share/1AYmEph9ph/?mibextid=wwXIfr'