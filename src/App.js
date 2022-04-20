import react from 'react';
import './App.css';
import Body from './Components/Body';
import Card from './Components/Card';


import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
   <Router>
     <Navbar/>
     <Body/>
     <Card/>
     <Routes>
       
       
     </Routes>
   </Router>
   </>
  );
}

export default App;
