import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Experience from "./components/Experience";
import ContactDetails from './components/ContactDetails';
import data from './assets/json/data.json'

const service_id='service_4z6jb4v';
const template_id='template_dvc7qpg';
const public_key='x3xoMG7KyhwXxLaMv';

function App() {
  return (
    <div className="App">
      <NavBar contacts={data.contacts}/>
      <Banner />
      <Skills skills={data.skills}/>
      <Experience experiences={data.experience}/>
      <Projects />
      <Contact service_id={service_id} template_id={template_id} public_key={public_key} />
      <ContactDetails details={data.contacts}/>
      <Footer />
    </div>
  );
}

export default App;
