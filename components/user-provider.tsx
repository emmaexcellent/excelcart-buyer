// Create a provider component

import { UserContext } from "@/app/context/user";
import { getLoggedInUser } from "@/lib/actions/auth.actions";
import { ReactNode } from "react";

export const UserProvider: React.FC<{ children: ReactNode }> = async ({ children }) => {

  const user = await getLoggedInUser();
  console.log(user)
  const userContextValue: UserContextProps = {
    user: user!,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
