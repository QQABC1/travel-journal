import React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import data from "./data"
import "./style.css";
export default function App(){
    const cards = data.map((item) => {
        return <Card key={item.id} {...item} />;
    });
    return(
        <div>
           <Navbar />
           <section className="cards-list">{cards}</section>
        </div>
           
    )
}