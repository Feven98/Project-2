import React from "react"
import { Link } from "react-router-dom"
function FoodItem({foodData}){
    console.log(foodData)
    return(
        <>
        {
            (!foodData)?"Not found":foodData.map((item,idx)=>{
                return(
                    <div className="containerImgItem" key={idx}>
                    <img src={item.strMealThumb} alt=""/>
                    <h3>Meal: {item.strMeal}</h3>
                    <h4>Catagory: {item.strCategory}</h4>
                </div> 
                )
            })
        }
    </>
    )
}
export default FoodItem