import React, { useEffect } from "react";
import { UserContext } from "../layouts/UserLayout";
import { useContext } from "react";
import Box from "@mui/material/Box";

export default function Home() {
  const user = useContext(UserContext);

  console.log(user);
  if (user.role === "USER") {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
          flexDirection: "column"
        }}
      >
        <div>Firstname : {user.firstname}</div>
        <div>Lastname : {user.lastname}</div>
        <div>email : {user.email}</div>
        <div>PINJAM BUKU</div>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
          flexDirection: "column"
        }}
      >
        <div>Firstname : {user.firstname}</div>
        <div>Lastname : {user.lastname}</div>
        <div>email : {user.username}</div>
        <div>ADD BUKU</div>
      </Box>
    );
  }
}
