import React from 'react'
import { Card } from '../components'
import { IoIosHelpCircleOutline } from "react-icons/io";
import '../index.css'
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className=' bg-homepage min-w-full min-h-screen flex flex-col items-center justify-center gap-8'>
        <div className='flex items-center justify-center'>
            <h1 className='text-2xl border-t-8 text-purple-600 bg'>Explore your campus</h1>
            <h2></h2>
            <IoIosHelpCircleOutline className='help-icon' onClick={() => navigate("/help")}/>
        </div>
        <div className='grid grid-cols-2 gap-10 w-[80vw] max-w-[800px]'>
            <Card name={"Cafeteria 1"} />
            <Card name={"Chapel"} />
            <Card  name={"CU Gate"} />
            <Card name={"LT 1"}/>
        </div>
    </div>
    
  )
}

export default Home