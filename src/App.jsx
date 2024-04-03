
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Projects from './Pages/Projects'
import {Navigate} from 'react-router-dom'
function App() {
  
  return (
    <>
   
    <Header/>
       <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'login'} element={<Auth/>}/>
        <Route path={'register'} element={<Auth register/>}/>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        <Route path={'projects'} element={<Projects/>}/>
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
       </Routes>
    <Footer/>
    </>
  )
}

export default App
