import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartProvider } from "./CartContext.jsx";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState();
  const { user, loginWithRedirect, logout } = useAuth0();
  const [cartLogout, setCartLogout] = useState(false);

  useEffect(() => {
    if (user) {
      setMyUser(user);
    } else {
      setMyUser(false);
      setCartLogout(false);
    }
  }, [user]);

  const userLogout = () => {
    setCartLogout(true);
    logout();
  };

  return (
    <UserContext.Provider
      value={{ myUser, loginWithRedirect, userLogout, cartLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
