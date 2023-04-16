import React, { useEffect, useState } from "react";
import BooksService from "../services/BooksService";

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksService.getBook().then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  }, []);

  return (
    <div className='min-h-screen bg-[#eeede9]'>
      <div className='grid-cols-fluid grid gap-8 p-8 py-32 pr-28 pl-8'>
        {books.map((book) => (
          <div className='flex flex-col mx-auto max-w-[7.5rem] gap-1'>
            <div className='rounded-md overflow-hidden'>
              <img src={book.imgURL} alt='' className='h-48' />
            </div>
            <div className='font-nunito font-semibold line-clamp-2 text-[#474644]'>
              {book.title}
            </div>
            <div className='font-nunito truncate text-[#5b5b59]'>
              {book.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
