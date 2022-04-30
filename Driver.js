import {React, useState} from 'react'
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Form from './Form';
function Driver() {
  const getname =(e)=>{
    console.log(e.target.value);
    setname(e.target.value);
  }
  const metname =(e)=>{
    console.log(e.target.value);
    setPhone(e.target.value);
  }
  const petname =(e)=>{
    console.log(e.target.value);
    setvehicle(e.target.value);
  }
  const jetname =(e)=>{
    console.log(e.target.value);
    setcity(e.target.value);
  }
  const retname =(e)=>{
    console.log(e.target.value);
    setsource(e.target.value);
  }
  const onSubmit = ()=>{
    setfullname(name);
  }

const [show, setshow] = useState(true);
const [name,setname]= useState("sagar");
const [Phone, setPhone] = useState("");
const [city, setcity] = useState("");
const [vehicle, setvehicle] = useState("");
const [source, setsource] = useState("");
const [fullname, setfullname] = useState("");

  return (
   <>
    <div className="w-full h-[4rem] bg-black rounded-lg ">
      <nav className='flex text-white float-right py-4  list-none mr-8 '>

        <li>
      <Link to="/" className='pr-2'>
           Home
            </Link>
            </li>
            <li>
            <Link to="/About" className='pr-2'>
              About us
            </Link>
            </li>
            <li>
            <Link to="/contact" className='pr-2'>
              Contact us
            </Link>
            </li>
       <li >
            <Link to="/" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>
    </div>
 <div className="mt-0 ml-2 rounded flex ">   

 <img src = {logo} className="relative w-full h-[26rem] bg-slate-800"  />
 <div>

  {
    show ?
<form className=' w-[20rem] h-[26rem]  bg-slate-800 border-solid  border-1 border-white  float-right text-center' onsubmit = {onSubmit}>

    <h1 className='text-white ' >Attach Vehicle Now</h1><br/>
    <input type="text"  placeholder='Name' onChange={getname} value={name} className='text-left p-1 w-[18rem] h-[2.5rem] rounded'/><br/><br/>

    <input type="tel" name='phone ' value="+91-"  placeholder='Mobile number' className=" w-[18rem] ml-3  h-[2.5rem] rounded flex" />
    <input type="tel" name='phone ' onChange={metname} placeholder=' Enter mobile number ' className='w-[18rem]  h-[2.5rem] ml-3 rounded flex -mt-10  pl-9 '/>
    <div className='w-[9rem] h-[3rem] justify-start float-left ml-3 bg-white  mt-5 text-center ' >
      <select className='w-[9rem] h-[3rem] bg-white ' onChange={jetname}>
    <option  >city</option>
    <option >indore</option>
    <option >pithampur</option>
    <option >dewas</option>
    <option >jaipur</option>
  </select>
  </div>
  <div className='w-[9rem] h-[3rem] justify-start float-left  ml-[0.5rem]  bg-white text-center   mt-5' >
    <select className='w-[9rem] h-[3rem] bg-white'onChange={petname}>
    <option  >Vehicle</option>
    <option >Tata ace</option>
    <option >Truck</option>
    <option >Bike</option>
    <option >Loader</option>
  </select>
  </div>
  <div><select className='w-[18rem] h-[3rem] bg-white  mt-6 'onChange={retname}>
    <option  >Source</option>
    <option >Ads</option>
    <option >News</option>
    <option >Newspaper</option>
    <option >Friend</option>
  </select>
  </div>
  <button type='button' className='bg-blue-500 w-[20rem] h-[3rem] mt-5 '  onClick={() =>setshow(!show) }>REGISTER</button>
 

    </form> : <Form />
   
  
  }
    </div> 
    </div>

<div className="bg-gray-100 w-full h-[30rem] mt-28 ">
  <p className='text-center text-blue-500'>WHY CHOOSE US?</p>
  <h3 className='text-center my-6 text-[2.2rem] italic font-bold font-mono py-2'>Maximize earnings, faster <br/>and easier than ever before! <br/>You are just a click away.</h3>
  <div className='flex  ml-44 mt-12'>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem] ml-2  px-2 '>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIwIDVjLTMuMzE0IDAtNiAzLjEzNC02IDdzMi42ODYgNyA2IDcgNi0zLjEzMyA2LTctMi42ODYtNy02LTd6bTIuNSAxMC41YS41LjUgMCAwMS0uNS41aC00YS41LjUgMCAwMS0uNS0uNXYtMWEuNS41IDAgMDEuNS0uNWgxdi0zLjQ2NWwtLjAyOS4wMTlhLjUuNSAwIDAxLS42OTMtLjEzOWwtLjU1NS0uODMyYS41LjUgMCAwMS4xMzktLjY5M2wuOTU4LS42MzlBMS41IDEuNSAwIDAxMTkuNjUxIDhoLjg0OWEuNS41IDAgMDEuNS41VjE0aDFhLjUuNSAwIDAxLjUuNXpNMzggMEgyYTIgMiAwIDAwLTIgMnYyMGEyIDIgMCAwMDIgMmgzNmEyIDIgMCAwMDItMlYyYTIgMiAwIDAwLTItMnptLTEgMTdhNCA0IDAgMDAtNCA0SDdhNCA0IDAgMDAtNC00VjdhNCA0IDAgMDA0LTRoMjZhNCA0IDAgMDA0IDR6IiBmaWxsPSIjMTA5NGY4Ii8+PC9zdmc+' className='w-[40px] h-[24px] mt-3 ml-2'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Instant pay</h1>
    <p className='mt-3 text-lg text-[#545454]'>Delayed payments have never been our thing! Paperless invoices, constant communication {"&"} consistent support.</p>
  </div>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem] ml-2 px-2'>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIuMzU0IDE3LjYwNmEuNzUyLjc1MiAwIDAwLjkxOS41M2wxMC4xNDQtMi43MTlhLjc1Mi43NTIgMCAwMC41My0uOTE5bC0yLjMzLTguN2EuNzUyLjc1MiAwIDAwLS45MTktLjUzbC0zLjYxOS45NzUgMS4xNjIgNC4zNTEtMi45Ljc3My0xLjE1OS00LjM0NS0zLjYyMy45N2EuNzUyLjc1MiAwIDAwLS41My45MTlsMi4zMjUgOC43ek0xOC4wMDEgMGExLjUgMS41IDAgMDAtMS41IDEuNXYxNS4xNjlMLjI3NyAyMS4wOTRhLjM3My4zNzMgMCAwMC0uMjYyLjQ1OWwuNTg2IDIuMTdhLjM3My4zNzMgMCAwMC40NTkuMjYzbDE4LjQ1NS01LjAzNGE1LjI0NCA1LjI0NCAwIDAwMTAuNDg2LS4yMDJWMHptNi43NSAyMWEyLjI1IDIuMjUgMCAxMTIuMjUtMi4yNUEyLjI1MSAyLjI1MSAwIDAxMjQuNzUgMjF6IiBmaWxsPSIjMTA5NGY4Ii8+PC9zdmc+' className='w-[30px] h-[24px]'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Instant loads</h1>
    <p className='mt-3 text-lg text-[#545454]'>A free download from iOS or android takes you to instant bookable loads. It is as simple as- match, accept & get working!</p>
  </div>
  <div className='bg-[#f9fafa] w-[28%] h-[14rem]  ml-2 px-2'>
    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTIxLjQyOSAwSDIuNTcxQTIuNTcxIDIuNTcxIDAgMDAwIDIuNTcxdjE4Ljg1OEEyLjU3MSAyLjU3MSAwIDAwMi41NzEgMjRoMTguODU4QTIuNTcxIDIuNTcxIDAgMDAyNCAyMS40MjlWMi41NzFBMi41NzEgMi41NzEgMCAwMDIxLjQyOSAwek01LjAzNiAyMC41NzFhLjguOCAwIDAxLS43ODMtLjYyM2wtLjgtMy40ODJhLjguOCAwIDAxLjQ2Ni0uOTE5bDMuNzUtMS42MDdhLjguOCAwIDAxLjkzOC4yM2wxLjY2MSAyLjAzYTEyLjQyIDEyLjQyIDAgMDA1LjkzMi01LjkzNUwxNC4xNyA4LjZhLjguOCAwIDAxLS4yMy0uOTM4bDEuNjA3LTMuNzVhLjguOCAwIDAxLjkxOS0uNDY2bDMuNDgyLjhhLjguOCAwIDAxLjYyMy43ODNBMTUuNTM1IDE1LjUzNSAwIDAxNS4wMzYgMjAuNTcxeiIgZmlsbD0iIzEwOTRmOCIvPjwvc3ZnPg==' className='w-[24px] h-[24px]'/>
    <h1 className='text-2xl mt-4 ml-6 font-normal'>Constant support</h1>
    <p className='mt-3 text-lg text-[#545454]'>You lead from start to finish while our team is available to lend a helping hand (8349455105) 24X7.</p>
  </div>
