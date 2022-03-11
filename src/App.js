import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { Countdown, NewCountDown } from './views/Countdown';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
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

  useEffect(() => {
    console.log('run use effect');
  }, [address])

  const handleEvenClick = (event) => {

    //hooke not merge state
    // setName(address)
    // console.log('click me', name)
    if (!address) {
      alert('empty input')
      return;
    }

    let todo = {
      id: Math.floor((Math.random() * 100) + 1)
      , title: address, type: 'hip'
    }
    setTodos([...todos, todo]);
    setAddress('')
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesUp = () => {
    alert('times up')
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path='/' exact={true}>
              <Covid />
            </Route>
            <Route path='/countdown'>
              <Countdown onTimesUp={onTimesUp} />
              <NewCountDown onTimesUp={onTimesUp} />
            </Route>
            <Route path='/todo' exact={true}>

              <Todo
                myData={todos}
                title='all todos'
                deleteDataTodo={deleteDataTodo}
              />
              <Todo
                myData={todos.filter(item => item.type === 'hip')}
                title='hip todos'
                deleteDataTodo={deleteDataTodo}

              />

              <a href={link} target='_blank'>Click me</a>
              <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} ></input>
              <button type='button' onClick={(event) => { handleEvenClick(event) }}>CLick me</button>

            </Route>
          </Switch>

          {/* <Countdown onTimesUp={onTimesUp} />
          <span>-------------------</span>
          <NewCountDown onTimesUp={onTimesUp} />
          <h1>Hello {name} {address}</h1>
          <Covid /> */}

          {/* <Todo
          myData={todos}
          title='all todos'
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          myData={todos.filter(item => item.type === 'hip')}
          title='hip todos'
          deleteDataTodo={deleteDataTodo}

        />

        <a href={link} target='_blank'>Click me</a>
        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} ></input>
        <button type='button' onClick={(event) => { handleEvenClick(event) }}>CLick me</button> */}



        </header>
      </div>
    </Router>

  );
}


export default App;


