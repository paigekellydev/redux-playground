import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore } from 'redux'

function App() {

  let incrementAction = {type: "INCREMENT"}
  const store = createStore(count)
  let counter = store.getState()
  
  // reducer- a function that takes in state & action
  // count reducer controls state of count only
  // initialized with state of 0 for count specifically
  // switch statements always need default case

  function count(state=0, action) {
    switch(action.type) {
      case "INCREMENT":
        return state + 1
      default:
        return state
    }
  }

  const handleClick = () => {
    store.dispatch(incrementAction)
  }
  
  // store.subscribe takes in a function and everytime state changes
  store.subscribe(() => {
    // console.log(store.getState())
    counter = store.getState()
    // document.getElementById("counter").innerText(counter)
    console.log(counter)
  })
  
    //
  // console.log(store.getState())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <h2 id="counter">{counter}</h2>
        <button onClick={handleClick}>I'm a button</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
