import React from "react";
import Logo from "./logo";
import NavLinks from "./navLinks";
import AuthButtons from "./auth-buttons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-8 lg:px-24 py-4  bg-white">
      <div className="grid grid-cols-2 xl:grid-cols-3 items-center">
        <div className="flex justify-start">
          <Logo />
        </div>

        <div className="justify-center hidden xl:flex">
          <NavLinks />
        </div>

        <div className="flex justify-end">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
