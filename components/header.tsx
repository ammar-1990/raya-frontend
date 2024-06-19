import React from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import AuthButtons from "./auth-buttons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-8 xl:px-24 py-4   fixed w-full top-0 left-0 z-[9999] bg-white/80 backdrop-blur-md border-b">
      <div className="flex gap-3 items-center justify-between max-w-[1500px] mx-auto ">
        <Logo />
        <div className="flex-1 hidden lg:flex justify-center">
          <NavLinks />
        </div>
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
