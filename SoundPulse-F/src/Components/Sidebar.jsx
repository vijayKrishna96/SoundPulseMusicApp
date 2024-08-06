import React from 'react'
import { assets } from '../assets/assets'
import { SlHome } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { MdLibraryMusic } from "react-icons/md";

function Sidebar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
        <div className='bg-[#121212] h-[15%] flex flex flex-col justify-around '>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                {/* <img src={assets.home_icon} alt="" /> */}
                <span className='w-8 text-xl'><SlHome /></span>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <span className='w-8 text-xl'><FiSearch /></span>
                <p>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded '>
            <div className='p-4 flex items-center  justify-between'>
              <div className='flex items-center gap-3'>
               <span className='w-8 text-2xl'><MdLibraryMusic /></span>
                  <p className='font-semibold'>Your Library</p>
              </div>
              <div className='flex items-center gap-3'>
                  <img className='w-4' src={assets.arrow_icon} alt="" />
                  <img className='w-4' src={assets.plus_icon} alt="" />
              </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start  gap-1'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>it's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start  gap-1'>
                <h1>Let's findsome podcasts to follow</h1>
                <p className='font-light'>we'll keep you updated on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar