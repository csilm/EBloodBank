import './App.css';
import Gallary from './components/ImageGallary/Gallary';
// import Faq from './components/F.A.Q/Faq'
import VideoGalllery from './components/Video Gallery/VideoGalllery';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
     <Gallary/>
     <VideoGalllery></VideoGalllery>
      {/* <Faq/> */}
      <Footer />
     
    </div>
  );
}

export default App;
