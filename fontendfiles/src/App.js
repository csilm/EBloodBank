import './App.css';
import Gallary from './components/ImageGallary/Gallary';
import Faq from './components/F.A.Q/Faq'
import VideoGalllery from './components/Video Gallery/VideoGalllery';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import BloodStock from './components/Blood Stock/BloodStock';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<VideoGalllery></VideoGalllery>}>
      </Route>
      <Route path="/faq" element={<Faq></Faq>} ></Route>
      <Route path="/bloodstock" element={<BloodStock></BloodStock>} ></Route>
      <Route path="/login" element={<Login></Login>} ></Route>
      <Route path="/register" element={<Register></Register>} ></Route>
    </Routes>
  </BrowserRouter>


  )
}


export default App;
