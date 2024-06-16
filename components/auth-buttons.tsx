import Link from "next/link";
import React from "react";

type Props = {};

const AuthButtons = (props: Props) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 ">
      <Link href={"/sign-up"}>
        <button
          className=" rounded-[5px] sm:rounded-[12px] text-xs sm:text-base font-semibold w-[70px] h-[25px] sm:w-[114px] sm:h-[52px] "
          type="button"
        >
          Sign Up
        </button>
      </Link>
      <Link href={"/sign-in"}>
        <button
          type="button"
          className="rounded-[5px] sm:rounded-[12px] text-xs sm:text-base w-[70px] h-[25px] sm:w-[114px] sm:h-[52px] bg-gradient-to-b font-semibold from-gradient-start to-gradient-end  opacity-100 hover:opacity-90 transition  text-white"
        >
          Login
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
