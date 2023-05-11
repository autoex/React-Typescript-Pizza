import { ChangeEvent, FC, FormEvent, ReactNode, useRef } from 'react';
import useOnClickOutside from './hooks/useOnClickOutside';

type Pizza = {
  title: string;
  price: string | number;
  img: string;
  id?: string;
};

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  pizza: Pizza;
  btnTxt: ReactNode;
  edit?: true | undefined;
  setEditMode?: any
}

const Form: FC<FormProps> = ({
  handleChange,
  handleSubmit,
  pizza,
  btnTxt,
  edit,
  setEditMode,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(formRef, () => setEditMode(false));

  return (
    <form
      ref={edit && formRef}
      className={edit && 'edit-form'}
      onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Name'
        onChange={handleChange}
        value={pizza.title}
      />
      <input
        type='number'
        name='price'
        placeholder='Prize'
        onChange={handleChange}
        value={pizza.price}
      />
      <input
        type='text'
        name='img'
        placeholder='Img'
        onChange={handleChange}
        value={pizza.img}
      />
      <button>{btnTxt}</button>
    </form>
  );
};

export default Form;
