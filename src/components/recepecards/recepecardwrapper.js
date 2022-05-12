import React, {useEffect,useState  }from 'react';
import RecepeCard from "./recepecard";
import './recepecard.css';

const API_KEY = '4b102328e194444a908643f0a46ca414';

let RecepeCardWrapper = (props)=>{
    const [recepes, setRecepes] = useState(null);

    console.log(props); 
    useEffect(()=>{
        if (props.selectedRecepe) fetchRecipe();
        },[props.selectedRecepe]);


    let fetchRecipe = async () =>{
        let response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecepe}&addRecipeInformation=true&number=10`
          );
        let recipeData = await response.json();
        console.log(recipeData);
        setRecepes(recipeData.results);
    }

    return(
        <div className="recepeWrapper"> 
        {
            
        recepes.map ((recipe)=>(
            <RecepeCard key={recipe.id} recipe={recipe}/>



        ))
        
        }
        </div>

    );
        
}


export default RecepeCardWrapper;