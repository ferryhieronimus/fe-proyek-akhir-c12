import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import UserServices from "../../services/UserServices";

export default function Navbar() {
  const [user, setUser] = useState()

  const fecthUser = async () => {
    const user = await UserServices.getUser()
    setUser(user)
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  useEffect(() => {
    fecthUser()
  }, [])

  return (
    <div className='flex h-16 w-screen bg-[#36303a] items-center justify-between pl-36 pr-40 fixed shadow-md'>
      <Link to='/'>
        <Icon as={IoLibrarySharp} color='white' boxSize={8} />
      </Link>
      <div className='flex gap-8'>
        <Link to='/'>
          <div className='font-nunito text-md text-[#fafafa]'>Browse</div>
        </Link>
        <Link to='/pinjam/me'>
          <div className='font-nunito text-md text-[#fafafa]'>My Books</div>
        </Link>
        { user && user.role == "STAFF" &&
          <>
            <Link to='/admin/books'>
              <div className='font-nunito text-md text-[#fafafa]'>
                Manage Books
              </div>
            </Link>
            <Link to='/admin/pinjam'>
              <div className='font-nunito text-md text-[#fafafa]'>
                Manage Lending
              </div>
            </Link>
          </>
        }
      </div>
      <div className='flex gap-4 items-center'>
        <Menu>
          <MenuButton>
            <Icon as={AiOutlineUser} color='white' boxSize={8} />
          </MenuButton>
          <MenuList>
            <Link to='/editprofile'>
              <MenuItem icon={<FaUserEdit />}>Edit Profile</MenuItem>
            </Link>
            <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
