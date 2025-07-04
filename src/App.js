import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Component/Detail';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';
import Services from './Component/Services';
import Enquiry from './Component/Enquiry';
import Learn from './Component/Learn';
import Project from './Component/Project';
import Intro from './Component/Intro';
import Ourteam from './Component/Ourteam';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Detail />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Enquiry' element={<Enquiry />} />
        <Route path='/Learn' element={<Learn />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Intro' element={<Intro />} />
        <Route path='/Ourteam' element={<Ourteam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
