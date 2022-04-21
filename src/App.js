import react from 'react';
import './App.css';
import Body from './Components/Body';



import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cardcontainer from './Components/Cardcontainer';
import Footer from './Components/Footer';


function App() {
  return (
    <>
   <Router>
     <Navbar/>
     <Body/>
    <Cardcontainer/>
    <Footer/>
    
     <Routes>
       
       
     </Routes>
   </Router>
   </>
  );
}

export default App;
