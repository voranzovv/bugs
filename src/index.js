import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { bugAdded, bugResolved } from './action';
console.log('store changed', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('store changed', store.getState());
})

const handleAddBug = () => {
  store.dispatch(bugAdded('bug1'));

}

const resolveBug = () => {
  store.dispatch(bugResolved(1));


}

const handleDeleteBug = () => {
  unsubscribe();
  // store.dispatch({
  //   type: actions.BUG_REMOVED,
  //   payload: {
  //     id: 1
  //   }
  // })
}

ReactDOM.render(
  <React.StrictMode>
    <button onClick={handleAddBug}>Add Bug</button>
    <button onClick={handleDeleteBug}>Delete Bug</button>
    <button onClick={resolveBug}>Resolve Bug</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

