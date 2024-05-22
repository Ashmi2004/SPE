import React, {useState} from 'react'
import {Box, Grid, Typography, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material'

function HrCard(props) {

    const[open,setOpen]=useState(false);
    const handleClose=()=>{
        console.log("Closed!!");
        setOpen(false);
    };
    const handleShow = () => {
        console.log("Show!!");
        setOpen(true)
    };

  return (
    <div>
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105'>
                <div className='flex space-x-20'>
                    <h1 className='text-lg font-semibold text-gray-800'>
                        <span className='font-bold text-[#3b0764]'>Job ID:</span> {props.applicant_id}
                    </h1>
                    <h1 className='text-lg font-semibold text-gray-800'>
                        <span className='font-bold text-[#3b0764]'>Name:</span> {props.Name}
                    </h1>
                    <h1 className='text-lg font-semibold text-gray-800'>
                        <span className='font-bold text-[#3b0764]'>Age:</span> {props.Age}
                    </h1>
                    <h1 className='text-lg font-semibold text-gray-800'>
                        <span className='font-bold text-[#3b0764]'>Experience:</span> {props.Experience} Year{props.Experience > 1 ? 's' : ''}
                    </h1>
                </div>
                <div>
                    <button className='text-blue-500 hover:bg-blue-300 border border-blue-500 px-10 py-2 rounded-md' onClick={handleShow}>Show More</button>
                </div>
            </div>
        </div>
        <Dialog open={open} fullWidth>
            <DialogContent>
                <div className="p-4 m-6 rounded-md">
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Name:</span> {props.Name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Age:</span> {props.Age}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Experience:</span> {props.Experience} year
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex flex-col items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Resume:</span>
                            </Typography>
                            <a href={props.resume} download className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Download
                            </a>
                        </Grid>
                        <Grid item xs={12} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Address:</span> {props.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="bg-gray-200 border-2 border-[#3b0764] p-4 shadow-md flex items-center justify-center">
                            <Typography variant="h6" component="h1">
                                <span className='font-bold text-[#3b0764]'>Description:</span> {props.Description}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </DialogContent>
            <DialogActions>
                <Box className="text-blue-500 hover:bg-blue-300 border border-blue-500 px-10 py-2 rounded-md">
                    <Button onClick={handleClose} sx={{ color: 'inherit', textTransform: 'none', width: '100%' }}>
                        <h1>Show Less</h1>
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default HrCard