import React from 'react';


const Difficulty = ({ difficulty }) => {
    const checkDiff = (diff) => {
        if(diff == 1){
            return <h2>Beginner</h2>
        } 
        else if (diff == 2){
            return <h2>Intermidiate</h2>
        }
        else if(diff == 3){
            return <h2>Advanced</h2>
        }
        else {
            return <h1>Try Again</h1>
        }
    }
   
    return (
        <div>  
            {checkDiff(difficulty)}
        </div>
    )
}

export default Difficulty;