"use client"
import { getLoggedInUser } from "@/lib/actions/auth.actions";
import { Models } from "node-appwrite";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";



// Create your context
export const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create a custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getLoggedInUser();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []); 

  const userContextValue: UserContextProps = {
    user: user!,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

