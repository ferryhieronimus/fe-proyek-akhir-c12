import {VStack, Stack, FormControl, Box, Input, Checkbox, FormHelperText, useToast} from "@chakra-ui/react";
import {useState} from "react";
import FilterService from "../../services/FilterService";
import {Link, useNavigate} from "react-router-dom";

export default function Filter() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [shelf, setShelf] = useState("");
    const [available, setAvailable] = useState(false);
    const [notAvailable, setNotAvailable] = useState(false);

    const isValid = available || notAvailable;
    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const availableArray = [];
        if (available) {availableArray.push(true)}
        if (notAvailable) {availableArray.push(false)}
        const result = await FilterService.filter({
          title: title.split(' '),
          author: author.split(' '),
          genre: genre.split(' '),
          shelf: shelf.split(' '),
          available: availableArray
        });
        navigate("/books/filter/result", {state: result});
      } catch (error) {
        toast({
          position: 'top',
          title: 'Filter Failed',
          description: 'Please try again later.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }

    return(
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
                Book Filter
              </div>
            </Stack>
            <Box rounded={"lg"} px={8}>
              <Stack spacing={4} align={"center"}>
                <FormControl id='title'>
                  <Input
                    type='text'
                    variant='flushed'
                    placeholder='Title ("harry potter")'
                    focusBorderColor='gray.400'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl id='author'>
                  <Input
                    type='text'
                    variant='flushed'
                    placeholder='Author ("james clear")'
                    focusBorderColor='gray.400'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </FormControl>
                <FormControl id='genre'>
                  <Input
                    type='text'
                    variant='flushed'
                    placeholder='Genre ("nonfiction")'
                    focusBorderColor='gray.400'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </FormControl>
                <FormControl id='shelf'>
                  <Input
                    type='text'
                    variant='flushed'
                    placeholder='Shelf ("recommended")'
                    focusBorderColor='gray.400'
                    value={shelf}
                    onChange={(e) => setShelf(e.target.value)}
                  />
                </FormControl>
                <FormControl id='availability'>
                  <Checkbox
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                  >
                    <div className='font-nunito text-md gray'>Available</div>
                  </Checkbox>
                  <br></br>
                  <Checkbox
                    checked={notAvailable}
                    onChange={(e) => setNotAvailable(e.target.checked)}
                  >
                    <div className='font-nunito text-md gray'>Not Available</div>
                  </Checkbox>
                  <FormHelperText>You must check at least one.</FormHelperText>
                </FormControl>
              </Stack>
              <Stack spacing={10}>
                <button
                  className='rounded-lg bg-[#c89566] p-2 px-3 mt-4 font-nunito font-medium text-[#f6f5f3] disabled:bg-[#e3c5a8] disabled:cursor-not-allowed'
                  disabled={!isValid}
                  onClick={handleSubmit}
                >
                  Filter
                </button>
              </Stack>
              <Link to='/books'>
                <Stack spacing={10}>
                  <button
                    className='rounded-lg bg-[#f6f5f3] p-2 px-3 mt-4 font-nunito font-medium text-[#c89566] border'
                  >
                    Return
                  </button>
                </Stack>
              </Link>
            </Box>
          </Stack>
        </VStack>
    )
}