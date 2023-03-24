import { JobInfo } from "./JobInfo";
import "../styles/Experience.css"
export const Experience = (props: any) => {
    const { title, company, location, start_date, end_date, job_descriptions, skills } = props.experience;
    return (
        <div>
            <JobInfo title={title} company={company} location={location} start_date={start_date} end_date={end_date} />
            <div>
                <ul className="jobs">
                    {job_descriptions.map((jd: string, i: number) => <li className="job_description" key={i}>{jd}</li>)}
                </ul>
            </div>

            <div>
                <span>Skills:&nbsp;</span>
                {skills.map((skill: string, i: number) => {
                    return (
                        <span key={i} >
                            <span>{(i !== 0) ? "・" : ""}</span>
                            <span>{skill}</span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
