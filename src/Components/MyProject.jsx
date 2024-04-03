import React from 'react'
import AddProject from './AddProject'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='text-center ms-5'>My Project</h3>
            <AddProject/>
            
        </div>
        <div className='row shadow m-4 p-5 border'>
            <div className='col-6'>
            <h4>Project title</h4>
            </div>
            <div className='col-6 d-flex justify-content-evenly'>
                    <button className='btn'><FaSquareGithub /></button>
                    <button className='btn'><FaEdit /></button>
                    <button className='btn'><MdDelete /></button>

            </div>
         
        </div>
    </div>
  )
}

export default MyProject