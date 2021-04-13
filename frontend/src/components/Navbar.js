import React from "react";
import { Route } from "react-router-dom";
import { navbarClassNames, linkPaths } from "../utils/constants";
import ColoredLink from "./ColoredLink";

function Navbar(props) {
  return (
    <nav className={navbarClassNames.navbar}>
      <ul className={navbarClassNames.container}>
        <Route exact path={linkPaths.mainPage}>
          <li className={navbarClassNames.item}>
            <span className={navbarClassNames.email}>{props.email}</span>
          </li>
          <li className={navbarClassNames.item}>
            <ColoredLink
              to={linkPaths.loginPage}
              className={navbarClassNames.dimLink}
              onClick={props.onSignOut}
            >
              Выйти
            </ColoredLink>
          </li>
        </Route>

        <Route path={linkPaths.registerPage}>
          <li className={navbarClassNames.item}>
            <ColoredLink
              to={linkPaths.loginPage}
              className={navbarClassNames.link}
            >
              Войти
            </ColoredLink>
          </li>
        </Route>

        <Route path={linkPaths.loginPage}>
          <li className={navbarClassNames.item}>
            <ColoredLink
              to={linkPaths.registerPage}
              className={navbarClassNames.link}
            >
              Регистрация
            </ColoredLink>
          </li>
        </Route>
      </ul>
    </nav>
  );
}

export default Navbar;
