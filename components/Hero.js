import React from "react";


export default function Hero(props) {

    return(
        <div> 
            <div className=" mt-6 w-full text-center flex flex-col"> 
               <h1 className="text-3xl md:text-4xl font-bold">{props.title}</h1>

               {props.include_description === true && 
               <div className=" mt-6 flex justify-center ">
                   <p className="basis-1/2">DARYL Score is a novel metric that uses salary statisitics and z-scores 
                    to determine how well a player performs for their contract. 
                    Players that get paid little money but perform well have high DARYL scores.
                     Having multiple players with high DARYL score likely indicates a team is 
                     using their payroll effectively. Click here to learn more about the methodology.</p>
               </div> }
            </div>
        </div>
    )
}