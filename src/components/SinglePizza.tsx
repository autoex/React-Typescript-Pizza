import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import EditPizza from './EditPizza';

interface SinglePizzaProps {
  pizza: Pizza;
  deletePizza: (id: string) => void;
  upDatePizza: (pizza: Pizza ) => void;

}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, deletePizza, upDatePizza }) => {
  let { title, price, img, id } = pizza;
  price = +price

  const [editMode, setEditMode] = useState<boolean>(false)

  return (
    <div className='pizza'>
      <img
        src={`/images/${img}`}
        alt={title}
      />
      <h2>{title}</h2>
      <span>
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </span>

      <div className='pizza-controls'>
        <AiFillDelete
          color={'#FF0000'}
          onClick={() => deletePizza(id)}
        />
        <AiFillEdit color={'#FF0000'} onClick={()=>setEditMode((prev)=>!prev)} />
      </div>

      {editMode ? <EditPizza data={pizza} setEditMode={setEditMode} upDatePizza={upDatePizza} /> : null}
    </div>
  );
};

export default SinglePizza;
