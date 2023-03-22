function Contact(props: any) {
    const {location, email, github, linkedin} = props.profile;
    return (
      <div>
        <span>{location}</span>・
        <span><a href={'mailto:' + email.link}>{email.text}</a></span>・
        <span><a href={github.link}>{github.text}</a></span>・
        <span><a href={linkedin.link}>{linkedin.text}</a></span>
      </div>
    );
  }
  
  export default Contact;