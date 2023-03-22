import "../styles/JobInfo.css"
export const JobInfo = (props: any) => {
    const {title, company, location, start_date, end_date} = props;
    return (
        <div>
            <div className="title_and_date">
                <span>{title}</span>
                <span>{start_date} - {end_date}</span>
            </div>
            <div className="company_and_location">{company}, {location}</div>
        </div>
    )
}