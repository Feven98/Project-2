import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import FoodRecipe from "./FoodRecipe";
function FoodContainer(props){
    const[food, setFoods] = useState([])
    const[isloading,setIsloading]=useState(false)
    const[url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    async function fetchId() {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
                const foodData = await response.json()
                console.log(foodData.meals)
                setFoods(foodData.meals)
                setIsloading(true);
                } catch (err) {
                    console.log(err)
                }
            }
        useEffect(() => {
            fetchId()
        }, []);
const recipeUrl=(list)=>{
    setUrl("https://www.themealdb.com/api/json/v1/1/search.php?f=${list}")
}



return(
    <div className="container">
        <div className="title">
            <h1>This is the receipe for food</h1>
            <h4>Description</h4>
        </div>
        <div className="searchCase">
            <input type="search" className="searchBox"/>
        </div>
        <div className="listAlphabet">
    <FoodRecipe listValue={(list)=>recipeUrl(list)}/>
  </div>
        <div className='appImgBox'>
{
    isloading ? <FoodItem foodData={food}/>: "Not Found"
}
  
  </div>
    </div>
)
}
export default FoodContainer