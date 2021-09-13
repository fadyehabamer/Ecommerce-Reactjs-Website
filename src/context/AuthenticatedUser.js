import React from "react";

export const AuthenticatedUser = React.createContext();

export const AuthenticatedUserProvider = (props) => {
  const [user, setUser] = React.useState({
    uid: '123',
    name: "Guest",
    loggedIn: false,
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    // On First Render See if the user is already logged in
    React.useEffect(() => {
      // Fetch User from Local Storage
        let storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        } else {
            setUser({
                uid: '123',
                name: "Guest",
                loggedIn: false,
            })
        }
    },[])
    
    // When User changes state Log Out or Log In
    React.useEffect(() => {
        if (user.loggedIn) {
        // user logged in successfully

        // save user in localStorage
        localStorage.setItem('user', JSON.stringify(user))
            
        setIsAuthenticated(true);
        } else {
        setIsAuthenticated(false); // so we stay logged in for dev
        }
    }, [user]);

    // Don't pass the User Password here
    const logInUser = (loggedUser) => {
        setUser({ ...loggedUser, loggedIn: true })
    }
    
    const logOutUser = () => {
        localStorage.removeItem('user')
    }
  return (
    <AuthenticatedUser.Provider
      value={{ user, logInUser, isAuthenticated, setIsAuthenticated,logOutUser }}
    >
      {props.children}
    </AuthenticatedUser.Provider>
  );
};
