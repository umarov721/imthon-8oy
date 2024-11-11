import React, { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

interface AuthContextProps {
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(localStorage.getItem("token")));

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    toast.success("tizimdan chiqildi");
  };

  const login = (token: string) => {
    setIsLogin(true);
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
