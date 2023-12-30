import './App.css';
import { Route, Routes } from 'react-router-dom';
import J from './j.js';
import Contact from './contact.js';
import Navbar from './navbar.js';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
     <Routes>
         <Route path='/' element={<J/>}/>
         <Route path='/Contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
