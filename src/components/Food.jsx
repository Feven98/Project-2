import React, { useEffect, useState } from "react";
function Food(props) {
const [food, setFoods] = useState([])
async function fetchId() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        const foodData = await response.json()
        // console.log(foodData)
        setFoods(foodData.meals)
        } catch (err) {
            console.log(err)
        }
    }
useEffect(() => {
    fetchId()
}, []);
return (
    <section className="main">
        {food.map((meal, index) => {
            return (
                <div className="header" key={index}>
                    <div className="container">
                        <img src={meal.strMealThumb} alt="" />
                        <h3>{meal.strMeal}</h3>
                    </div>
                </div>
                  )
               })}
    </section>
            )
   }
export default Food