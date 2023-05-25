import React, { useEffect, useState } from "react";
import BooksService from "../services/BooksService";
import PinjamService from '../services/PinjamService';
import { HttpStatusCode } from "axios";
import { useToast } from "@chakra-ui/react";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  const toast = useToast()

  const saveDataToBackend = (bookId) => {
    const jsonData = {
      pinjamDetailsData: [
        {
          bookId: parseInt(bookId)
        }
      ]
    };

      PinjamService.createPinjam(jsonData).then(res => {
        if (res.status === HttpStatusCode.Ok) {
          toast({
            title: 'Successfully borrowed book!',
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top'
          })
        }
        });
};

  useEffect(() => {
    BooksService.getBook().then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, []);

  return (
    <div className='min-h-screen bg-[#eeede9]'>
      <div className='grid-cols-fluid grid gap-8 p-8 py-32 pr-28 pl-8'>
        {books.map((book, index) => (
          <div key={index} className='flex flex-col mx-auto max-w-[7.5rem] gap-1'>
            <div className='rounded-md overflow-hidden'>
              <img src={book.imgURL} alt='' className='h-48' />
            </div>
            <div className='font-nunito font-semibold line-clamp-2 text-[#474644]'>
              {book.title}
            </div>
            <div className='font-nunito truncate text-[#5b5b59]'>
              {book.author}
            </div>
            <button onClick={() => saveDataToBackend(book.id)} className="btn btn-info">Borrow book</button>
          </div>
        ))}
      </div>
    </div>
  );
}
