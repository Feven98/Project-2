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
      <div className="container">
      <div className="title">
            <h1>This is the receipe for food</h1>
            <h4>Description</h4>
             </div>
      {/* <div className="searchCase">
            <input type="search" className="searchBox" placeholder="Enter Food Name"/>
        </div> */}
      <Routes>
        <Route path='/' element={<FoodContainer/>}/>
        <Route path='/detail/:idMeal' element={<FoodDetail/>}/>
      </Routes>  
      </div>
    </div>
    
  );
}

export default App;
