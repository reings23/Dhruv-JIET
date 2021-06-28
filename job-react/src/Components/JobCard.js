import React from "react";


const JobCard = (props) => {
    const {job} = props;

    return(
        <div className={"card"}>
            <div className={"content "}>
                <div className={"header"}>Vacancy For: {job.jobTitle}</div><br/>
                <div className={"header"}>Company: {job.company}</div><br/>
                <div className={"header"}>Location: {job.location}</div><br/>
                <div className={"header"}>Stipend: {job.stipend}</div><br/>
                <button className={"ui primary button"}>Apply</button>
            </div>
        </div>
    );
};
    
export default JobCard;