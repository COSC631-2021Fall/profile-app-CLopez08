import './App.css';
import Footer from './Components/Footer';
import { Languages, Education, Contact } from './Components/About';
import Nav from './Components/Nav';
import image from './Me.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const themes = ['#ddd', 'powderblue', '#9e3737'];
  const [themeId, setThemeId] = useState(0);
  const switchTheme = () => {
    setThemeId((id) => (id + 1)%3)
  }
  useEffect(
    () => {
      window.addEventListener("keydown", handleKeydown)
    }
  );
  const handleKeydown = (event) => {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
        setThemeId(parseInt(event.key))
        break;
    }
  }

  return (
    <div className="App" style={{ backgroundColor : themes[themeId] }}>
      
      <Nav />
      <div className="info">
        <h1>Programmer Profile</h1>
        <img src={ image } alt="Chris"></img>
        <h4>Chris Lopez</h4>
        <h2>I'm a student and Junior Web Developer</h2>
        <div>
          <button onClick={switchTheme}>Change Theme</button>
        </div>
        <BrowserRouter>
          <Route path="/edu">
            <Education />
          </Route>
          <Route path="/lang">
            <Languages />
          </Route>
        </BrowserRouter>
        <Contact/>
      </div>
      <Footer />
    </div>

    
  );
}

export default App;
