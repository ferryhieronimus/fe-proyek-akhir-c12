import React from "react";
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
import { IoLibrarySharp } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import Cookies from "js-cookie";

export default function Navbar() {
  const handleLogout = () => {
    Cookies.remove("token")
    window.location.reload()
  }
  return (
    <div className='flex h-16 w-screen bg-[#36303a] items-center justify-between pl-36 pr-40 fixed'>
      <div>
        <Icon as={IoLibrarySharp} color="white" boxSize={8} />
      </div>
      <div className='flex gap-8'>
        <div className='font-nunito text-md text-[#fafafa]'>Browse</div>
        <div className='font-nunito text-md text-[#fafafa]'>My Books</div>
      </div>
      <div className='flex gap-4 items-center'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<FiSearch color='gray.300' />}
          />
          <Input type='text' placeholder='Title...' bg={"gray.200"} />
        </InputGroup>
        <Menu>
          <MenuButton>
            <Icon as={AiOutlineUser} color="white" boxSize={8} />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
