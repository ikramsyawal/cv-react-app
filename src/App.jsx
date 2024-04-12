import './App.css';
import Education from './components/Education';
import PersonalDetails from './components/PersonalDetails';
import Contacts from './components/Contacs';
import WorkExperience from './components/WorkExperience';
import Hobby from './components/Hobby';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div className="Header">
        <PersonalDetails />
        <Contacts />
      </div>
      <div className="container">
        <div className="leftContainer">
          <Education />
          <WorkExperience />
        </div>
        <div className="rightContainer">
          <Hobby />
          <Skills />
        </div>
      </div>
      <button>Edit</button>
    </>
  );
}

export default App;
