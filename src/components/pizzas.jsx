import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (!pizza) {
    return <p>No se encontró la pizza.</p>;
  }

};

export default Pizza;

