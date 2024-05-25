import React from 'react';
import {useState} from 'react'; 
import HttpService from "../services/HttpService.js";
import webServerUrl from "../configurations/WebServer.js";
import { useNavigate } from "react-router-dom";

function HRDetails() { 
  const [FullName, setFullName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [Phone, setPhone] = useState(""); 
  const [OrgName, setOrgName] = useState(""); 
  
  const navigate = useNavigate();


  const clearForm = () => { 
    setFullName(""); 
    setEmail(""); 
    setPhone("");
    setOrgName("");
  }; 

  const handleSubmit = async(e) => { 
   
        e.preventDefault(); 

        const hrAddDetailsURL= webServerUrl+"jobBoard/addDetails/hr";

        const method='POST';
        const data={
          hrName:FullName,
          phone:Phone,
          email:email,
          orgName:OrgName,
        };

        
        const sessionData = JSON.parse(window.localStorage.getItem('Data'));
        const bearerToken = sessionData.token;

        const headers = {
          'Authorization': `Bearer ${bearerToken}`, // Include your token here
          'Content-Type': 'application/json', // Specify the content type if needed
        };

        try{
          const response=await HttpService(method,hrAddDetailsURL,data,headers);
          console.log(response.status)
          if(response.status===200){
              console.log("Successful");
              console.log(response.data);
              alert("Details added!");
              navigate('/hrPortal');
          }
          else{
              console.log("else part error:");
              alert(response.data.message);
          }
        }catch(error){
          console.log("catch block of error");
          alert(error.data.message);                   
      } 
        clearForm(); 
    }
  
  

  return ( 
    
    <div className=" flex flex-col h-full dark:bg-blue-950 justify-center content-center">
    <div className="bg-white bg-opacity-85 w-2/3 m-10 rounded-3xl">
      <form className="p-10 m-5 block content-center" onSubmit={handleSubmit}> 
        
          <h2 className="font-serif text-5xl font-bold text-gray-500 text-center m-5">Add Details HR</h2> 

          <h3 className="font-serif  text-gray-500 text-2xl italic font-bold text-center">Enter details of HR below: </h3> 

          <div className="flex">
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
              <input 
                className="rounded-xl w-30 h-10 bg-white text-black placeholder-black p-5 border-2 border-indigo-500/75"
                value={FullName} 
                onChange={(e) => { 
                  setFullName(e.target.value); 
                }
                } 
                placeholder="Full Name" 
              /> 
              </div> 
            </div>
            
          </div>

          <div className="flex">
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
                <input className="rounded-xl w-30 h-10 bg-white  text-black placeholder-black p-5 border-2 border-indigo-500/75" 
                  value={OrgName} 
                  onChange={(e) => { 
                    setOrgName(e.target.value); 
                  }} 
                  placeholder="Orgnisation name" 
                /> 
              </div> 
            </div>
          
          </div>
        

         <h3 className="font-serif  text-gray-500 text-2xl italic font-bold text-left"> Contact Details : </h3>
         <div className="flex">
          <div className="w-1/2 p-2">
          <div className="relative flex flex-col"> 
           
          <span id="error-email"></span>
            <input className="rounded-xl w-30 h-10 bg-white  text-black placeholder-black p-5 border-2 border-indigo-500/75"
              value={email}  
              onChange={(e) => { 
                setEmail(e.target.value); 
              }} 
              placeholder="Email address" 
            /> 
          </div> 
          </div>
          <div className="w-1/2 p-2">
          <div className="relative flex flex-col"> 
          <span id="error-phone"></span>
            <input className="rounded-xl w-30 h-10 bg-white  text-black placeholder-black p-5 border-2 border-indigo-500/75"
              value={Phone} 
              onChange={(e) => { 
                setPhone(e.target.value); 
              }} 
              placeholder="Phone Number" 
            /> 
          </div> 
          </div>
         </div>
         

         <div className="w-1/2 flex justify-center"> 
          <button className= "w-50 h-20 rounded-xl bg-gray-500 bg-opacity-50 p-5 m-10 border-2 border-gray-500 text-center text-stone-900 font-bold" type="submit" 
          > 
            Add Details
          </button>
          </div>
      </form> 
     
    </div> 
    
    </div>
    
  ); 
 } 




export default HRDetails;
