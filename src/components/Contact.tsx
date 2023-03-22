import React from 'react';
import resumedata from '../data.json'

function Contact() {
    return (
      <div>
        <span>{resumedata.profile.location}</span>・
        <span><a href={'mailto:' + resumedata.profile.email}>syuanyingwu@vt.edu</a></span>・
        <span><a href={resumedata.profile.linkedin}>github.com/a19091908</a></span>・
        <span><a href={resumedata.profile.linkedin}>linkedin.com/syuan-ying-wu/</a></span>
        <div>He is an M.S. student in Computer Science at Virginia Tech, with over five years of experience in the software industry. His skill set includes a strong command of Java, Python, React, Node.js, NoSQL, and SQL, among other languages and tools. Throughout his career, he has successfully developed a range of systems and programs. He is currently working as a Graduate Assistant at Virginia Tech, where he is developing a threat detection system for the Washington D.C. area's metro.</div>
      </div>
    );
  }
  
  export default Contact;