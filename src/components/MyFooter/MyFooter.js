import React from 'react'

const FooterWithLogo = () => {

    let d=new Date();
    let year=d.getFullYear()

  return (
    
    <div className='flex justify-center items-center '>
     
     <footer class="bg-gray-800 text-white p-4 mt-auto absolute bottom-0 insert-x-0 w-full">
    <div class="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Goutam. All rights reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default FooterWithLogo


