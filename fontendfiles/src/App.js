import './App.css';
import VideoGalllery from './components/Video Gallery/VideoGalllery';
import Faq from './components/F.A.Q/Faq';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
     
     <VideoGalllery></VideoGalllery>
      <Faq/>
      <Footer />
     
    </div>
  );
}

export default App;
