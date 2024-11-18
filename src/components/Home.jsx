
import React from 'react';
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from './pizzas';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
