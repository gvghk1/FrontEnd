import React from 'react';
import './home.css';

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GeekText</h1>
        <p>{props.myText}</p>
      </header>
    </div>
  );
}

export default Home;
