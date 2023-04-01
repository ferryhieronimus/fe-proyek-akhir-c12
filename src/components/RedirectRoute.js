import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../layouts/RootLayout';
import { useContext } from "react";


export default function RedirectRoute ({ children }) {
    const user = useContext(UserContext);

    if (user) {
      return <Navigate to="/" replace />;
    }
  
    return children;
}
