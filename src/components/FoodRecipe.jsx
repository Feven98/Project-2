import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function FoodRecipe(){
const list=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
const[searchurl,setsearchUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
const[find,setFind]=useState();
const[show,setShow]=useState(false)
useEffect(()=>{
    fetch(searchurl)
    .then(res=>res.json())
    .then(data=>{
     console.log(data.meals)
     setFind(data.meals)
     setShow(true);
    })

},[searchurl])
let {strMeal}=useParams()
const setIndex=(list)=>{
    setsearchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${strMeal}`)
    console.log(setIndex)
        
    }
// const handleSubmit=event=>{

// }
    return(
        <>
        {
            list.map((alpha,index)=>{
                return(
                    <div className="alphabet" key={index} onClick={()=>setIndex(alpha)}>
                        <h3>{alpha}</h3>
                    </div>
                )
            })
        }
        
        </>
       
           
    )
}
export default FoodRecipe