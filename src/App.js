import logo from './logo.svg';
import './App.css';
// template + logic
// jsx
function App() {
  let link = 'https://www.youtube.com/watch?v=2hKDGAcHw5M';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <a href={link} target='_blank'>Click me</a>
      </header>
    </div>
  );
}


export default App;
