
import React, { useState } from 'react';
import Loading from '../Components/Loading';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from '../Base_url/axiosconfig';

import { Link } from 'react-router-dom';


const Home = () => {
const [data,setData]=useState([]);
const [count,setcount]=useState(1);
const [totalImage,setTotalImage]=useState(0);

       
        const GetAllImages = async() =>{
    try{
          const response = await axios.get(`/?page=${count}&limit=8`)
          console.log(response )
              setData(response.data);
              setTotalImage(response.data.total);
          
     } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
             
               
  useEffect(()=>{
    GetAllImages();

 },[count]);   
 const totalpages = Math.ceil(data.length/8)
 const previous=()=>{
  console.log(count)
  if(count>1){
    
    setcount(count-1);
  }
 }
 const next=()=>{
  console.log(count)
   if(count<totalpages){

    setcount(count+1);
  console.log(count)
 }  }
        return data.length?
    ( 
          <div className="w-full h-full p-4">
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((elem,id) => (
                <div key={elem.id} className="bg-blue-400 p-2 rounded-md shadow-md">
                  <Link to={`/SingleImage/${elem.id}`}>
                    <img src={elem.download_url} alt="" className="w-full h-40 object-cover rounded-md" />
                  </Link>
                </div>
              ))}
            </div>
     <div className="btn flex w-full h-50 p-10 m-5 justify-between ">
      <button className='bg-blue-500 active:scale-50 border rounded p-2' onClick={()=>previous()}>Previous</button>
      <button className= 'bg-blue-500 active:scale-50 border rounded p-3' onClick={()=>next()}>Next</button>
      </div> 
            
          </div>
       
      ) :( 
      <Loading/> 
    )
      };
      
      export default Home;