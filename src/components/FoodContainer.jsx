import React from "react";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import FoodRecipe from "./FoodRecipe"
import SearchBar from "./SearchBar";
import {FaHome} from "react-icons/fa"
function FoodContainer(props){
    const[foods, setFoods] = useState([])
    const[isloading,setIsloading]=useState(false)
    const[searchurl,setsearchUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const[find,setFind]=useState("");

    const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

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

        useEffect(()=>{
fetch(searchurl)
.then(res=>res.json())
    .then(data=>{
     console.log(data.meals)
     setFoods(data.meals)
     setIsloading(true);
    })
        },[searchurl])
const handleSubmit=event=>{
    event.preventDefault()
    fetchId(find)
};
const setIndex=(list)=>{
    setsearchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${list}`)
}
return(
    <div className="content">
        <FaHome/>
         <div className="searchCase">
            <SearchBar
            handleSubmit={handleSubmit}
            value={find}
            onChange={event=>setFind(event.target.value)}
            isloading={isloading}
            />
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