import React from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import JobCard from './component/JobCard'
import JobDummyData from './JobDummyData'

function JobPortal() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar/>
      {JobDummyData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default JobPortal