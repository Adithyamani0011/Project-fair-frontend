import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
        <h2 className='text-center m-5' >
All Projects
        </h2>
        <div className='text-center m-4'>
        <input style={{width:"300px",marginLeft:"600px"}} type="text" placeholder='Search by Technology' className='form-control w-50 mx-auto m-5' />
    
        </div>
        <div className="row">
            <div className="col m-4">
                <ProjectCard/>
            </div>
        </div>
      </div>
  )
}

export default Projects