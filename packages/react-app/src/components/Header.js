import React from "react";

import { LeumasLogo } from "../assets";
import { Exchange, Loader, WalletButton, AsideMenu} from "./";
const Header = () => {
  return (
    <header className="bg-white flex w-full   " id="header-box" >
    <img
    id="logo-img"
      src={LeumasLogo}
      alt="Leumas-logo"
      className=""
    />
  </header>
  )
}

export default Header
