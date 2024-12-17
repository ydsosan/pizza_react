import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
