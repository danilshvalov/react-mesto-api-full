import { Route, Redirect } from "react-router-dom";
import { linkPaths } from "../utils/constants";

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={linkPaths.loginPage} />
        )
      }
    </Route>
  );
}

export default ProtectedRoute;
