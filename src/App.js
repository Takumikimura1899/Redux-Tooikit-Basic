import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import TaskList from './features/task/TaskList';
import TaskInput from './features/task/TaskInput';
import Fetch from './features/fetch/Fetch';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        <TaskInput />
        <TaskList />
        <div className='fetch'>
          <span>fetch data</span>
          <Fetch />
        </div>
      </header>
    </div>
  );
}

export default App;
