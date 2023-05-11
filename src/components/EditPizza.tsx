import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Pizza from '../models/Pizza';
import Form from './Form';
import './styles.css';

interface EditPizzaProps {
  data: Pizza;
  upDatePizza: (pizza: Pizza) => void;
  setEditMode: (arg:boolean)=> void;
  
}

const EditPizza: FC<EditPizzaProps> = ({ data, upDatePizza, setEditMode }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditPizza((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      upDatePizza(editPizza);
      setEditMode(false);
    }
  };
  

  
  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      pizza={editPizza}
      btnTxt={'Edit'}
      edit
      setEditMode={setEditMode}
    />
  );
};

export default EditPizza;
