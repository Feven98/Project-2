import './App.css'
import React from 'react';
import FoodContainer from './components/FoodContainer'
import './components/style.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import FoodDetail from './components/FoodDetail';
import { FaHome } from 'react-icons/fa';

function App() {
  
  return (
    <div className="App">
      <div className="container">
{/* linking the home to the detail */}
            <nav>
              <Link to='/'><div className='icon'><FaHome/></div></Link>
            </nav>
{/* Creating route */}
        <Routes>
          <Route path='/' element={<FoodContainer/>}/>
          <Route path='/detail/:idMeal' element={<FoodDetail/>}/>
        </Routes>  
      </div>
      
    </div>
    
  );
}

export default App;
