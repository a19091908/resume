import "../styles/Education.css"
export const Education = (props: any) => {
    const {degree, major, school_name, location, graduation_year, gpa} = props.education;

    const degreeAndMajor = degree + " in " + major;
    const gpaDisplay = "(GPA:" + gpa + ")";
    const schoolInfo = school_name + ", " + location;
    return (
        <div>
            <div className="degreeAndMajorAndGraduationYear" >
                <span className="degreeAndMajor">{degreeAndMajor} {gpaDisplay}</span>
                <span>{graduation_year}</span>
            </div>
            <div>
                <span>{schoolInfo}</span>
            </div>
        </div>
    )
}