</div>
</div>
  <div className='float-right w-[40%] h-[50rem] mt-[4rem]'>
  <div className=' bg-[#f9fafa]  w-[50%] h-[10rem]'> 
  <h1 className='text-2xl mt-4 ml-6 font-bold'>Match</h1>
  <p>The Eazyway instantly connects you to the available loads.</p>
  </div><br/>
  <div className=' bg-[#f9fafa] mt-6  w-[50%] h-[10rem]'>  <h1 className='text-2xl mt-4 ml-6 font-bold'>Track</h1>
  <p>Track your journey, details of the clients, {"&"} be ready for offload or onload. Manage all your work with just a few clicks.</p>
  </div><br/>
  <div className=' bg-[#f9fafa] mt-d  w-[50%] h-[10rem]'> <h1 className='text-3xl mt-4 ml-6 font-bold'>Make the payment</h1>
  <p>With our UI {"&"} a wide consumer base, analyze the efficiencies of your fleet and identify opportunities to succeed. Speed through processing with paperless invoices, PODs and BOLs.</p>
  </div><br/>
  </div>


    <div  className=' footer w-full h-[14rem] bg-black mt-[50rem] p-5'>
<div  className=' w-[23%] h-[10rem] float-left   bg-slate-700  text-white   m-2 p-9 list-none  text-center '>
<li >
            <Link to="/" className='p-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>Home
            </Link>
            </li>
            <li >
            <Link to= "/" className='p-2' >
              Home my-0 
            </Link>
            </li>
</div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'> <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Home
            </Link>
            </li>
      </div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'>  <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li></div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white p-9
  m-2    list-none  text-center '>  <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Home
            </Link>
            </li></div>

</div>
   </>
  )
}

export default Driver