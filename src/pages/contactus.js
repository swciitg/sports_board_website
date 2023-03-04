import React from 'react'
import Navbar from '../components/navbar'
import Conta from '../components/conta' 
import Conta2 from '../components/conta2'
import Conta3 from '../components/conta3'
import Footer from '../components/Footer'
import { useEffect, useState } from "react";
import BACKEND_URL from '../constants'
import Loader from '../components/Loader'
const Contactus = () => {
  const [ data, setData]=useState([
    
  ]);
  
  async function getData (){
    try{
    const api = `${BACKEND_URL}/api/contactinfo`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
    setLoad(true);
    }
    catch
    {

    }
  }
  useEffect(()=>{
    getData();
},[])
  const [isLoaded,setLoad] = useState(false);
  console.log(data);
  return (
    isLoaded ? (<div>
      <Navbar name={"Contact Us"} slogan={"We are here for you"}/>
      {data.map((item,index)=>{
        return index%2?<Conta2 info={item}/>:<Conta info={item}/>
      })}
      <Footer/>
    </div>) : 
    (<Loader/>)
    
  )
}
export default Contactus;
