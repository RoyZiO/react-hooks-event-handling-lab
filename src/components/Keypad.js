// Code Keypad Component Here
import React from 'react'
function Keypad (){

    function printPassword(e){
        e.preventDefault()
 
        console.log("Entering password...");
     }
     return (
         <div>
             <input type="password" onChange={printPassword}></input>
         </div>
   
    )
}

export default Keypad;