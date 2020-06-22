import React, { Fragment, useState, ChangeEvent, FormEvent } from 'react';

type FormElem = FormEvent<HTMLFormElement>;

interface ITodo {
  title: string
  complete: boolean
}

export default () => {
  const [title, setTitle] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  };

  const addTodo = (title: string) => {
    const newTodo: ITodo[] = [...todos, {title, complete: false}]
    setTodos(newTodo);
  }
  
  console.log(todos);

  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          required
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  )
}