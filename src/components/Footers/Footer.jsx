
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
import {FaInstagram} from "react-icons/fa"
import {RiTwitterLine} from "react-icons/ri"
import {SlSocialYoutube} from "react-icons/sl"

export default function Footer() {
  return (
    <div className='flex flex-wrap h-48 bg-[#202020] bg-opacity-95 items-center justify-between px-16'>
      <div className="flex gap-4 items-center">
        <Icon as={IoLibrarySharp} color='white' className="mb-2" boxSize={12} />
        <div className='font-nunito font-bold text-2xl text-[#fafafa]'>Chapter & Verse</div>
      </div>
      <div className='flex gap-8'>
        <div className='font-nunito text-md text-[#fafafa]'>Home</div>
        <div className='font-nunito text-md text-[#fafafa]'>About</div>
        <div className='font-nunito text-md text-[#fafafa]'>Team</div>
      </div>
      <div className="flex gap-8 items-center">
        <Icon as={FaInstagram} color='white' boxSize={8} />
        <Icon as={RiTwitterLine} color='white' boxSize={8} />
        <Icon as={SlSocialYoutube} color='white' boxSize={8} />
      </div>
    </div>
  );
}
