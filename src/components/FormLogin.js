import React from "react";
import { Link, useHistory } from "react-router-dom";
import MyContext from "../providers/MyContext";

export default function FormLogin() {
  const history = useHistory();
  const { user, setUser } = React.useContext(MyContext);
  console.log(user);
  return (
    <form>
      <label htmlFor="email-input">
        E - mail{" "}
        <input
          id="email-input"
          type="text"
          onChange={(e) =>
            setUser({
              email: e.target.value,
            })
          }
        />{" "}
      </label>
      <label htmlFor="password-input">
        Password <input id="password-input" type="text" />
      </label>
      <button type="button" onClick={() => history.push("/profile")}>
        Login{" "}
      </button>{" "}
      <Link to="/aaa"> Or sign up </Link>{" "}
    </form>
  );
}
