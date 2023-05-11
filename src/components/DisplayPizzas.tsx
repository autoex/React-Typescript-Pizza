import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
  pizzas: Pizza[];
  deletePizza: (id: string ) => void;
  upDatePizza: (pizza: Pizza ) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzas, deletePizza, upDatePizza }) => {
  return (
    <div className='container'>
      {pizzas.map((pizza) => (
        <SinglePizza
          key={pizza.id}
          pizza={pizza}
          deletePizza={deletePizza}
          upDatePizza={upDatePizza}
        />
      ))}
    </div>
  );
};

export default DisplayPizzas;
