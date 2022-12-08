import './App.css'
import React from 'react';
import FoodContainer from './components/FoodContainer'
import './components/style.css'
import FoodItem from './components/FoodItem';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import FoodDetail from './components/FoodDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path='/' element={<FoodContainer/>}/> */}
        <Route path='/:MealId' element={<FoodDetail/>}/>
      </Routes>
      </Router>
      
  <FoodContainer/>
    </div>
  );
}

export default App;
