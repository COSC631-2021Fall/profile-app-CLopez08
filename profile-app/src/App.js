import './App.css';
import Footer from './Components/Footer';
import { Languages, Education, Contact } from './Components/About';
import Nav from './Components/Nav';
import image from './Me.jpg';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <div className="info">
        <h1>Programmer Profile</h1>
        <img src={ image } alt="Chris"></img>
        <h4>Chris Lopez</h4>
        <h2>I'm a student and Junior Web Developer</h2>
        <Education />
        <Languages />
        <Contact/>
      </div>
      <Footer />
    </div>

    
  );
}

export default App;
