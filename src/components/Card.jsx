import React from 'react'

const Card = ({name}) => {
  return (
    <div className='h-52 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.15] cursor-pointer'>
        <div className='p-4'>
            <h3 className='text-center text-lg h-20  overflow-hidden font-semibold text-red-500'>
                {name}
            </h3>
        </div>
   </div>
  )
}

export default Card