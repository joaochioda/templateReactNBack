import React, { createContext, useState } from "react";

export const UserContext = createContext<UserProviderType>(null as any);

interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserProps {
  name: string;
  age: number;
}

interface UserProviderType {
  user: UserProps;
  setLoggedUser: (user: UserProps) => void;
}

export default function Userprovider(props: UserProviderProps) {
  const [user, setUser] = useState({ name: "joao" } as UserProps);

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
