import './App.css';
// import Donorlogin from './components/Donor Login/Donorlogin';
// import Gallary from './components/ImageGallary/Gallary';
import Faq from './components/F.A.Q/Faq'
import VideoGalllery from './components/Video Gallery/VideoGalllery';
// import Footer from './components/Footer/Footer';
// import Navigation from "./components/Navigation/Navigation";

import BloodStock from './components/Blood Stock/BloodStock';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterVBD from './components/RegisterVBD/RegisterVBD';
import Thelasamialogin from './components/ThelasamiaLogin/Thelasamialogin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoGalllery></VideoGalllery>}>
          </Route>
          <Route path="/faq" element={<Faq></Faq>} ></Route>
          <Route path="/bloodstock" element={<BloodStock></BloodStock>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/register" element={<Register></Register>} ></Route>
          <Route path="/thelasamia" element={<Thelasamialogin/>} />
          <Route path="/registerVBD" element={<RegisterVBD/>} />
        </Routes>
      </BrowserRouter>
      </div>


      )
}


export default App;
