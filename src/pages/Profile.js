import React, {useContext} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyContext from "../providers/MyContext";

export default function Profile() {
  const {
    user: { email },
  } = useContext(MyContext);
  return (
    <div>
      <Header pageName="Profile" />
      <p>{email}</p>
      <p>email@email.com</p>
      <button type="button">Change Password</button>
      <button type="button">Log out</button>
      <Footer />
    </div>
  );
}
