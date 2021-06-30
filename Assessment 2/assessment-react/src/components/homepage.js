import React, { useEffect, useState } from "react";
import "../css/homepage.css";
import Axios from "axios";
import Card from "./card";



const Homepage = (props) => {
   const {user} = props;
   const [tasks, setTasks] = useState([]);
   const [screenType, setScreenType] = useState("SHOW");

   useEffect(() => {
     if (Object.keys(user).length>0) {
       console.log(user._id);
       const fetchTasks = async() => {
         await Axios.get(`http://localhost:5000/data`)
         .then(({data: foundTasks}) => {
          console.info("All tasks were found.");
          console.info(foundTasks);
          setTasks(foundTasks);
         })
         .catch((error) =>{
           console.log("Error Occurred", error);
         });
       };
      fetchTasks();
     }
    },[user]);

    const renderCards = tasks.map((task, index) => {
    return <Card task={task} key={index} />;
    });

    
  return (
    <div className={"section"}>
      {screenType === "SHOW" ? (
        <>

          {/* Cards */}
          <div className={"ui cards"}>{renderCards}</div>
        </>
      ) : (
        <>
          <button
            className={"positive ui button"}
            style={{
              float: "right",
              margin: "calc(2rem - .14285714em) 0 1rem",
            }}
            onClick={(e) => setScreenType("SHOW")}
          >
            Show Tasks
          </button>
        </>
      )}
    </div>
  );
};

export default Homepage;