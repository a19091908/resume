import React from 'react';
import Contact from '../components/Contact';
import resumedata from '../data.json'
function Header() {
  return (
    <section>
        <h1>{resumedata.profile.name}</h1>
        <Contact />
    </section>
  );
}

export default Header;