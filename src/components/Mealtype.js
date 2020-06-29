import React from 'react';


const Mealtype = ({ meal }) => {
    const checkMeal = (meal) => {
        if(meal == 1){
            return <h2>Breakfast</h2>
        } 
        else if (meal == 2){
            return <h2>Lunch</h2>
        }
        else if(meal == 3){
            return <h2>Supper</h2>
        }
        else if(meal == 4){
            return <h2>Snack</h2>
        }
        else  {
            return <h1>Try Again</h1>
        }
    }
   
    return (
        <div>  
            {checkMeal(meal)}
        </div>
    )
}

export default Mealtype;