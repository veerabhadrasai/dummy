import './App.css';
import { Route,Routes } from 'react-router-dom';
import J from './j.js';

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path='/' element={<J/>}/>
     </Routes>
    </div>
  );
}

export default App;
