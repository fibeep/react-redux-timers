import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import new components
import NewTimer from './components/NewTimer'
import ListTimers from './ListTimers'
import { update } from "./actions";
import { loadState, saveState } from "../src/utils/index";
import throttle from "lodash/throttle";

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>TMRZ</h1>
      {/* Display the new components */}
      <NewTimer />
      <ListTimers />
      </div>
    </Provider>
  );
}

export default App;