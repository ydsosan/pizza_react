//import React, { useEffect, useState } from "react";
//
//const Pizza = () => {
//  const [pizza, setPizza] = useState(null);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    const fetchPizza = async () => {
//      try {
//        const response = await fetch("http://localhost:5000/api/pizzas/p001");
//        const data = await response.json();
//        setPizza(data);
//        setLoading(false);
//      } catch (error) {
//        console.error("Error al obtener la pizza:", error);
//        setLoading(false);
//      }
//    };
//
//    fetchPizza();
//  }, []);
//
//  if (loading) {
//    return <p>Cargando pizza...</p>;
//  }
//
//  if (!pizza) {
//    return <p>No se encontró la pizza.</p>;
//  }
//
//};
//
//export default Pizza;
//
//

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
      <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
    </div>
  );
};

export default Pizza;

