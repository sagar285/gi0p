import React from 'react'
import "./Div2.css";

function Div2() {
  return (
     <>

     <div className='grid justify-items-center  w-full h-[50rem]  header bg-cover bg-center'>
     

      <form className=' w-[20rem] h-[26rem]  border-solid  border-4  mt-[20rem] bg-gray-200  text-center'>
      <h1> Please Cofirm your details</h1>

      <input type="text" name="name" placeholder='City' className='text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded'/><br/>
       <input type="text"placeholder='pickupaddress'className='text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded'  /><br/>
       <input type="text" placeholder='Dropoffaddress' className='text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' /><br/>
        <input type= "tel" placeholder='enter mobile number' className='text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded'  /><br/>
         <input type="text"placeholder='name' className='text-left p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] rounded' />

         <button type='submit'className='text-center p-1 w-[18rem] border-3 border-black border-solid mt-3 py-2 h-[2.5rem] bg-orange-200 rounded-md' >Confirm</button>
         </form>
         </div>
     </>
  );
}

export default Div2