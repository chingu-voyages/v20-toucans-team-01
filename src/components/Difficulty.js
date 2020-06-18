import React from 'react';

const Difficulty = ({ difficulty }) => {
    return (
        <div>
            <select name="" id="">
                <option value={difficulty}>Beginner</option>
                <option value={difficulty}>Intermediate</option>
                <option value={difficulty}>Advanced</option>
            </select>
        </div>
    )
}

export default Difficulty;