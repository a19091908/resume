import "../styles/JobInfo.css"
export const JobInfo = (props: any) => {
    const {title, company, location, start_date, end_date} = props;
    const displayLocation = (location !== '') ?  (", " + location) : ("") ;
    const displayDate = (end_date !== '') ? start_date + " - " + end_date : start_date
    return (
        <>
            <div className="title_and_date">
                <span className="job_title">{title}</span>
                <span>{displayDate}</span>
            </div>
            <div className="company_and_location">{company}{displayLocation}</div>
        </>
    )
}