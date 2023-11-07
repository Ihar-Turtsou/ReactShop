import React from "react";

import './scss/app.scss'
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaBlock } from "./components/PizzaBlock";
// import pizzaItem from "./assets/pizzas.json"



function App() {

  const [pizzaItem, setPizzaItem] = React.useState([])
  
  React.useEffect(()=>{
  fetch("https://654a8e7a1f197d51e492678c.mockapi.io/items").then((res)=>{
   return res.json()
  }).then((arr)=>{
    setPizzaItem(arr)
  })},[])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaItem.map((obj) => <PizzaBlock key ={obj.id}
              {...obj}
            />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
