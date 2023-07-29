import React from 'react'
import { useState } from 'react'

// API TOKEN: 64c45d2af1b414.18748169

const Functionality = () => {

    const yourToken = '64c45d2af1b414.18748169';


    const [image, setImage] = useState(null);
    const [bgremove, setBgRemove] = useState(null);

    const uploadImage = () => {

        var data = new FormData();
        data.append("image_file", fileInput.files[0], "@path/to/image");
        // data.append("image_url", "url_to_image");

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "https://api.removal.ai/3.0/remove");
        xhr.setRequestHeader("Rm-Token", "yourToken");

        xhr.send(data);

        // const reader = new FileReader();

        // reader.onload = (event) => {
        //   // The code inside this block will be executed when the file has been successfully loaded.
        //   setBgRemove = event.target.result;
        //   // Do something with the fileContent, e.g., display it or process it further.
        // };
        
        // // Assuming 'file' is the file object obtained from an input file form element.
        // reader.readAsDataURL(data);


    }



    return (
        <div className='mt-32 mb-32'>
            <h2 className='text-center font-bold text-lg'>Make your Image Background free👌</h2>
            <div className='flex justify-center items-center'>

                <input type='file' name='fileInput' id='fileInput' className='mt-8' accept='image/*'
                    onClick={(e) => { setImage = (e.target.files[0]) }} />

                <button type='submit' className='mt-8 bg-sky-600 rounded-lg w-24 h-8 font-semibold text-md'
                    onClick="uploadImage"
                >Done</button>

                {bgremove && <img src={bgremove} alt="removed background" />}
            </div>
        </div>
    )
}

export default Functionality;