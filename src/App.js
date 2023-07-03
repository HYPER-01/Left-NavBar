import './App.css';
import AboutUs from './componets/AboutUs';
import Contact from './componets/Contact';
import Content from './componets/Content';
import Info from './componets/Info';
import Navbar from './componets/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="flex w-screen h-screen bg-black">
        <Navbar />
        <Routes>
        <Route path='/' element={<Content/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/information' element={<Info/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
