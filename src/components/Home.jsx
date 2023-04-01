import React from "react";
import { UserContext } from "../layouts/RootLayout";
import { useContext } from "react";
import Box from "@mui/material/Box";

export default function Home() {
  const user = useContext(UserContext);

  console.log(user);
  if (user.user.role === "USER") {
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
        <div>Firstname : {user.user.firstname}</div>
        <div>Lastname : {user.user.lastname}</div>
        <div>email : {user.user.username}</div>
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
        <div>Firstname : {user.user.firstname}</div>
        <div>Lastname : {user.user.lastname}</div>
        <div>email : {user.user.username}</div>
        <div>ADD BUKU</div>
      </Box>
    );
  }
}
