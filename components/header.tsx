import React from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import AuthButtons from "./auth-buttons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-8 xl:px-24 py-4  bg-white">
      <div className="flex gap-3 items-center justify-between">
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
