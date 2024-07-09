'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { useContact } from "@/contexts/contact-context"
import BookingForm from "./booking-form"
  

type Props = {}

const ContactDrawer = (props: Props) => {
    const {open, setOpen} = useContact()
  return (
    <Sheet open={open} onOpenChange={setOpen}  >
    <SheetContent style={{color:'white'}} className="  w-full p-3 sm:p-6 pt-6 bg-backGround/60 backdrop-blur-md border-none">
      <SheetHeader className="h-16">
        <SheetTitle className="text-white font-sans">Book a consultation</SheetTitle>
        <SheetDescription className="text-muted font-sans">Please Enter your information and specify date for contacting you.</SheetDescription>
      </SheetHeader>
      <div className=" mt-6 ">
      <BookingForm/>
      </div>

  
   
    </SheetContent>
  </Sheet>
  )
}

export default ContactDrawer