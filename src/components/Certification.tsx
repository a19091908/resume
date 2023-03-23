
export const Certification = (props: any) => {
    const {name, company, date} = props.certification;
    return (
        <div>
            <div style={{fontWeight: "bold"}}>{name}</div>
            <div>{company}, {date}</div>
        </div>
    )
};