import React from 'react';
import logo from './images/logo.png';
import './App.css';
// import Task from './components/Task'
import FormTask from './components/FormTask';

function App() {
  return (
    <div className='todo-list'>
      <div className='my-logo-container'>
        <img src={logo} className='my-logo' alt='description' />
      </div>
      <div className='main-list-tasks'>
        <h1>My tasks</h1>
        <FormTask></FormTask>
      </div>
    </div>
  );
}

export default App;
