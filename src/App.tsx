import './App.css';
import Header from './containers/Header';
import { resumeData } from './components/ResumeData';
import Experiences from './containers/Experiences';

function App() {
  return (
    <div className="App">
      <Header profile={resumeData.profile}/>
      <Experiences experiencs={resumeData.experiences}/>
    </div>
  );
}

export default App;
