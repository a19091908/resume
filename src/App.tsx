import './App.css';
import Header from './containers/Header';
import { resumeData } from './components/ResumeData';
import Experiences from './containers/Experiences';
import { Educations } from './containers/Educations';
import { Certifications } from './containers/Certifications';
import { useState } from 'react';
import { Tools } from './components/Tools';

function App() {
  const [isBlackMode, setIsBlackMode] = useState(false);
  const [isModeHover, setIsModeHover] = useState(false);

  const handleOnChangeReadMode = () => {
    setIsBlackMode(isBlackMode => !isBlackMode);
  }

  const handleOnHoverReadModeIcon = () => {
    setIsModeHover(isModeHover => !isModeHover);
  }

  const appStyle = isBlackMode ? "App dark_mode" : "App white_mode";

  if (isBlackMode) {
    document.body.style.transitionDuration = "1s";
    document.body.style.backgroundColor = "black";
  }else {
    document.body.style.transitionDuration = "1s";
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className={appStyle}>
      <Header profile={resumeData.profile} isBlackMode={isBlackMode}/>
      <Educations educations={resumeData.profile.educations}/>
      <Experiences headerName="Experience" experiencs={resumeData.experiences}/>
      <Experiences headerName="Personal Project" experiencs={resumeData.personal_projects}/>
      <Certifications certifications={resumeData.certificates} />
      <Tools onClickReadMode={handleOnChangeReadMode} onHoverReadModeIcon={handleOnHoverReadModeIcon} isBlackMode={isBlackMode} isModeHover={isModeHover}/>
    </div>
  );
}

export default App;
