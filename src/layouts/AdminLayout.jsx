import React from "react";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import UserServices from "../services/UserServices";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import Navbar from "../components/Headers/Navbar";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footers/Footer";

export const UserContext = createContext();

export default function AdminLayout() {
  const fecthUser = async () => {
    const tokenJSON = Cookies.get("token");
    if (tokenJSON) {
      const token = JSON.parse(tokenJSON);
      localStorage.setItem('AT', token);
      UserServices.setToken(token);
      return UserServices.getUser();
    }
  };

  const { data, status } = useQuery("loggedUser", fecthUser);

  if (status === "loading") {
    return (
      <div className='h-screen bg-[#eeede9] flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <UserContext.Provider value={data}>
        {Cookies.get("token") && status !== "loading" ? (
          <div className='grid grid-cols-[1fr]'>
            <Outlet></Outlet>
          </div>
        ) : (
          <div className='grid grid-cols-[1fr]'>
            <Outlet></Outlet>
          </div>
        )}
      </UserContext.Provider>
    </main>
  );
}
