import React from 'react'
import './navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import SearchInput from './SearchInput';
import { useCounterStore } from '@/app/store';
import Link from 'next/link';
import LogoutButton from './LogOut';

const Navbar = () => {
  const count =useCounterStore((state)=>state.count)
  const openSidebar =useCounterStore((state)=>state.openSidebar)
 
  return (
    <header className='fixed  top-0 w-full z-50 bg-[#dbe1e8] lg:px-16 md:px-8 sm:px-4 px-2 py-2 md:py-3 lg:py-4 flex justify-between items-center'>
   <div>
    <Link href={'/dashboard'}>
    <h1 className='text-[#0460bc] text-sm sm:text-lg md:text-xl lg:text-2xl font-bold cursor-pointer'>Templify</h1>
    </Link>
  
   </div>
   <div className='flex justify-center items-center gap-1 sm:gap-2 md:gap-4 text-xs md:text-base'>
    <div className='flex items-center rounded-lg justify-center gap-1 sm:gap-2 sm:px-3 px-1 py-1 bg-white font-bold'>
        <span><IoSearchSharp /></span>
        <SearchInput/>
    </div>
    <button className='bg-white rounded-lg  font-bold px-1 sm:px-2  md:px-3 py-1 cursor-pointer hover:bg-blue-400 hover:text-white'>Search</button>
   </div>
   <div onClick={openSidebar} className='bg-white rounded-lg flex items-center font-bold justify-center md:gap-2 gap-1 sm:px-2 px-2 md:px-3 py-1 cursor-pointer group hover:bg-blue-400 hover:text-white relative text-xs md:text-base'>
        <span><FaCartShopping /></span>
        <span>Cart</span>
        <span className='bg-blue-400 text-[8px] sm:text-xs px-1 rounded-2xl absolute -top-1 -left-1 group-hover:bg-white group-hover:text-black'>{count}</span>
   </div>
  
   <div className='absolute top-2 right-1 '> <LogoutButton/></div>


    </header>
  )
}

export default Navbar
