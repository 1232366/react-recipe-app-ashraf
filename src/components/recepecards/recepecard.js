import React from 'react';
import {Time, Group } from '../../assets/index'

let RecepeCard = (props)=>{
    let {recipe} =props;
    return(
        <div className="recepe-card">
           <img className="recpeimage" src={recipe.image}></img>
           <span className="recpename">{recipe.title}</span>
           <div className="recepeinfo">
               <Time/> <span>{recipe.readyInMinutes} min</span>
               <Group/><Time/> <span>{recipe.servings}</span>
               <span>{recipe.diets}</span>
           </div>
        </div>

    )
}


export default RecepeCard;