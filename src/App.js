import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className='todo-list'>
      <div className='my-logo-container'>
        <img src={logo} className='my-logo' />
      </div>
      <div className='main-list-tasks'>
        <h1>My tasks</h1>
      </div>
    </div>
  );
}

export default App;
