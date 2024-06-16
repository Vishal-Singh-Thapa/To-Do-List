"use client"
import React, { useState } from "react";

const page = () =>{

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  // Store krega tasks ko
  const [mainTask, setMainTask] = useState([]);


  // This function prevents the webpage from reloading when "Add Task button is clicked"
  // It also resets the title and description input area
  const submitHandler = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    // Prints array of all tasks in console
    console.log(mainTask);
  }


  // This function handles reoval of tasks
  const deleteHandler = (i)=>{
    let copytask = [...mainTask];
    // Removes ith element from maintask array
    copytask.splice(i,1);
    // change maintask to copytask
    setMainTask(copytask);
  }

  let renderTask = <h2 className="text-3xl font-semibold">No Tasks Available!!</h2>

  if(mainTask.length > 0){
    // this function is used to display elements in webpage
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i}>
          <div className="flex justify-between mb-5">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <button 
            // Function k under daalna hoga deleteHandler ko taki wo automatically call na ho jaye
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-red-400 text-white rounded font-bold px-4 py-2">Remove</button>
          </div>

        </li>
      );
    });
  }

  return(
    <>

      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">My ToDo List</h1>
      
      <form onSubmit={submitHandler} className="flex justify-center">

      {/* 2- way binding krni hogi, react and user dono ko btaya jayega kya changes hori h*/}
      {/* In 2-way binding changes actually m hori h title variable m, then they are displayed in input tag */}
      <input type="text" className="text-2xl border-zinc-700 
      border-4 m-8 px-4 py-2" placeholder="Enter the task here"
      value = {title}
      onChange={(e)=>{
        settitle(e.target.value);
      }}></input>

      <input type="text" className="text-2xl border-zinc-700 
      border-4 m-8 px-4 py-2" placeholder="Enter the description here"
      value = {desc}
      onChange={(e)=>{
        setdesc(e.target.value);
      }}></input>

      <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-9">Add Task</button>

      </form>
      <hr></hr>

      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page