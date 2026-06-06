import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Home from "./Routes/Home";
import Signin from "./Routes/SignIn";
import Signup from "./Routes/SignUp";

import UserProfile from "./Routes/UserProfile";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
