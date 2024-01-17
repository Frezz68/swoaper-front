// src/context/UserContext.tsx

import React, { createContext, useState, ReactNode } from "react";

interface User {
  email: string;
  first_name: string;
  last_name: string;
  roles: [string];
  size: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const defaultState = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultState);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
