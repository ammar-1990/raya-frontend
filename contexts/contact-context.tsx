
'use client'
import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

type ContextType = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const initialValues:ContextType ={
    open:false,
    setOpen:()=>{}
}

  const ContactContext = createContext(initialValues)


 export  const ContactProvider  =({children}:{children:ReactNode})=>{

    const [open, setOpen] = useState(false)
return (
    <ContactContext.Provider value={{open,setOpen}}>
        {children}
    </ContactContext.Provider>
)
 }



 export const useContact = ()=>useContext(ContactContext)