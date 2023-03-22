import Contact from '../components/Contact';
import '../styles/Header.css'

function Header(props: any) {
    const profile = props.profile;
    return (
        <section>
            <h1>{profile.name}</h1>
            <Contact profile={profile} />
            <div className='summary'>{profile.summary}</div>
        </section>
    );
}

export default Header;