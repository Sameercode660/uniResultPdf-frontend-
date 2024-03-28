import { createContext, useContext, useState } from "react";

const AdminLoginContext = createContext();

export const AdminLoginContextProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  return (
    <AdminLoginContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      {children}
    </AdminLoginContext.Provider>
  );
};


export default function useAdminContext() {
    return useContext(AdminLoginContext)
}