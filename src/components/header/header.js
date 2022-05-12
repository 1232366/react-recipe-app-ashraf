import React from 'react';
import "./header.css";

 let Header = (props) =>{

    // let onButtonClick=()=>{
    //     props.onRecepeSelected(); //callback function
    // }
     return (
        <div className="header">
        <span>
            Tell me Recipes
        </span>
        <nav>
            <button onClick ={(e)=> props.onRecepeSelected("indian")}>Indian</button>
            <button onClick ={(e)=> props.onRecepeSelected("italian")}>Italian</button>
            <button>Arabian</button>
            <button>Spanish</button>
        </nav>
        </div>
     )
 }

 export default Header;