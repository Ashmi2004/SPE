import React, {useState} from 'react';
import dayjs from 'dayjs';
import {Box, Grid, FilledInput, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material'

function JobCard(props) {

    const date=dayjs(Date.now());
    const dayDiff=Math.abs(date.diff(props.postedOn,'day'));

    const [open,setOpen]=useState(false);
    const handleApply = () => {
        setOpen(true);
        console.log("Submit!!");
    };
    const handleClose=()=>{
        console.log("Closed!!");
        setOpen(false);
    };
    const handleSubmit = () => {
        console.log("Submit!!");
        handleClose();
    };

  return (
    <div>
        <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shdow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105'>
            <div className='flex flex-col items-start gap-3'>
            <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
            <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
            <div className='flex items-center gap-2'>
                {props.skills.map((skill) => (
                <p className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                ))}
            </div>
            </div>
            <div className='flex items-center gap-4 '>
                <p className='text-gray-500'>Posted {dayDiff} days ago</p>
                <button className='text-blue-500 hover:bg-blue-300 border border-blue-500 px-10 py-2 rounded-md' onClick={handleApply}>Apply</button>
            </div>
        </div>
        </div>
        <Dialog open={open} fullWidth>
            <DialogTitle>Apply for Job</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Full Name*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Age*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Experience in Years*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <Box component='h1' fullWidth>Resume*</Box>
                        <input type='file' fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder='Address*' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder='Description about you*' disableUnderline fullWidth multiline rows={3}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' },color: 'white',}}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} sx={{backgroundColor:'blue', '&:hover':{backgroundColor: 'darkblue' },color: 'white'}}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default JobCard