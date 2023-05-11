import React, { FC, useState, useEffect } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizza';
import Pizza from './models/Pizza';
import DisplayPizzas from './components/DisplayPizzas';

const App: FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzas((prev) => [...prev, newPizza]);
  };

  const deletePizza = (id: string) => {
    setPizzas((prev) => prev.filter((pizza) => pizza.id !== id));
  };

  const upDatePizza = (updatedPizza: Pizza) => {
    setPizzas(
      pizzas.map((pizza) =>
        pizza.id === updatedPizza.id ? updatedPizza : pizza,
      ),
    );
  };

  // useEffect(() => {
  //   localStorage.setItem('pizzas', JSON.stringify(pizzas));
  // }, [pizzas]);

  return (
    <div className='App'>
      <div className='wrap'>
        <span className='heading'>Pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzas={pizzas}
          deletePizza={deletePizza}
          upDatePizza={upDatePizza}
        />
      </div>
    </div>
  );
};

export default App;
