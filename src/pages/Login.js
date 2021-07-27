import React, { useEffect } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && loggedIn && history.push("/");
  }, [loading, loggedIn, history]);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
