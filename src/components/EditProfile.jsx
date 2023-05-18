import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UserServices from "../services/UserServices";
import Cookies from "js-cookie";

export default function EditProfile() {
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isValid = password && firstname;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await UserServices.getUser();
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setUserName(user.username);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await UserServices.editUser(
        {
          firstname,
          lastname,
          password,
        },
        username
      );
      alert("BERHASIL EDIT USER");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await UserServices.deleteUser(username);
      Cookies.remove("token");
      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <VStack
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      className='bg-[#eeede9]'
    >
      <Stack
        spacing={8}
        mx={"auto"}
        minW={"30%"}
        maxW={"lg"}
        py={12}
        px={6}
        className='bg-[#f6f5f3] shadow-md'
        dir=''
      >
        <Stack align={"center"}>
          <div className='font-nunito text-xl font-bold'>Edit Profile</div>
        </Stack>
        <Box rounded={"lg"} px={8}>
          <Stack spacing={4}>
            <FormControl id='firstName' isRequired>
              <Input
                type='text'
                variant='flushed'
                placeholder='First name'
                focusBorderColor='gray.400'
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl id='lastName'>
              <Input
                type='text'
                variant='flushed'
                placeholder='Last name'
                focusBorderColor='gray.400'
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <Input
                type='password'
                variant='flushed'
                placeholder='Password'
                focusBorderColor='gray.400'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6} justify={"center"} align={"center"}>
              <button
                className='rounded-lg bg-[#c89566] p-2 px-2 mt-4 font-nunito font-medium text-[#f6f5f3] w-1/2 disabled:bg-[#e3c5a8] disabled:cursor-not-allowed'
                onClick={handleSubmit}
                disabled={!isValid}
              >
                Save Changes
              </button>
              <button
                className='rounded-lg bg-[#8b0000] p-2 px-2 mt-4 font-nunito font-medium text-[#f6f5f3] w-1/2 disabled:bg-[#e3c5a8] disabled:cursor-not-allowed'
                onClick={onOpen}
              >
                Delete Account
              </button>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Account Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              Are you sure you want to delete your account? This action is
              irreversible and will permanently delete all your data associated
              with the account.
            </div>
          </ModalBody>
          <ModalFooter>
            <HStack gap={4}>
              <button
                onClick={onClose}
                className='rounded-lg bg-[#fff] p-2 px-2 font-nunito font-medium text-[#000] w-1/2'
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUser}
                className='rounded-lg bg-[#8b0000] p-2 px-2 font-nunito font-medium text-[#f6f5f3] w-1/2'
              >
                Delete
              </button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
