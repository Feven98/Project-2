import './App.css'
import Food from './components/Food';
import './components/style.css'
import FoodItem from './components/FoodItem';
function App() {
  return (
    <div className="App">
      <h1>Food Recipe</h1>
      <Food/>
      <FoodItem/>
    </div>
  );
}

export default App;
