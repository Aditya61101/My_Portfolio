import Image from 'next/image';
import React from 'react'

const Skill = ({img, percent}) => {
  return (
    <div className='group relative flex cursor-pointer mt-5 mb-5 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full hover:scale-105 ease-in duration-500'>
        <Image src={img} className='filter group-hover:grayscale transition duration-300 ease-in-out' layout='fill'/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm md:text-xl font-bold text-gray-800 opacity-100'>{percent}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;