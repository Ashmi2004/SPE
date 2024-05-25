import React from 'react';
import {useState} from 'react'; 
import HttpService from "../services/HttpService.js";
import webServerUrl from "../configurations/WebServer.js";
import { useNavigate } from "react-router-dom";

function ApplicantDetails() { 
  const [FullName, setFullName] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [gender, setGender] = useState("gender"); 
  const [age, setAge] = useState(""); 
  const [experience, setExperience] = useState(""); 
  const [currentEmploymentStatus, setCurrentEmploymentStatus] = useState(""); 
  const [currentEmployer, setCurrentEmployer] = useState(""); 
  const [description, setDescription] = useState("");
  const [resume, setResume] = useState("");
  
  const navigate = useNavigate();


  const clearForm = () => { 
    setFullName(""); 
    setAddress("");
    setAge("");
    setCurrentEmployer("");
    setCurrentEmploymentStatus("");
    setDescription("");
    setResume("");
    setGender("");
    setExperience("");
  }; 

  const handleSubmit = async(e) => { 
   
        e.preventDefault(); 

        const applicantAddDetailsURL= webServerUrl+"jobBoard/addDetails/hr";

        const method='POST';
        const data={
          fullName:FullName,
          age:age,
          gender:gender,
          address:address,
          experience:experience,
          currentEmploymentStatus:currentEmploymentStatus,
          currentEmployer:currentEmployer,
          description:description,
          resume:resume,
        };

        
        const sessionData = JSON.parse(window.localStorage.getItem('Data'));
        const bearerToken = sessionData.token;

        const headers = {
          'Authorization': `Bearer ${bearerToken}`, // Include your token here
          'Content-Type': 'application/json', // Specify the content type if needed
        };

        try{
          const response=await HttpService(method,applicantAddDetailsURL,data,headers);
          console.log(response.status)
          if(response.status===200){
              console.log("Successful");
              console.log(response.data);
              alert("Details added!");
              navigate('/jobPortal');
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
        
          <h2 className="font-serif text-5xl font-bold text-gray-500 text-center m-5">Applicant Details</h2> 

          <h3 className="font-serif  text-gray-500 text-2xl italic font-bold text-center">Enter your details below: </h3> 

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
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
              <input 
                className="rounded-xl w-30 h-10 bg-white text-black placeholder-black p-5 border-2 border-indigo-500/75"
                value={address} 
                onChange={(e) => { 
                  setAddress(e.target.value); 
                }
                } 
                placeholder="Address" 
              /> 
              </div> 
            </div>
            
          </div>

          <div className="flex">
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
                <input className="rounded-xl w-30 h-10 bg-white  text-black placeholder-black p-5 border-2 border-indigo-500/75" 
                  value={age} 
                  onChange={(e) => { 
                    setAge(e.target.value); 
                  }} 
                  placeholder="Age" 
                /> 
              </div> 
            </div>
            <div className="w-1/2 p-2">
            <div className="relative flex flex-col"> 
            <select
          className="form-select appearance-auto block w-30 h-30 px-5 py-2.5
      text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border -2 border-solid border-indigo-500/75 
      rounded-xl transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        
                value={gender} onChange={(e) => setGender(e.target.value)}  name="gender">
                <option defaultValue={gender}>Choose your gender</option>
                <option value="Female">Female</option> 
                <option value="Male">Male</option> 
                <option value="Other">Other</option> 
                </select>
            </div>
            </div>
            </div>

            <div className="flex">
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
                <input className="rounded-xl w-30 h-10 bg-white  text-black placeholder-black p-5 border-2 border-indigo-500/75" 
                  value={currentEmployer} 
                  onChange={(e) => { 
                    setCurrentEmployer(e.target.value); 
                  }} 
                  placeholder="Current Employer" 
                /> 
              </div> 
            </div>
            <div className="w-1/2 p-2">
            <div className="relative flex flex-col"> 
            <select
          className="form-select appearance-auto block w-30 h-30 px-5 py-2.5
      text-base font-normal text-black bg-white bg-clip-padding bg-no-repeat border -2 border-solid border-indigo-500/75 
      rounded-xl transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        
                value={currentEmploymentStatus} onChange={(e) => setCurrentEmploymentStatus(e.target.value)}  name="currentEmploymetStatus">
                <option defaultValue={currentEmploymentStatus}>Employment Status</option>
                <option value="Working">Working</option> 
                <option value="Open for work">Open for work</option> 
                <option value="Serving Notice Period">Serving Notice Period</option> 
                </select>
            </div>
            </div>
          
          </div>
          <div className="flex">
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
              <input 
                className="rounded-xl w-30 h-10 bg-white text-black placeholder-black p-5 border-2 border-indigo-500/75"
                value={experience} 
                onChange={(e) => { 
                  setExperience(e.target.value); 
                }
                } 
                placeholder="Experience" 
              /> 
              </div> 
            </div>
            <div className="w-1/2 p-2">
              <div className="relative flex flex-col"> 
              <input 
                className="rounded-xl w-30 h-10 bg-white text-black placeholder-black p-5 border-2 border-indigo-500/75"
                value={resume} 
                onChange={(e) => { 
                  setResume(e.target.value); 
                }
                } 
                placeholder="Resume" 
              /> 
              </div> 
            </div>
            
          </div>
          <div className="flex">
              <div className="relative flex flex-col"> 
              <input 
                className="rounded-xl w-30 h-10 bg-white text-black placeholder-black p-5 border-2 border-indigo-500/75"
                value={description} 
                onChange={(e) => { 
                  setDescription(e.target.value); 
                }
                } 
                placeholder="Description" 
              /> 
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




export default ApplicantDetails;
