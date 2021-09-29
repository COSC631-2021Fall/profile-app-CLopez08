import './App.css';
import Footer from './Components/Footer';
import { Languages, Education } from './Components/About';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Programmer Profile</h1>
      <h2>I'm a student and Junior Web Developer</h2>
      <Education />
      <Languages />
      <Footer />
    </div>

    
  );
}

export default App;
