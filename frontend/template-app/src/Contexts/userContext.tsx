import React, { createContext, useState } from "react";

export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserProps {
  name: string;
  age: number;
}

export interface UserContextType {
  user: UserProps;
  setLoggedUser: (user: UserProps) => void;
}

export default function Userprovider(props: UserProviderProps) {
  const [user, setUser] = useState({ name: "User from context" } as UserProps);

  function setLoggedUser(user: UserProps) {
    setUser(user);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, setLoggedUser }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
}
