import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import FoodRecipe from "./FoodRecipe"
import SearchBar from "./SearchBar";
function FoodContainer(props){
    const[food, setFoods] = useState([])
    const[isloading,setIsloading]=useState(false)
    // const[searchurl,setsearchUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const[find,setFind]=useState("");
    const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
    async function fetchId() {
            try {
                const Url=apiUrl+find;
                const response = await fetch(Url);
                const foodData = await response.json()
                // console.log(foodData.meals)
                setFoods(foodData.meals)
                setIsloading(true);

                } catch (err) {
                    console.log(err)
                }
            }
        useEffect(() => {
            fetchId()
        }, []);
const handleSubmit=event=>{
    event.preventDefault()
    fetchId()
};

return(
    <div className="content">
         <div className="searchCase">
            {/* <input type="search" className="searchBox" placeholder="Enter Food Name"/>
            <button className="search-button" type="submit">Search</button> */}
            <SearchBar
            handleSubmit={handleSubmit}
            value={find}
            onChange={event=>setFind(event.target.value)}
            isloading={isloading}
            />
        </div> 
        <div className="listAlphabet">
    <FoodRecipe />
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