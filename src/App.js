import React from 'react';
import './Components/App.css'; // Assuming App.css is in the same directory as App.js
import './Components/Header.css'; // Assuming Header.css is in the Components directory
import UseEffectAPI from './Components/Index'; // Assuming Index.js exports UseEffectAPI component
import Header from './Components/Header'; // Assuming Header.js exports Header component

function App() {
  return (
    <div>
      <Header />
      <UseEffectAPI />
    </div>
  );
}

export default App;
