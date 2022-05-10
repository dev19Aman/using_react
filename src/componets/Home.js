import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1>Hello,welcome</h1>
      <strong>{user && user.email}</strong>
      <button onClick={handleLogOut}>Logout now</button>
    </div>
  );
};

export default Home;
