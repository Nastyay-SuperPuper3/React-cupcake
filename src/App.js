import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Layouts/Home/Home';
import About from './Layouts/About/About';
import Photos from './Layouts/Photos/Photos';
import Map from './Layouts/Map/Map';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/map' element={<Map />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
