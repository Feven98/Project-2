import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetail(props){

// creating a useState hook
const[detail,setDetail]=useState()

// creating useParams hook
let {idMeal}= useParams()

// create function for the api
const URL=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

// creating useEffect hook to fetch data
useEffect(()=>{
    fetch(URL)
    .then((res)=>res.json())
    .then((json)=>{
    setDetail(json.meals[0])
    }).catch(console.err)
}, [])

// Creating function for the video 
let videoUrl= ""
if(detail){
    const youtubeUrl=detail.strYoutube;
    const str=youtubeUrl.split("=");
    videoUrl=str[str.length-1];
}

return(
    <>
        {
            (!detail)?"":(<>
                <div className="meal">
                    <img src={detail.strMealThumb} alt=""/>
                    <h1>Meal: {detail.strMeal}</h1>
                    <h2>Catagory: {detail.strCategory}</h2>
                 </div>
                <div className="recipe">
                    <h2>Ingridients</h2>
                    <p>{detail.strIngredient1}: {detail.strMeasure1}</p>
                    <p>{detail.strIngredient2}: {detail.strMeasure2}</p>
                    <p>{detail.strIngredient3}: {detail.strMeasure3}</p>
                    <p>{detail.strIngredient4}: {detail.strMeasure4}</p>
                    <p>{detail.strIngredient5}: {detail.strMeasure6}</p>
                    <p>{detail.strIngredient7}: {detail.strMeasure7}</p>
                    <p>{detail.strIngredient8}: {detail.strMeasure8}</p>
                    <p>{detail.strIngredient9}: {detail.strMeasure9}</p>
                    <p>{detail.strIngredient10}: {detail.strMeasure10}</p>
                    <p>{detail.strIngredient11}: {detail.strMeasure11}</p>
                    <p>{detail.strIngredient12}: {detail.strMeasure12}</p>
                    <p>{detail.strIngredient13}: {detail.strMeasure13}</p>
                </div>
                <div className="instruction">
                    <h2>Instruction</h2>
                    <p>{detail.strInstructions}</p>
                </div>
                <div className="video">
                    <h2>Video</h2>
                    <iframe src={`https://www.youtube.com/embed/${videoUrl}`} />
                </div>
             </>)
        } 
    </>
   )
}
export default FoodDetail