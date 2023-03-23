import { Experience } from "../components/Experience";
const Experiences = (props: any) => {
    const experiencs = props.experiencs;
    const headerName = props.headerName;
    return (
        <section>
            <h2>{headerName}</h2>
            {experiencs.map( (experience: any, i: number) =>  <Experience experience={experience} key={i}/>)}
        </section>
    )
}

export default Experiences;