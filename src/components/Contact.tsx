import "../styles/Contact.css"
function Contact(props: any) {
    const {location, email, github, linkedin} = props.profile;
    const isBlackMode = props.isBlackMode;
    const linkClass = isBlackMode ? "link_black_mode" : "link_white_mode";

    return (
      <div>
        <span>{location}</span>・
        <span><a href={'mailto:' + email.link} className={linkClass}>{email.text}</a></span>・
        <span><a href={github.link} className={linkClass}>{github.text}</a></span>・
        <span><a href={linkedin.link} className={linkClass}>{linkedin.text}</a></span>
      </div>
    );
  }
  
  export default Contact;