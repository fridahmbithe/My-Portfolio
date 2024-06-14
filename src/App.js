import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Landing } from './components/Landing';
import Resume from './Resumeoutput';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Skills />
      <Projects />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
