import { Box, FormControl, Input, Stack, VStack, useToast  } from "@chakra-ui/react";
import { useState } from "react";
import LoginService from "../services/LoginService";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValid = username !== "" && password !== ""

  const toast = useToast()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await LoginService.login({
        username,
        password,
      });
      Cookies.set("token", JSON.stringify(user.token));
      window.location.reload();
    } catch (error) {
      toast({
        position: 'top',
        title: 'Login Failed',
        description: error.response.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
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
        maxW={"lg"}
        py={12}
        px={6}
        className='bg-[#f6f5f3] shadow-md'
        dir=''
      >
        <Stack align={"center"}>
          <div className='font-nunito text-xl font-bold'>
            Log in to continue
          </div>
        </Stack>
        <Box rounded={"lg"} px={8}>
          <Stack spacing={4}>
            <FormControl id='username' isRequired>
              <Input
                type='text'
                variant='flushed'
                placeholder='Username'
                focusBorderColor='gray.400'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id='password' isRequired >
              <Input
                type='password'
                variant='flushed'
                placeholder='Password'
                focusBorderColor='gray.400'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <button
                className='rounded-lg bg-[#c89566] p-2 px-3 mt-4 font-nunito font-medium text-[#f6f5f3] disabled:bg-[#e3c5a8] disabled:cursor-not-allowed'
                onClick={handleSubmit}
                disabled={!isValid}
              >
                Log in
              </button>
              <Link to='/signup'>
                <div className='font-nunito text-sm text-[#a09f9d]'>
                  Don't have an account? Sign Up
                </div>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <div className='font-nunito text-sm text-[#a09f9d] mt-4'>
        Privacy Policy • Terms & Conditions
      </div>
    </VStack>
  );
}
