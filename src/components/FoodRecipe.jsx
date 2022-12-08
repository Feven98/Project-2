import React from "react";
function FoodRecipe({listValue}){
    const list=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
    return(
        <>
        {
            list.map((item,idx)=>{
                return(
                    <div className="alphabet" key={idx} onClick={()=>listValue(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })
        }
        
        </>
       
           
    )
}
export default FoodRecipe