import { Education } from "../components/Education";

export const Educations = (props: any) => {
    const educations = props.educations;
    return (
        <section>
            <h2>Education</h2>
            {educations.map( (education: any, i: number) => <Education education={education} key={i}/> )}
        </section>
    )
}