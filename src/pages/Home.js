// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to BiriProjects</h1>
      <div className="code-animation">
        <p>console.log('Hello, World!');</p>
        <p>const theme = 'dark';</p>
        <p>function welcome() {'{'}</p>
        <p>  return 'Welcome to BiriProjects';</p>
        <p>{'};'}</p>
      </div>
    </div>
  );
}

export default Home;
