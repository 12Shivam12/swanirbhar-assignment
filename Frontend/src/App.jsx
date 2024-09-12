import AboutUs from "./Components/AboutUs"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from "./Components/Signup"
import Login from "./Components/Login"

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/log-in' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
