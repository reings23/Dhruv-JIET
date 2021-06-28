import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import Axios from "axios";
import JobCard from "./JobCard";
import AddJob from "./AddJob";


const Dashboard = (props) => {
   const {user} = props;
   const [jobs, setJobs] = useState([]);
   const [screenType, setScreenType] = useState("SHOW");

   useEffect(() => {
     if (Object.keys(user).length>0) {
       console.log(user._id);
       const fetchJobs = async() => {
         await Axios.get(`http://localhost:4000/job/user/${user._id}`)
         .then(({data: foundJobs}) => {
          console.info("All jobs were found.");
          console.info(foundJobs);
          setJobs(foundJobs);
         })
         .catch((error) =>{
           console.log("Error Occurred", error);
         });
       };
      fetchJobs();
     }
    },[user]);

    const renderCards = jobs.map((job, index) => {
    return <JobCard job={job} key={index} />;
    });

    
  return (
    <div className={"section"}>
      {screenType === "SHOW" ? (
        <>
          <button
            className={"positive ui button"}
            style={{
              float: "right",
              margin: "calc(2rem - .14285714em) 0 1rem",
            }}
            onClick={(e) => setScreenType("ADD")}
          >
            Add Job
          </button>
          <h1>Welcome, {user.firstName}!</h1>

          {/* Cards */}
          <div className={"ui cards"}>{renderCards}</div>
        </>
      ):(
        <>
          <button
            className={"positive ui button"}
            style={{
              float: "right",
              margin: "calc(2rem - .14285714em) 0 1rem",
            }}
            onClick={(e) => setScreenType("SHOW")}
          >
            Show Jobs
          </button>
          <AddJob
            setJobs={setJobs}
            jobs={jobs}
            user={user}
            setScreenType={setScreenType}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;