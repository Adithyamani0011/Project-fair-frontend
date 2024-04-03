import React from 'react'
import { Link } from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-md-6">
                <h1 className='text-center mt-5'>Project Fair</h1>
                <p style={{textAlign:"justify"}} className='mx-5'>The term “project management system” usually refers to a category of software with distinct functionality and features that enable users to accomplish various activities of project management according to best business and work practices. In using the PM system, project teams can create plans, estimates, budgets, tasks, schedules, resource allocations, activities, and reports, and also make decisions that help bring about a successful project delivery.A project management system software is a comprehensive solution for managing projects. Software companies design and develop this type of PM system for the sole purpose of helping project professionals and business users manage requirements, create estimates, build schedules, track progress, manage budgets, generate reports, measure results, and facilitate communication and collaboration.</p>
              <div className='text-center'>
             <Link to={'/login'}>
                <button className='btn btn-dark mt-2 mb-5'>Get Started</button>
             </Link>
              </div>
              
            </div>
            <div className="col-md-6">
                <img src= { programmer}  width={'80%'} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-12" style={{height:'500px'}}>
                <h1 className='text-center m-5'>Explore Project</h1>
                <marquee width="100%" height='400px' direction="left" >
<ProjectCard/>
</marquee>
            </div>
        </div>
        <div className="row m-3">
            <h1 className='text-center m-5'>Our Services</h1>
            <div className="col-md-4">
                <div className='card shadow p-5 'style={{height:'550px'}}>
                   <h3>Web Designing</h3>
                   <p>Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process. Websites have an array of elements presented in ways that make them easy to navigate.Web Designers create and build websites and web pages by combining any number of visual design elements including text, photos, graphics, animations and videos. A Web Designer could create a brand new website or simply make updates to the design .</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className='card shadow p-5' style={{height:'550px'}}>
                <h3 className='text-center m-2'>Single Page Application</h3>
                <p>A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.A single-page application is an app that doesn't need to reload the page during its use and works within a browser. Think of the apps you use daily: Facebook, Google Maps, Gmail, Twitter, Google Drive, or even GitHub. All these are examples of a SPA.</p>
                
             
            
                </div>
               </div>
            <div className="col-md-4">
                <div className='card shadow p-5 'style={{height:'550px'}}>
            <h3 className='text-center m-2'>Backend Services</h3>
                <p>A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.A single-page application is an app that doesn't need to reload the page during its use and works within a browser. service enabling you to create a user-friendly and scalable website.A backend service defines how Cloud Load Balancing distributes traffic. The backend service configuration . </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home