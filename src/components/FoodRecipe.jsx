import React from "react";

function FoodRecipe({listIndex}){

const list=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];

    return(
        <>
        {
            list.map((alpha,index)=>{
                return(
                    <div className="alphabet" key={index++} onClick={()=>listIndex(alpha)}>
                        <h3>{alpha}</h3>
                    </div>
                )
            })
        }
        
        </>
       
           
    )
}
export default FoodRecipe





