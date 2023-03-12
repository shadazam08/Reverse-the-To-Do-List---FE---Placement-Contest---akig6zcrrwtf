import React, { useState } from 'react';
import ToDo from './ToDo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, createdAt: new Date(), text: 'Task 1' },
    { id: 2, createdAt: new Date(), text: 'Task 2' },
    { id: 3, createdAt: new Date(), text: 'Task 3' },
    { id: 4, createdAt: new Date(), text: 'Task 4' },
  ]);

  const reverseOrder = () => {
    setTodos(prevTodos => [...prevTodos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>input</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, createdAt, text }) => (
            <ToDo key={id} todoId={id} createdAt={createdAt}>
              {text}
            </ToDo>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
