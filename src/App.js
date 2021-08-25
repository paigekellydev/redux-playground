import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore, combineReducers } from 'redux'

// wrap app in provider which gives access to store
import { Provider } from 'react-redux'
function App() {

  let incrementAction = {type: "INCREMENT"}
  const reducers = combineReducers({count})
  const store = createStore(reducers)
  let counter = 0
  
  // reducer- a function that takes in state & action
  // count reducer controls state of count only
  // initialized with state of 0 for count specifically
  // switch statements always need default case

  function count(state=0, action) {
    switch(action.type) {
      case "INCREMENT":
        return state + 1
      case "DECREMENT":
        return state - 1
      default:
        return state
    }
  }

  const handleClick = () => {
    // store.dispatch is the only way to change state
    store.dispatch(incrementAction)
    console.log(counter)
  }
  
  // store.subscribe takes in a function and everytime state changes
  store.subscribe(() => {
    // console.log(store.getState().count)
    counter = store.getState().count
  })

  const displayCount = () => {
    return (
      <h2>{counter}</h2>
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        {displayCount()}
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
