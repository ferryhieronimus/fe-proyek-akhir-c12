import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../layouts/AdminLayout';
import { useContext } from "react";


export default function ProtectedRouteAdmin ({ children }) {
    const user = useContext(UserContext);
    console.log(user);
    console.log(children);
    try{
      var role = useContext(UserContext).role;
      console.log(role);
    } catch {}
  

    if (!user) {
      return <Navigate to="/get-started" replace />;
    }
    
    return children;
}