import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import memoryGame from './reducers'
import { shuffleCards } from './actions';
import { Provider } from 'react-redux'

//Create store and pass the reducer
const store = createStore(memoryGame);
store.dispatch(shuffleCards());

// Provider is given to the store as a prop.
//Provider is a React component that provides store to its child components or it provides redux store to our application.
// Adding App component within the provider makes redux store accessible to our entire application.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
