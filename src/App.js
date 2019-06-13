import React from 'react';
import './App.css';

import Counter from '../src/components/Counter'

function App() {
  return (
      <div className="container">
          <h1>Pusher Spike - app</h1>
          <p>Represents the app part of proposed Pusher implementation</p>
          <Counter/>
      </div>
  );
}

export default App;
