import {React,useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import eazy from "./eazy.jpg"
import Div3 from './Div3';
import Div1 from './Div1';





 
function Registration() {
 
  
   
 const requirement =(e)=>{
   console.log(e.target.value);
   setwhichshow(e.target.value)
   console.log(whichshow);
 }
 const [divshow, setdivshow] = useState(true);
const [indust, setindust] = useState(false);
 const [show, setshow] = useState(true);
 const [whichshow, setwhichshow] = useState("");
 let a= {whichshow};
  
 const updiv =()=>{
  if(whichshow ==="PERSONAL-PURPOSE" || whichshow=== "INDUSTRIAL-PURPOSE" ){
    setdivshow(false)
  }
  else{
    setdivshow(true)
  }
}
 useEffect(() => {
  whichshow === "PERSONAL-PURPOSE"
    ? setshow(true)
    : setshow(false);
  whichshow === "INDUSTRIAL-PURPOSE" ? setindust(true) : setindust(false);

}, [whichshow]);

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
            <Link to="/driver" className='pr-2'>
            Become a driver
            </Link>
            </li>
     </nav>

  
    </div>
    <div>
      {show && <Div1 />}
      {indust && <Div3 />}
    </div>
  {
divshow?
       <div className='w-full h-[12rem] bg-blue-800'>
         <h1 className='text-white text-center text-4xl '>Choose your Requirement so ,<br/> we fatch vehicle for you</h1>
       </div>: null
}

    <div className=' bg-blue-100 w-full grid justify-items-center'>
   
  <select  className='bg-gray-300 w-[12rem] h-[4rem] ml-4 text-center' value={whichshow} onClick ={updiv} onChange={requirement}>
    
    <option value="requirement">requirement</option>
    <option> PERSONAL-PURPOSE </option>
    <option> INDUSTRIAL-PURPOSE</option>
  </select>

</div>
<div>
<div className ="float-right w-[50%] h-[36rem] bg-white "><h1 className='text-6xl text-black mt-[10rem] '>2 </h1>
  <p className='mt-4 font-extrabold  font-medium   text-2xl text-black'> Choose vehicle of your choice</p>
  <p className=' text-black text-xl mt-3'> Get quotes for vehicles which can carry from<br/> 20 kgs to 2000 kgs and book instantly without any waiting
</p></div>
<div className=''>
  <img src='https://5.imimg.com/data5/SELLER/Default/2022/2/CF/KR/NL/39803990/domestic-goods-transport-services-500x500.jpg'/>
</div>

</div>
 
 <div  className=' footer w-full  h-[11rem]  relative mb-[0] bg-black flex p-5'>
<div  className=' w-[23%] h-[10rem] float-left   bg-slate-700  text-white   m-2 p-9 list-none  text-center'>
<li >
            <Link to="/" className='p-2'>
            Trucks in Indore
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>
            City Tempo
            </Link>
            </li>
            <li >
            <Link to="/" className='p-2'>Porter For Enterprise
            </Link>
            </li>
            <li >
            <Link to= "/" className='p-2' >
            Packers {"&"} Movers
            </Link>
            </li>
</div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'> <li >
            <Link to="/" className='pr-2'>
              services
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              truck
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              Tata-ace
            </Link>
            </li>
            <li >
            <Link to="/" className='pr-2'>
              CITY in which we are
            </Link>
            </li>
      </div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white m-2 p-9 list-none  text-center'>  <li >
            <Link to="/" className=''>
              why we Best
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Carrier
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Drive With us
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              About us
            </Link>
            </li></div>
<div  className=' w-[23%] h-[10rem] float-left bg-slate-700 text-white p-9
  m-2    list-none  text-center '>  <li >
            <Link to="/" className=''>
              why we Start this
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Fast with better
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Privacy policy
            </Link>
            </li>
            <li >
            <Link to="/" className=''>
              Terms of service
            </Link>
            </li></div>

</div>

 </>
  );
}

export default Registration
