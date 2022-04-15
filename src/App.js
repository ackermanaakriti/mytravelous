import react from 'react';
import './App.css';
import Body from './Components/Body';
import About from './About';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/body' element={<Body/>}/>
       <Route path='/about' element={<About/>}/>
     </Routes>
   </Router>
   </>
  );
}

export default App;
