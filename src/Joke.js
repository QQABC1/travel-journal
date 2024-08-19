import React from "react";
export default function Joke(props){
    console.log(props)
    return (
        <div>
            <h3>{props.seta} </h3>
            <h3>{props.ans} </h3>
            <hr />
        </div>
    )
}