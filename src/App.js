import './App.css'
import React from 'react';
import FoodContainer from './components/FoodContainer'
import './components/style.css'
import FoodItem from './components/FoodItem';
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom'
import FoodDetail from './components/FoodDetail';
import SearchBar from './components/SearchBar';
import FoodRecipe from './components/FoodRecipe';
import { useState, useEffect } from 'react';
function App() {
  
  return (
    <div className="App">
      <div className="container">
      <div className="title">
            <h1>This is the receipe for food</h1>
            <h4>Description</h4>
             </div>
            
      <Routes>
        <Route path='/' element={<FoodContainer/>}/>
        <Route path='/detail/:idMeal' element={<FoodDetail/>}/>
      </Routes>  
      </div>
      
    </div>
    
  );
}

export default App;
