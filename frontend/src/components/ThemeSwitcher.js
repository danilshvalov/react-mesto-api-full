import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { themeSwitcherClassNames } from "../utils/constants";
import { addThemeAttrs } from "../utils/utils";

function ThemeSwitcher({ onThemeSwitch }) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const themeButtonClassName = addThemeAttrs({
    theme: currentTheme,
    classList: themeSwitcherClassNames.themeButton,
  });

  const handleThemeSwitch = () => {
    onThemeSwitch(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className={themeSwitcherClassNames.themeSwitcher}>
      <button className={themeButtonClassName} onClick={handleThemeSwitch} />
    </div>
  );
}

export default ThemeSwitcher;
