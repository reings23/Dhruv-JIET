import React, { useEffect, useState } from "react";
import "../css/homepage.css";
import Axios from "axios";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";


const Homepage = (props) => {
   const {user} = props;
   const [tasks, setTasks] = useState([]);
   const [screenType, setScreenType] = useState("SHOW");

   useEffect(() => {
     if (Object.keys(user).length>0) {
       console.log(user._id);
       const fetchTasks = async() => {
         await Axios.get(`http://localhost:8000/task/user/${user._id}`)
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
    return <TaskCard task={task} key={index} />;
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
            Add Task
          </button>
          <h1>Welcome, {user.firstName}!</h1>

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
          <AddTask
            setTasks={setTasks}
            tasks={tasks}
            user={user}
            setScreenType={setScreenType}
          />
        </>
      )}
    </div>
  );
};

export default Homepage;