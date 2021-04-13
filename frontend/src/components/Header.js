import React from "react";
import logo from "../images/header-logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs } from "../utils/utils";
import { headerClassNames } from "../utils/constants";
import Navbar from "./Navbar";

function Header(props) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const headerClassName = addThemeAttrs({
    theme: currentTheme,
    classList: headerClassNames.header,
  });

  const logoClassName = addThemeAttrs({
    theme: currentTheme,
    classList: headerClassNames.logo,
  });

  return (
    <header className={headerClassName}>
      <img className={logoClassName} src={logo} alt="Места России" />
      <div className={headerClassNames.container}>
        <div className={headerClassNames.item}>
          <ThemeSwitcher onThemeSwitch={props.onThemeSwitch} />
        </div>
        <div className={headerClassNames.item}>
          <Navbar email={props.email} onSignOut={props.onSignOut} />
        </div>
      </div>
    </header>
  );
}

export default Header;
