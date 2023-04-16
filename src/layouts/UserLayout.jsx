import React from "react";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import UserServices from "../services/UserServices";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import Navbar from "../components/Headers/Navbar";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footers/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export const UserContext = createContext();

export default function UserLayout() {
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
      <div className='h-screen bg-[#eeede9] flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <UserContext.Provider value={data}>
        {Cookies.get("token") && status !== "loading" && <Navbar />}
        {Cookies.get("token") && status !== "loading" ? (
          <div className='grid grid-cols-[300px_1fr]'>
            <Sidebar />
            <Outlet></Outlet>
          </div>
        ) : (
          <div className='grid grid-cols-[1fr]'>
            <Outlet></Outlet>
          </div>
        )}
        {Cookies.get("token") && status !== "loading" && <Footer />}
      </UserContext.Provider>
    </main>
  );
}
