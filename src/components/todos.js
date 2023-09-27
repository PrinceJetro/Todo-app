import React, { useState, useEffect } from 'react';
import './style.css';
import light from "./images/icon-sun.png"
import dark from "./images/icon-moon.png"


function App() {
  const [tasks, setTasks] = useState([]); // State variable to store tasks
  const [showingTasks, setShowingTasks] = useState('all'); // State variable to determine which tasks to display

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    loadTasks();
    toggleTheme();
    setInterval(repeatedFunction, 500); // 1000 milliseconds = 1 second
  }, []); // Empty dependency array means this effect runs only once, simulating componentDidMount

  // Function to load tasks from local storage
  function loadTasks() {
    // Check if localStorage has any tasks
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Reverse the tasks array to display newly added tasks at the top
    const reversedTasks = [...storedTasks].reverse();

    // Set the tasks state with the reversed tasks
    setTasks(reversedTasks);
  }

  // Function to handle task completion
  function handleTaskComplete(taskIndex) {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed; // Toggle completion status

    // Update the tasks state and store the updated tasks in local storage
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Function to add a new task
  function addTask(newTask) {
    // Check if the new task already exists
    if (tasks.some(task => task.task === newTask)) {
      alert("Task already exists!");
      return;
    }

    // Create a new task object
    const newTaskObject = { task: newTask, completed: false };

    // Update the tasks state and store the updated tasks in local storage
    const updatedTasks = [newTaskObject, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    let icon = document.getElementById("theme")

    if (icon.src == light){
       // Select all elements with the class "task"
       const listElements = document.querySelectorAll(".task");
       // Loop through the selected elements and change their background color
       listElements.forEach((element) => {
         element.style.color = "white";
         element.style.backgroundColor = "hsl(235, 21%, 11%)";
       });

       // Select all elements with the class "list"
       const list = document.querySelectorAll(".list");
       // Loop through the selected elements and change their background color
       list.forEach((element) => {
         element.style.color = "white";
         element.style.backgroundColor = "hsl(235, 21%, 11%)";
       });
    }
    else{
      // Select all elements with the class "task"
      const listElements = document.querySelectorAll(".task");
      // Loop through the selected elements and change their background color
      listElements.forEach((element) => {
        element.style.color = "black";
        element.style.backgroundColor = "white";
      });

      // Select all elements with the class "list"
      const list = document.querySelectorAll(".list");
      // Loop through the selected elements and change their background color
      list.forEach((element) => {
        element.style.color = "black";
        element.style.backgroundColor = "white";
      });
    }
  }

  // Function to remove a task
  function removeTask(taskIndex) {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks.splice(taskIndex, 1); // Remove the task at the specified index

    // Update the tasks state and store the updated tasks in local storage
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Function to display tasks based on the selected filter
  function displayTasks(filter) {
    setShowingTasks(filter);
  }

  // Function to clear all completed tasks
  function clearCompletedTasks() {
    const updatedTasks = tasks.filter(task => !task.completed); // Filter out completed tasks

    // Update the tasks state and store the updated tasks in local storage
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Calculate the number of active tasks
  const activeTaskCount = tasks.filter(task => !task.completed).length;

  // Filter tasks based on the selected filter
  const filteredTasks = showingTasks === 'active'
    ? tasks.filter(task => !task.completed)
    : showingTasks === 'completed'
    ? tasks.filter(task => task.completed)
    : tasks;

    function toggleTheme(){
      let icon = document.getElementById("theme")
      if (icon.src == dark){
        document.querySelector(".container").style.backgroundColor="hsl(235, 21%, 11%)"
        document.querySelector(".app form input").style.backgroundColor="hsl(235, 21%, 11%)"
        document.querySelector("ul").style.backgroundColor="hsl(235, 21%, 11%)"
         // Select all elements with the class "task"
         const listElements = document.querySelectorAll(".task");
         // Loop through the selected elements and change their background color
         listElements.forEach((element) => {
           element.style.color = "white";
           element.style.backgroundColor = "hsl(235, 21%, 11%)";
         });
 
         // Select all elements with the class "list"
         const list = document.querySelectorAll(".list");
         // Loop through the selected elements and change their background color
         list.forEach((element) => {
           element.style.color = "white";
           element.style.backgroundColor = "hsl(235, 21%, 11%)";
         });
         document.getElementById("number").style.color="white"
         document.querySelector(".app form input").style.color="white"
         document.querySelector(".attribution").style.color="white"
        icon.src = light
      }
      else{
        document.querySelector(".container").style.backgroundColor="white"
        document.querySelector(".app form input").style.backgroundColor="white"
        document.querySelector("ul").style.backgroundColor="white"
        // Select all elements with the class "task"
        const listElements = document.querySelectorAll(".task");
        // Loop through the selected elements and change their background color
        listElements.forEach((element) => {
          element.style.color = "black";
          element.style.backgroundColor = "white";
        });

        // Select all elements with the class "list"
        const list = document.querySelectorAll(".list");
        // Loop through the selected elements and change their background color
        list.forEach((element) => {
          element.style.color = "black";
          element.style.backgroundColor = "white";
        });
        document.getElementById("number").style.color="black"
        document.querySelector(".app form input").style.color="black"
        document.querySelector(".attribution").style.color="black"
        icon.src = dark
      }
    }


        // Define a function to be called repeatedly
    function repeatedFunction() {
      let icon = document.getElementById("theme")
      if (icon.src != dark){
        document.querySelector(".container").style.backgroundColor="hsl(235, 21%, 11%)"
        document.querySelector(".app form input").style.backgroundColor="hsl(235, 21%, 11%)"
        document.querySelector("ul").style.backgroundColor="hsl(235, 21%, 11%)"
         // Select all elements with the class "task"
         const listElements = document.querySelectorAll(".task");
         // Loop through the selected elements and change their background color
         listElements.forEach((element) => {
           element.style.color = "white";
           element.style.backgroundColor = "hsl(235, 21%, 11%)";
         });
 
         // Select all elements with the class "list"
         const list = document.querySelectorAll(".list");
         // Loop through the selected elements and change their background color
         list.forEach((element) => {
           element.style.color = "white";
           element.style.backgroundColor = "hsl(235, 21%, 11%)";
         });
         document.getElementById("number").style.color="white"
         document.querySelector(".app form input").style.color="white"
         document.querySelector(".attribution").style.color="white"
      }
      else{
        document.querySelector(".container").style.backgroundColor="white"
        document.querySelector(".app form input").style.backgroundColor="white"
        document.querySelector("ul").style.backgroundColor="white"
        // Select all elements with the class "task"
        const listElements = document.querySelectorAll(".task");
        // Loop through the selected elements and change their background color
        listElements.forEach((element) => {
          element.style.color = "black";
          element.style.backgroundColor = "white";
        });

        // Select all elements with the class "list"
        const list = document.querySelectorAll(".list");
        // Loop through the selected elements and change their background color
        list.forEach((element) => {
          element.style.color = "black";
          element.style.backgroundColor = "white";
        });
        document.getElementById("number").style.color="black"
        document.querySelector(".app form input").style.color="black"
        document.querySelector(".attribution").style.color="black"
      }

    }


  return (
    <div className="container">
      <div className="app">
      <img src={light} id="theme" onClick={toggleTheme}/>

        <h1>TO DO</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            const newTask = e.target.elements.task.value;
            if (newTask.trim() !== "") {
              addTask(newTask);
              e.target.elements.task.value = "";
            }
          }}
        >
          <input type="text" name="task" placeholder="Add new task..." />
        </form>
       
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} className='list' id="list">
              <input
                type="checkbox"
                className="check"
                checked={task.completed}
                onChange={() => handleTaskComplete(index)}
              />
              <span className={`task ${task.completed ? "completed" : ""}`}>
                {task.task}
              </span>
              <span onClick={() => removeTask(index)} className='remove'>X</span>
            </li>
          ))}
        </ul>
        {showingTasks === 'completed' && (
          <button  className='btn btn-danger mb-3' onClick={clearCompletedTasks}>Clear Completed</button>
        )}
        <p id="number" className='number'>{activeTaskCount} active tasks</p>
      </div>
      <div className="filter-buttons">
          <button className='btn btn-primary mr-3' onClick={() => displayTasks('all')}>All</button>
          <button className='btn btn-primary mr-3' onClick={() => displayTasks('active')}>Active</button>
          <button className='btn btn-primary mr-3' onClick={() => displayTasks('completed')}>Completed</button>
        </div>
        
      <div class="attribution mt-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="http://adegbuyi-jephthah.vercel.app/" target="_blank">PrinceJetro</a>.
      </div>

    </div>
  );
}

export default App;
