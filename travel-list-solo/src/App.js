import React from "react"

import './App.css';
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App() {
  
  const cards = data.map( item => {
    return (
          <Card key={item.id}
                {...item} />
    )
  })


  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}


