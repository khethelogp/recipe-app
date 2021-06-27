import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        
            <div className={style.recipe}>
                
                <img src={image} alt="recipe" />

                <h1 className="title">{title}</h1>
                
                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>

                <p>Calories: {calories.toFixed(2)}</p>
                        
            </div>
    );
}


export default Recipe;