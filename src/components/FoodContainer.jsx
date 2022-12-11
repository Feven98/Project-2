import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import FoodRecipe from "./FoodRecipe"
import SearchBar from "./SearchBar";

function FoodContainer(props){
// Declaring useState hook 
    const[foods, setFoods] = useState([])
    const[isloading,setIsloading]=useState(false)
    const[searchurl,setsearchUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const[find,setFind]=useState("");

// Declaring API key 
    const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

// Fetching data from the first api (For FoodItem)
    async function fetchId(find) {
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
            fetchId(find)
        }, []);

// Fetching data from the second api (for FoodRecipe)
        useEffect(()=>{
fetch(searchurl)
.then(res=>res.json())
    .then(data=>{
     console.log(data.meals)
     setFoods(data.meals)
     setIsloading(true);
    })
        },[searchurl])

 // Creating a function for searchbar       
const handleSubmit=event=>{
    event.preventDefault()
    fetchId(find)
};

// creating function and setting AOI for list item
const setIndex=(list)=>{
    setsearchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${list}`)
}
return(
    <div className="content">
      <div className="title">
            <h1>This is the Receipe For Meal</h1>

{/* rendereng the functions */}
         <div className="searchCase">
            <SearchBar
            handleSubmit={handleSubmit}
            value={find}
            onChange={event=>setFind(event.target.value)}
            isloading={isloading}
            />
        </div> 
    </div>
        <div className="listAlphabet">
            {
    isloading? <FoodRecipe data={find} listIndex={(list)=>setIndex(list)}/>: 'none'
            }
        </div>     
        <div className='appImgBox'>
            {
    isloading ? <FoodItem foodData={foods}/>: "Not Found"
            }
        </div>
    </div>
)
}
export default FoodContainer