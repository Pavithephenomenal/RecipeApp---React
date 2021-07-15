import React from 'react';
import style from "./recipe.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>

            <img className={style.image} src={image} alt="" />
            <p>Calories={calories} cal</p>
        </div>
    );
}

export default Recipe;