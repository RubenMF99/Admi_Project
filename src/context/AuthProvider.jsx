import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axiosClient";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    const autenticateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No existe");
        return;
      }
      const confing = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axiosClient.get("/user/perfil", confing);
        console.log(data);
        setAuthUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    autenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
