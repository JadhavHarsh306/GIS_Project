import { Route, Routes } from 'react-router-dom';  // ✅ Remove extra Router
import './App.css';
import Info1 from './components/Info1';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Info2 from './components/Info2';
import Info3 from './components/Info3';
import Info4 from './components/Info4';
import AiSolutions from './components/AiSolutions';
import Sources from './components/Source';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Info1/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/objectives/dataCollections" element={<Info2/>}/>
        <Route path="/objectives/realTimeMonitoring" element={<Info3/>}/>
        <Route path="/objectives/artificalIntelligence" element={<Info4/>}/>
        <Route path="/aiSolution" element={<AiSolutions/>}/>
        <Route path="/sources" element={<Sources/>}/>
      </Routes>
    </div>
  );
}

export default App;
