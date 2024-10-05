import './App.css';
import Explore from './Components/Explore/Explore';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Service from './Pages/Service';
import ServiceDetail from './Pages/ServiceDetail';
import Projects from './Pages/Projects';
import ProjectsDetail from './Pages/ProjectsDetail';
import Teams from './Pages/Teams';
import Testimonial from './Pages/Testimonial';
import Contacts from './Pages/Contacts';
import GetQuote from './Pages/GetQuote';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/service' element={<Service />} />
      <Route path='/servicedetail' element={<ServiceDetail />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/projectdetail' element={<ProjectsDetail />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/contact' element={<Contacts />} />
      <Route path='/getquote' element={<GetQuote />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
