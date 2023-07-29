import React from 'react'
import { useState } from 'react'

// API TOKEN: 64c45d2af1b414.18748169

const Functionality = () => {



    const [image,setImage]=useState(null);
    const [bgremove,setBgRemove]=useState(null);

   const theFunction=()=>{

   }
    
    
    
    return (
        <div className='mt-32 mb-32'>
        <h2 className='text-center font-bold text-lg'>Make your Image Background free👌</h2>
        <div className='flex justify-center items-center'>

        <input type='file' name='file_name' className='mt-8'/>
        <button type='submit' className='mt-8 bg-sky-600 rounded-lg w-24 h-8 font-semibold text-md'
        onClick={(e)=>{setImage=(e.target.files[0])}}
        >Done</button>
        
        </div>
    </div>
  )
}

export default Functionality