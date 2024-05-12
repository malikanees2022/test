import { useCounterStore } from '@/app/store'
import React from 'react'
import './sidebar.css'

import { MdDeleteForever } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Sidebar = () => {
  const isSidebarOpen=useCounterStore((state)=>state.isSidebarOpen)
  const closeSidebar=useCounterStore((state)=>state.closeSidebar)
  const items = useCounterStore((state) => state.items);
  const deleteItem = useCounterStore((state) => state.deleteItem);
  const decrement = useCounterStore((state) => state.decrement);
  const handleDeleteItem = (index:number) => {
    decrement();
    deleteItem(index);
  };
  return (
    
   <>
   {isSidebarOpen && (
     <div className={`bg-[#1b233d] text-white fixed right-0 w-[300px] pb-8  pt-12 sm:pt-16 md:pt-20 z-30 top-0 h-screen overflow-y-scroll scroll-smooth`}   style={{ animation: isSidebarOpen ? 'expand 2s forwards' : 'expandreverse 2s forwards' , scrollbarWidth: 'none'}} >
     <div className='flex items-center justify-between px-8'>
      <h1 className='text-2xl font-bold'>My  Cart</h1>
      <span onClick={closeSidebar} className='text-2xl cursor-pointer'><ImCross />

</span>
     </div>
     {items.map((item, index) => (
        <div key={index} className='mt-8 flex items-center gap-2 py-1 justify-between px-8 bg-red-400'>
          
          <img src={item.image} alt={item.title} className='w-20 h-12' />
          <h2>{item.title}</h2>
          <span  onClick={() => handleDeleteItem(index)} className='text-3xl cursor-pointer'><MdDeleteForever /></span>
        </div>
      ))}
   </div>
   )}
   </>
  )
}

export default Sidebar
