import { JobInfo } from "./JobInfo";
import "../styles/Experience.css"
export const Experience = (props: any) => {
    const { title, company, location, start_date, end_date, job_descriptions, skills } = props.experience;
    return (
        <div>
            <JobInfo title={title} company={company} location={location} start_date={start_date} end_date={end_date} />
            <ul className="jobs">
                {job_descriptions.map((jd: string, i: number) => <li className="job_description" key={i}>{jd}</li>)}
            </ul>
            <div className="">
                {skills.map((skill: string, i: number) => <span className="" key={i} >{(i !== 0) ? ", " : ""}{skill}</span>)}
            </div>
        </div>
    )
}
