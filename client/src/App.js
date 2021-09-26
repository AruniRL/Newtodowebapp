import React from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { Provider } from './context';

function App() {
  return (
    <Provider>
    <div className="app-container">
      <Header/>
      <Addtodo/>
      <Todos/>
    </div>
    </Provider>
  );
}

export default App;
