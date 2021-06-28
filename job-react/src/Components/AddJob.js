import React, { useState } from "react";
import Axios from "axios";
import "../css/add.css";

const AddJob = (props) => {
  const [job, setJob] = useState({});
  const { jobs, setJobs, user, setScreenType } = props;

  const onAddJobClick = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:4000/job", {
      ...job,
      userId: user._id,
    })
      .then(({ data: addedJob }) => {
        window.alert("Job successfully added.");
        setJobs([...jobs, addedJob]);
        setTimeout(() => {
          setScreenType("SHOW");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error occurred", error);
      });
  };

  return (

    <>
      <form
        onKeyPress={(e) => {
          e.key === 13 && onAddJobClick(e);
        }}
      >
        <div className={"field"}>
          <label>Job Title:</label>
          <br />
          <input
            type={"text"}
            placeholder={"job-title"}
            onChange={(e) => {
              setJob({ ...job, jobTitle: e.target.value });
            }}
          />
        </div>

        <div className={"field"}>
          <label>Company:</label>
          <br />
          <input
            type={"text"}
            placeholder={"Enter Company"}
            onChange={(e) => {
              setJob({ ...job, company: e.target.value });
            }}
          />
        </div>

        <div className={"field"}>
          <label>Location:</label>
          <br />
          <input
            type={"text"}
            placeholder={"Enter Location"}
            onChange={(e) => {
              setJob({ ...job, location: e.target.value });
            }}
          />
        </div>

        <div className={"field"}>
          <label>Stipend:</label>
          <br />
          <input
            type={"text"}
            placeholder={"Enter per month Salary"}
            onChange={(e) => {
              setJob({ ...job, stipend: e.target.value });
            }}
          />

        </div>
        <br />
        <button class="ui primary button" onClick={onAddJobClick}>
          Add Job
        </button>
      </form>

    </>

  );
};

export default AddJob;