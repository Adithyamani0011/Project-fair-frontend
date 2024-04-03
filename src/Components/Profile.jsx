// import React from 'react'

// function Profile() {
//   return (
//     <div>
//       <div>
//         <label>

//         </label>
//       </div>
//     </div>
//   )
// }

// export default Profile

import React from 'react'
import Swal from 'sweetalert2'
function Profile() {
    const updateUser = ()=>{
    Swal.fire({
        title: 'Success😍!',
        text: 'User details updated',
        icon: 'success',
        confirmButtonText: 'Back'
      })
    }
  return (
    <div>
        <div className='text-center'>
            <h3 className='mt-5'>My Profile</h3>
            <label>
                <input type="file" style={{display:'none'}} />
                <img width={'200px'} src="https://cdn1.iconfinder.com/data/icons/interaction-18/70/profile__account__user__upload__male-512.png" alt="" />
            </label>
            <div className='mx-5 px-5'>
            <input type="text" placeholder='Name' className='form-control mb-2' />
            <input type="text" placeholder='Github' className='form-control mb-2' />
            <input type="text" placeholder='Live Link' className='form-control mb-2' />
             <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>
             </div>
        </div>
    </div>
  )
}

export default Profile