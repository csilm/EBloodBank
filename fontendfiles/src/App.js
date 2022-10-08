import './App.css';
import Donorlogin from './components/Donor Login/Donorlogin';
import Gallary from './components/ImageGallary/Gallary';
import Faq from './components/F.A.Q/Faq'
import VideoGalllery from './components/Video Gallery/VideoGalllery';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";

import BloodStock from './components/Blood Stock/BloodStock';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DonorRegistration from './components/Donor Registration/DonorRegistration';
import RegisterVBD from './components/RegisterVBD/RegisterVBD';
import Thelasamialogin from './components/ThelasamiaLogin/Thelasamialogin';
import Notifications from './components/Notifications/Notifications';
import ContactUs from './components/Contact Us/ContactUs';
import BloodDirectory from './components/Blood_Directory/BloodDirectory';
import All from './Homepage/All';
import All2 from '../src/About_Blood_Donation/All';
import Login2 from '../src/Eraktkosh_Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/videogallary" element={<VideoGalllery></VideoGalllery>}>
          </Route>
          <Route path="/" element={<All/>} ></Route>
          <Route path="/notification" element={<Notifications/>} ></Route>
          <Route path="/contactUs" element={<ContactUs/>} ></Route>
          <Route path="/DonorRegistration" element={<DonorRegistration/>} ></Route>
          <Route path="/Dlogin" element={<Donorlogin/>} ></Route>
          <Route path="/faq" element={<Faq></Faq>} ></Route>
          <Route path="/bloodstock" element={<BloodStock></BloodStock>} ></Route>
          <Route path="/bloodDirectory" element={<BloodDirectory></BloodDirectory>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/register" element={<Register></Register>} ></Route>
          <Route path="/footer" element={<Footer/>} ></Route>
          <Route path="/thelasamia" element={<Thelasamialogin/>} />
          <Route path="/registerVBD" element={<RegisterVBD/>} />
          <Route path="/aboutBloodDonation" element={<All2></All2>} />
          <Route path="/eRaktokoshLogin" element={<Login2></Login2>} />
        </Routes>
      </BrowserRouter>
      </div>


      )
}


      export default App;
