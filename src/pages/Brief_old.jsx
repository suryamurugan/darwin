import React from 'react';
import  brief from "../temp/brief.png";
const Brief = ()=>{
    return <div>
        <div style={{width:"100%"}}>
        <img width="100%" src={brief}></img>
        </div>
        <TheBackground />
        <TheRoadBlocks />
        
    </div>
}

const TheBackground = ()=>{
    return <div style={{background:"#ececec"}}>
        <div style={{paddingTop:"40px"}}>
            <h3  style={{color:"#00124D"}}>JURY PROCESS </h3>
        </div>
        <div style={{display:"flex"}}>
        <div style={{background:"white",height:"1px",width:"40%"}}>.</div>
        <div style={{background:"orange",height:"3px",width:"5%"}}>.</div>
        <div style={{background:"#707070",height:"1px",width:"55%"}}></div>
        </div>
        <br/>
        
        <div style={{width:"70%",margin:"auto"}}>
        Over the past 15 years, India has undergone a rapid metamorphosis. The country has never in the recent past posed a younger outlook with such heightened aspirations. Today, it not only stands amongst the top 5 global economies but also is an important force in global and regional politics.
        <br/>
        <br/>
        The country has never in the recent past posed a younger outlook with such heightened aspirations. 
        <br/>
        <br/>
        What is a nation but its people? India has a young populace - every third person in an Indian city today is a youth. The median individual in India or nearly 64 per cent of its population is in the working age group, making it the youngest country in the world. 
        <br/>
        <br/>
        Every great design begins with an even better story.
        - Lorinda Mamo
        </div>
    </div>
}

const TheRoadBlocks = ()=>{
    return <div style={{background:"#ececec"}}>
        <div style={{paddingTop:"40px"}}>
            <h3  style={{color:"#00124D"}}>THE ROADBLOCKS </h3>
        </div>
        <div style={{display:"flex"}}>
        <div style={{background:"white",height:"1px",width:"40%"}}>.</div>
        <div style={{background:"orange",height:"3px",width:"5%"}}>.</div>
        <div style={{background:"#707070",height:"1px",width:"55%"}}></div>
        </div>
        <br/>
        No nation is as diverse as India. India is a confluence of regions,climates, languages, religions, cultures and tradiditons.
</div>
}

const TheSolution = ()=>{
    return <></>
}

const FromRtoR = ()=>{
    return <></>
}
const CompetitionChallange = ()=>{
    return <></>
}

export default  Brief;