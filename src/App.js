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
      <Routes>
        <Route path='/' element={<FoodContainer/>}/>
        <Route path='/detail/:idMeal' element={<FoodDetail/>}/>
      </Routes>  
    </div>
  );
}

export default App;
