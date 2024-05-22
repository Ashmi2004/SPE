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
        <div className='mx-40 mb-4 pt-10'>
            <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shdow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105'>
                <div>
                    <h1>Job id: {props.applicant_id}</h1>
                    <h1>Name: {props.Name}</h1>
                    <h1>Age: {props.Age}</h1>
                    <h1>Experience: {props.Experience} Year</h1>
                </div>
                <div>
                    <button className='text-blue-500 hover:bg-blue-300 border border-blue-500 px-10 py-2 rounded-md' onClick={handleShow}>Show More</button>
                </div>
            </div>
        </div>
        <Dialog open={open} fullWidth>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="bg-gray-200 p-4 m-6 shadow-md flex items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Name: {props.Name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className="bg-gray-200 p-4 m-2 shadow-md flex items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Age: {props.Age}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className="bg-gray-200 p-4 m-2 shadow-md flex items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Experience: {props.Experience} year
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className="bg-gray-200 p-4 m-2 shadow-md flex flex-col items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Resume : 
                        </Typography>
                        <a href={props.resume} download className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Download
                        </a>
                    </Grid>

                    <Grid item xs={12} className="bg-gray-200 p-4 m-2 shadow-md flex items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Address: {props.address}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="bg-gray-200 p-4 m-2 shadow-md flex items-center justify-center">
                        <Typography variant="h6" component="h1">
                            Description: {props.Description}
                        </Typography>
                    </Grid>
                </Grid>
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