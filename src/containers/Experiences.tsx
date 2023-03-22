import { Experience } from "../components/Experience";
const Experiences = (props: any) => {
    const experiencs = props.experiencs;
    return (
        <section>
            <h2>Experience</h2>
            {experiencs.map( (experience: any, i: number) =>  <Experience experience={experience} key={i}/>)}
        </section>
    )
}

export default Experiences;