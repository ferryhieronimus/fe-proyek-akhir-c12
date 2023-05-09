import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className={`h-screen bg-[#eeede9] flex justify-center items-center ${isLoaded?'hidden':'block'}`}>
        <Loader />
      </div>
      <div className={`h-screen bg-[#eeede9] py-16 px-32 flex items-center justify-center ${!isLoaded?'hidden':'block'}`}>
        <div className='flex flex-col gap-4'>
          <div className='font-nunito font-bold text-2xl'>Chapter & Verse</div>
          <div className='font-nunito'>
            Discover, borrow, and explore an endless
            <br></br>
            world of knowledge with our library app
          </div>
          <div className='flex'>
            <Link to='/login'>
              <button className='rounded-lg bg-[#c89566] p-2 px-3 font-nunito font-medium text-[#f6f5f3]'>
                Get Started
              </button>
            </Link>
            <div></div>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/dt4swo2bb/image/upload/v1681473614/M_2_tiekfh.png'
          className='max-w-lg'
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </>
  );
}
