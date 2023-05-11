import { FC, ChangeEvent, FormEvent, useState } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';
import Form from './Form';

const initState = {
  title: '',
  price: '',
  img: '',
};

type InitState = {
  title: string;
  price: string;
  img: string;
};

interface AddPizzaProps {
  addPizza: (newPizza: Pizza) => void;
}

const AddPizza: FC<AddPizzaProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<InitState>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPizza((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({
        title,
        img,
        price: +price,
        id: crypto.randomUUID()
      });
      setNewPizza(initState)
    }
  };

  return (
   <Form handleChange={handleChange} handleSubmit={handleSubmit} pizza={newPizza} btnTxt={'Add to menu +'} />
  );
};

export default AddPizza;
