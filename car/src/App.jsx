import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Foot from './components/Foot'
import Navbar from './components/Navbar'
import Vehicles from './pages/Vehicles'
import Service from './pages/Service'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Sign from './pages/Sign'
import Shop from './pages/Shop'
import { CartProvider } from './components/CartContext';

function App() {
 
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles/>} />
        <Route path='/shop' element={<Shop/>} /> 
        <Route path='/service' element={<Service/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/logout' element={<Logout />} />
        
      </Routes>
      
      <Foot />
      </CartProvider>

      </BrowserRouter>
      
    </>
  )
}

export default App
