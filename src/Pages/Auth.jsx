import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
        <div className="row">
            <div className="col-lg-6">
                <img src="https://media.licdn.com/dms/image/D4E12AQGWZAOnLDRaQw/article-cover_image-shrink_600_2000/0/1656679844338?e=2147483647&v=beta&t=LXuiCyZghSphTvRRmE7VHke8tY9dUz1o6NTErlbbItQ"  width={'100%'} alt="" className='p-4'/>
            </div>
            <div className="col-lg-6">
                <form className='shadow bg-black m-3' >
                
                <h4 className='text-center m-5'>Project Fair</h4>
              <h4 className='text-center'>
              {
                    register? 'Register Here....':'Login Here...'
                 }
              </h4>
               <div className=' p-5 mt-3'>
                {
                    register &&
                    <input type='text' placeholder='Username' className='form-control mb-2'/>
                   
                }
                 <input type='email' placeholder='Email' className='form-control mb-2'/>
                 <input type='password' placeholder='Password' className='form-control mb-2'/>
               </div>
             <div>
                {
                    register ?
                    <div className='text-center m-2'>
                        <button className='btn btn-dark m-2'>Register</button>
                        <p>Already Registred?<Link to={'/login'}>Login here...</Link></p>
                    </div>
                    :
                    <div className='text-center m-2'>
                        <button className='btn btn-dark m-2'>Login</button>
                        <p>New to Here...<Link to={'/register'}>Register here...</Link></p>
                    </div>
                }
             </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth