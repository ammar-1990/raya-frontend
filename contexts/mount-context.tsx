"use client";
import { Intro } from "@/components/intro";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ValuesType = {

  mounted: boolean;
  setMounted: Dispatch<SetStateAction<boolean>>;
};

const initialValue: ValuesType = {
  mounted: false,
  setMounted: () => {},

};

export const MountContext = createContext<ValuesType>(initialValue);

export const MountProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [mountedIntro, setMountedIntro] = useState(false);

  const values = { mounted, setMounted};


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!mounted) {
      timer = setTimeout(() => {
        setMounted(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [mounted]);




  if (!mounted) return <Intro />;
  return (
    <MountContext.Provider value={values}> {children}</MountContext.Provider>
  );
};

export const useMounted = () => useContext(MountContext);
