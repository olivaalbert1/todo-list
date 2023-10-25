import logo from './images/logo.png';
import './App.css';
import Task from './components/Task'

function App() {
  return (
    <div className='todo-list'>
      <div className='my-logo-container'>
        <img src={logo} className='my-logo' />
      </div>
      <div className='main-list-tasks'>
        <Task text='learn React'></Task>
        <h1>My tasks</h1>
      </div>
    </div>
  );
}

export default App;
