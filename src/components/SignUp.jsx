import {
    Box,
    FormControl,
    Input,
    Stack,
    VStack,
    HStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import SignUpService from "../services/SignUpService";
  import { Link } from "react-router-dom";
  
  export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
  
    const isValid = username && password && firstname
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await SignUpService.signup({
          firstname,
          lastname,
          username,
          password,
          role: "USER",
        });
        alert("BERHASIL REGISTER");
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
          maxW={"lg"}
          py={12}
          px={6}
          className='bg-[#f6f5f3] shadow-md'
          dir=''
        >
          <Stack align={"center"}>
            <div className='font-nunito text-xl font-bold'>Create account</div>
          </Stack>
          <Box rounded={"lg"} px={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
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
                </Box>
                <Box>
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
                </Box>
              </HStack>
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
                  className='rounded-lg bg-[#c89566] p-2 px-3 mt-4 font-nunito font-medium text-[#f6f5f3] w-1/2 disabled:bg-[#e3c5a8] disabled:cursor-not-allowed'
                  onClick={handleSubmit}
                  disabled={!isValid}
                >
                  Sign up
                </button>
                <Link to='/login'>
                  <div className='font-nunito text-sm text-[#a09f9d] text-center'>
                    Already have an account? Sign in
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
  