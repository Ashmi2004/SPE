import React, {useState} from 'react'
import {Box, Grid, Typography, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material'
import HrCard from './component/HrCard'
import HrDummyData from './HrDummyData'

function HrPortal() {

    // const[open,setOpen]=useState(false);
    // const handleClose=()=>{
    //     console.log("Closed!!");
    //     setOpen(false);
    // };
    // const handleShow = () => {
    //     console.log("Show!!");
    //     setOpen(true)
    // };

  return (
    <div>
        <div className='mt-10 pb-5 flex flex-col gap-5 items-center justify-center text-white'>
            <h1 className='text-5xl font-bold'>
                See who has applied to your job opening
            </h1>
        </div>
        <div className='pt-5'>
            {HrDummyData.map((data)=>(
                <HrCard key={data.applicant_id} {...data}/>
            ))}
        </div>
        {/* <HrCard/> */}
    </div>
  )
}

export default HrPortal