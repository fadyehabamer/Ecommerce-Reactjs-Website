import React from "react";
import { AuthenticatedUser } from "./AuthenticatedUser";

export const RegisteredUsers = React.createContext();

export const RegisteredUsersProvider = (props) => {
  const { logInUser } = React.useContext(AuthenticatedUser);
  const [usersDB, setUsersDB] = React.useState([
    {
      uid: "",
      name: "",
      email: "",
      password: "",
    }
  ]);

  const isRegisteredUser = (user) => {
    usersDB.find((item) => {
      if (item.email == user.email && item.password == user.password) {
        return true;
      }
    });
    return false;
  };

  // Function also logs the user in
    const registerUser = (user) => {

    var newUser = {
      ...user,
      uid: `${Math.floor(Math.random() * 1000)}`, // Random three digits
    };
    setUsersDB([...usersDB, newUser]);
    logInUser({ uid: newUser.uid, name: newUser.name, email: newUser.email });
  };

  return (
    <RegisteredUsers.Provider value={{ isRegisteredUser, registerUser }}>
      {props.children}
    </RegisteredUsers.Provider>
  );
};

export default RegisteredUsers;
