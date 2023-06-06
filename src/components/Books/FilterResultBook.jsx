import {VStack, Stack, Table, Thead, Tr, Th, Tbody, Td} from "@chakra-ui/react";
import {Link, useLocation} from "react-router-dom";

export default function FilterResult() {
  const location = useLocation();
  const books = location.state;

  return(
    <VStack
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      className='bg-[#eeede9]'
    >
      <Stack align={"center"} spacing={5}>
        <div className='font-nunito text-2xl font-bold'>
          Filter Result: {books.length} book(s) filtered
        </div>
        <Stack direction={"row"} spacing={5}>
          <Link to='/books/filter'>
            <button className='rounded-lg bg-[#c89566] p-2 px-3 mt-4 font-nunito font-medium text-[#f6f5f3]'>
              Filter Again
            </button>
          </Link>
          <Link to='/'>
            <button className='rounded-lg bg-[#f6f5f3] p-2 px-3 mt-4 font-nunito font-medium text-[#c89566] border'>
              Return
            </button>
          </Link>
        </Stack>
        <Table variant='unstyled'>
          <Thead className='bg-[#c89566] text-[#f6f5f3]'>
            <Tr>
              <Th><div className='font-nunito text-lg font-bold'>ID</div></Th>
              <Th><div className='font-nunito text-lg font-bold'>Title</div></Th>
              <Th><div className='font-nunito text-lg font-bold'>Author(s)</div></Th>
              <Th><div className='font-nunito text-lg font-bold'>Genre(s)</div></Th>
              <Th><div className='font-nunito text-lg font-bold'>Shelf</div></Th>
              <Th><div className='font-nunito text-lg font-bold'>Availability</div></Th>
            </Tr>
          </Thead>
          <Tbody className='bg-[#f6f5f3]'>
            {books.map(book =>
              <Tr>
                <Td>{book.id}</Td>
                <Td>{book.title}</Td>
                <Td>{book.author.map(author => <li>{author}</li>)}</Td>
                <Td>{book.genre.map(genre => <li>{genre}</li>)}</Td>
                <Td>{book.shelf}</Td>
                <Td>{book.available ? 'Available' : 'Not Available'}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Stack>
    </VStack>
  )
}