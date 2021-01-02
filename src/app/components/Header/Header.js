import { LinkedIn } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  const url = "";
  return (
    <header className="header">
      {/* TODO: [LC-7]Header */}
      <a href={url}>
          <LinkedIn titleAccess="LinkedIn" className="header__logo" />
      </a>
      {/*		TODO: [LC-13] search bar */}
      {/*		TODO: [LC-15] navbar icons */}
    </header>
  );
}

export default Header;
