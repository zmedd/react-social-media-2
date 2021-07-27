import React, { useEffect } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";

export const Newsfeed = () => {
  const { loading, loggedIn, myAccount } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && !loggedIn && history.push("/login");
  }, [loading, loggedIn, history]);

  return (
    <div>
      <h1>Newsfeed</h1>
      {!loading && loggedIn && JSON.stringify(myAccount)}
    </div>
  );
};
