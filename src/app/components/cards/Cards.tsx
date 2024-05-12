"use client"
import React, { useState } from 'react'
import { useGetTemplatesQuery } from '../../services/apiSlice';
import { ITemplate } from '../../types';
import './cards.css'
import SingleCard from './SingleCard'
import Loader from '../loader/Loader';


const Cards = () => {
  const { data: templates, error, isLoading } = useGetTemplatesQuery();
  // const [originalData, setoriginalData] = useState(templates)
  if (isLoading) return <div><Loader/></div>;
  if (error) return <div> Some Error Occcuring  </div>;

  return (
    <div className=' flex items-center justify-center gap-10 flex-wrap'>

{templates?.map((template: ITemplate) => (
        
        <SingleCard key={template.id} name={template.name} slug={template.slug} description={template.description} image={template.picture} />
      ))}
     
    
    
    </div>
  )
}

export default Cards
