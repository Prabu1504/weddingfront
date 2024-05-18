import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Ourstory from './components/Ourstory';
import Gallery from './components/Gallery';
import GuestBook from './components/GuestBook';
import Footer from './components/Location';
import Locationbar from './components/Locationbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Ourstory/>}/>
      <Route path='/Locationbar' element={<Locationbar/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/GuestBook' element={<GuestBook/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
