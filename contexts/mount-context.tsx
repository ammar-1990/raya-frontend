"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
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

  const values = { mounted, setMounted };
  return (
    <MountContext.Provider value={values}> {children}</MountContext.Provider>
  );
};


export const useMounted = ()=>useContext(MountContext)
