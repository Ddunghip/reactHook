import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
// template + logic
// jsx
function App() {
  // usestate tra ra array
  let counter = 100;
  let [name, setName] = useState('Dunghip');//[]
  let link = 'https://www.youtube.com/watch?v=2hKDGAcHw5M';
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todos1', title: 'doing homework', type: 'hip' },
    { id: 'todos2', title: 'watching TV', type: 'hip' },
    { id: 'todos3', title: 'playing game', type: 'Dung' }


  ]);

  const handleEvenClick = (event) => {

    //hooke not merge state
    // setName(address)
    // console.log('click me', name)
    if (!address) {
      alert('empty input')
      return;
    }

    let todo = { id: counter, title: address, type: 'hip' }
    setTodos([...todos, todo]);
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name} {address}</h1>
        <Todo
          myData={todos}
          title='all todos'
        />
        <Todo
          myData={todos.filter(item => item.type === 'hip')}
          title='hip todos'
        />

        <a href={link} target='_blank'>Click me</a>
        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} ></input>
        <button type='button' onClick={(event) => { handleEvenClick(event) }}>CLick me</button>
      </header>
    </div>
  );
}


export default App;
