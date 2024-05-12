import Link from 'next/link';
import React from 'react'
import AddToCart from './AddToCart';
import { useCounterStore } from '@/app/store';

interface SingleCardProps {
  name: string;
  slug?: string;
  description: string;
  image: string;
}

const SingleCard:React.FC<SingleCardProps> = ({name,slug,description,image}) => {
  const addItemToStore = useCounterStore((state) => state.addItem);
  const increment = useCounterStore((state) => state.increment);
  const openSidebar =useCounterStore((state)=>state.openSidebar);
  const items = useCounterStore((state) => state.items);
  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>,itemImage: string, itemTitle: string) => {
    e.preventDefault();
    const isItemExists = items.some(item => item.image === itemImage && item.title === itemTitle);
  if (isItemExists) {
    return;
  }
    
    
    openSidebar();
    increment();
    addItemToStore({ image: itemImage, title: itemTitle });
  };
  return (
    <Link href={`/dashboard/${slug}`}>
    
    <div className="card w-60 text-white relative ">
      <img src={image} alt="" className='w-full h-36' />
  <p className="heading">
    {name}
  </p>
  <p className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
    {description}
  </p>
  
<div  onClick={(e) => handleAddItem(e,image, name)}  className='w-fit '><AddToCart/></div>
</div>
    </Link>
    
  )
}

export default SingleCard
