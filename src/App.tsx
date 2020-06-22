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

  const addTodo = (title: string):void => {
    const newTodo: ITodo[] = [...todos, {title, complete: false}]
    setTodos(newTodo);
  };

  const completeTodo = (index: number):void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  };

  const removeTodo = (index: number):void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          required
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
       </form>
       <section>
          {todos.map((todo:ITodo, index:number) => 
            <Fragment key={index}>
              <div style={{ textDecoration: todo.complete? 'line-through' : ''}}>
                {todo.title}
              </div>
                <button type="button" onClick={() => completeTodo(index)}>{todo.complete ? 'Incomplete' : 'Complete'}</button>
                <button type="button" onClick={() => removeTodo(index)}>Remove</button>
            </Fragment>
          )}
       </section>
    </Fragment>
  )
}