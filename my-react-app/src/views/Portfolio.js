import React from "react";
import Cards from "../components/Cards"
// import BudgetTracker from "../assets/BudgetTracker.png"

function Portfolio(){
    return (
        <div class="container"> 
        <h1>Checkout My Projects.<br></br><br></br> Click To View Repository:</h1><br></br><br></br>
        <div class="row"> 
        <Cards name='Budget Tracker' about='A responsive, easy to use application for keeping a monetary ledger'/>
        <Cards name='DayPlanner'  link=""/>
        <Cards name='Weather App' image='https://github.com/ryanbrowne360/Homework5/blob/main/Images/Screenshot%202020-11-07%20142513.png'/></div>
        <div class="row"> 
        <Cards name='Chatter Ladder'/>
        <Cards name='Restaurant Finder'/>
        <Cards name='ReadMe Generator'/></div> 
        </div>
      
      
    );
    
}

// image={<img  src={BudgetTracker} width="240px" height="280px"/>}



export default Portfolio;