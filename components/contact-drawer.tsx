'use client'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { useContact } from "@/contexts/contact-context"
  

type Props = {}

const ContactDrawer = (props: Props) => {
    const {open, setOpen} = useContact()
  return (
    <Drawer open={open} onOpenChange={setOpen}  >
    <DrawerContent className="min-h-[400px] bg-backGround border-gradient_main-start">
      <DrawerHeader>
        <DrawerTitle className="text-white font-sans">Book a consultation</DrawerTitle>
        <DrawerDescription className="text-muted font-sans">Please Enter your information and specify date for contacting you.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter className="flex items-center gap-2 flex-row">
        <Button className="bg-gradient-to-b from-gradient_main-start to-gradient_main-end hover:opacity-95 text-white flex-1">Submit</Button>
        <DrawerClose className="flex-1 ">
          <Button variant="outline" className="w-full">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  )
}

export default ContactDrawer