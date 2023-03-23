import { Certification } from "../components/Certification";

export const Certifications = (props: any) => {
    const certifications = props.certifications;
    return (
        <section>
            <h2>Certification</h2>
            {certifications.map( (certification: any, i: number) => <Certification certification={certification} key={i}/>)}
        </section>
    )
};