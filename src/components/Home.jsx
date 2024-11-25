import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <div>Loading pizzas...</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
          
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;

