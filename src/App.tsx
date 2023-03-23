import './App.css';
import Header from './containers/Header';
import { resumeData } from './components/ResumeData';
import Experiences from './containers/Experiences';
import { Educations } from './containers/Educations';
import { Certifications } from './containers/Certifications';

function App() {
  return (
    <div className="App">
      <Header profile={resumeData.profile}/>
      <Educations educations={resumeData.profile.educations}/>
      <Experiences headerName="Experience" experiencs={resumeData.experiences}/>
      <Experiences headerName="Personal Project" experiencs={resumeData.personal_projects}/>
      <Certifications certifications={resumeData.certificates} />
    </div>
  );
}

export default App;
