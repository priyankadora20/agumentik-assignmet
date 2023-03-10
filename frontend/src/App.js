
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Package from './pages/Package';
import Signup from './pages/Signup';

function App() {

  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />     
          <Route path="/aboutus" element={<About />} />
          <Route path="/package" element={<Package />} />
        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
