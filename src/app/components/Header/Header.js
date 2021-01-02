import { LinkedIn, Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  const url = "";
  return (
    <header className="header">
      {/* TODO: [LC-7]Header */}
      <a href={url} className="header__logo">
        <LinkedIn titleAccess="LinkedIn" />
      </a>
      <div className="header__search">
        <Search aria-hidden={true}></Search>
        <input placeholder="Search" type="text" className="header__input" />
      </div>
      {/*		TODO: [LC-15] navbar icons */}
    </header>
  );
}

export default Header;
