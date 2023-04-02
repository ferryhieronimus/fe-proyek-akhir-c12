import React from "react";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import UserServices from "../services/UserServices";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";

export const UserContext = createContext();

export default function RootLayout() {
  const fecthUser = async () => {
    const tokenJSON = Cookies.get("token");
    if (tokenJSON) {
      const token = JSON.parse(tokenJSON);
      UserServices.setToken(token);
      return UserServices.getUser();
    }
  };

  const { data, status } = useQuery("loggedUser", fecthUser);

  if (status === "loading") {
    return (
      <Box
        sx={{ height:"100vh", display: "flex", justifyContent: "center", alignItems: "Center" }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <main>
      <UserContext.Provider value={data}>
        <Outlet></Outlet>
      </UserContext.Provider>
    </main>
  );
}
