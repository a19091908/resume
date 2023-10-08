import "../styles/JobInfo.css"
export const JobInfo = (props: any) => {
    const {title, company, location, start_date, end_date, skills, link} = props;
    const displayTitle =  title + ((company !== undefined) ? (" - " + company) : "");
    const displayLocation = (location !== '') ?  (location) : ("") ;
    const displayDate = (end_date !== '') ? start_date + " - " + end_date : start_date
    return (
        <>
            <div className="title_and_location">
                {/* <span className="job_title">{displayTitle}</span> */}
                <a href={link}><span className="job_title">{displayTitle}</span></a>
                <span>{displayLocation}</span>
            </div>
            <div className="skills_and_date">
                <span>
                    {skills.map((skill: string, i: number) => {
                        return (
                            <span key={i} >
                                <span>{(i !== 0) ? "・" : ""}</span>
                                <span>{skill}</span>
                            </span>
                        )
                    })}
                </span>
                <span>{displayDate}</span>
            </div>
        </>
    )
}