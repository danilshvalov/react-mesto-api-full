const isAvailableTheme = (theme) => {
  const availableThemes = ["dark", "light"];
  return theme && availableThemes.some((item) => item === theme);
};

export const updateUserTheme = (theme) => {
  const defaultTheme = "dark";
  if (isAvailableTheme(theme)) {
    localStorage.setItem("theme", theme);
  } else {
    localStorage.setItem("theme", defaultTheme);
  }
};

export const getUserTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (isAvailableTheme(currentTheme)) {
    return currentTheme;
  } else {
    updateUserTheme();
    return localStorage.getItem("theme");
  }
};
