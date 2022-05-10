import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import { Login } from "./componets/Login";
import ProtectedRoutes from "./componets/ProtectedRoutes";
import { Signup } from "./componets/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/" exact element={<Login />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
