import { FileInput } from 'flowbite-react';
import React from 'react'
import { useState } from 'react'



const Functionality = () => {
    
    const [image, setImage] = useState(null);
    const [bgremove, setBgRemove] = useState(null);


    const removing =() =>{
// api key=zjmsBBwViHzzD3P41VMpghS4
        
        const apiKey = "zjmsBBwViHzzD3P41VMpghS4";
        const url= "https://api.remove.bg/v1.0/removebg "
        
        const formData = new FormData()
        formData.append('image_file',image, image.name)
        formData.append("size","auto")

        
        fetch(url,{
            method:'POST',
            headers:{
                'X-Api-Key':apiKey,
            },
            body:formData
        }).then((res)=>res.blob()).then((blob)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>setBgRemove(reader.result)
            reader.readAsDataURL(blob);
        }).catch((error)=>console.log(error))
        
    }
        



return (
    <div className='mt-32 mb-32'>
        <h2 className='text-center font-bold text-lg'>Make your Image Background free👌</h2>
        <div className='flex justify-center items-center'>
        <div>

            <input type='file' name='fileInput' id='fileInput' className='mt-8' accept='image/*'
                onChange={(e) => setImage(e.target.files[0])} />
        </div>

            <button type='submit' className='mt-8 bg-sky-600 rounded-lg w-24 h-8 font-semibold text-md'
                onClick={ removing}
            >Done</button>

        </div>
        <div>

        {/* && means when the bgremove function or state is active then only the button or the element shows it is the simple use react state */}

       { bgremove &&<div className='flex justify-center py-4'>

       <img src={bgremove} alt="removed background" className='border-solid border-sky-200 border-2 rounded-xl max-w-2xl w-full' />
       </div>}
         
        {
        bgremove&& <a href={bgremove} download={FileInput} className='flex justify-center items-center mt-3'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center'>
                            Download Image
                </button>
            </a>
        }   
            
        </div>
    </div>
)
}

export default Functionality;
