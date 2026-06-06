import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  function signup(formData) {
    const newUser = { ...formData };
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);
    return true;
  }

  function login(email, password) {
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
