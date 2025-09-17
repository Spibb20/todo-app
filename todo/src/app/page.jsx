"use client";

import { Board } from "./components/board";
import { InputContainer } from "./components/InputContainer";
import { Tasks } from "./components/Tasks";
import { Button } from "./components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTask] = useState([]);
  const [filtering, setFiltering] = useState("All");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
    console.log(e.target.value);
  };

  const clickHandler = () => {
    setTask([
      ...tasks,
      {
        id: uuidv4(),
        nametxt: inputVal,
        completed: false,
      },
    ]);
    setInputVal("");
    console.log(tasks);
  };

  const deleteHandler = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const deleteHandlerCompleted = () => {
    setTask(tasks.filter((task) => task.completed !== true));
  };

  const filtered = tasks.filter((task) => {
    if (filtering === "Active") return !task.completed;
    if (filtering === "Completed") return task.completed;
    return true;
  });

  const stateHandler = (id) => {
    setTask(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const totalCounter = () => {
    console.log(tasks.length);
    return tasks.length;
  };

  const completedCounter = () => {
    let completedTasks = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].completed === true) {
        completedTasks++;
      }
    }
    return completedTasks;
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-[377px] w-[377px] min-h-[290px] bg-white shadow-md shadow-gray-400 rounded-[6px] pt-6 pb-6 pl-4 pr-4 flex flex-col gap-[40px] ">
        <div className="max-w-[345px] w-[345px] min-h-[187px] flex flex-col gap-5">
          <p className="text-center font-semibold text-[20px] text-black">
            To-Do list
          </p>
          <div className="w-full h-[38px] flex justify-between">
            <InputContainer
              inputVal={inputVal}
              inputChangeHandler={inputChangeHandler}
            />
            <Button clickHandler={clickHandler} btnColor="blue">
              Add
            </Button>
          </div>
          <div className="w-full h-[32px] flex gap-1.5">
            <Button
              clickHandler={() => setFiltering("All")}
              btnColor={filtering === "All" ? "blue" : "gray"}
            >
              All
            </Button>
            <Button
              clickHandler={() => setFiltering("Active")}
              btnColor={filtering === "Active" ? "blue" : "gray"}
            >
              Active
            </Button>
            <Button
              clickHandler={() => setFiltering("Completed")}
              btnColor={filtering === "Completed" ? "blue" : "gray"}
            >
              Completed
            </Button>
          </div>

          {filtered.length > 0 ? (
            <>
              {filtered.map((el) => (
                <Tasks
                  key={el.id}
                  task={el}
                  deleteHandler={() => {
                    deleteHandler(el.id);
                  }}
                  stateHandler={() => {
                    stateHandler(el.id);
                  }}
                />
              ))}
              <div className="w-full h-[0.5px] bg-gray-400 rounded-2xl"></div>
              <div className="flex text-black justify-between pr-4 items-center">
                <p>
                  {completedCounter()} of {totalCounter()} tasks completed
                </p>
                <Button clickHandler={deleteHandlerCompleted} btnColor="p">
                  Clear Completed
                </Button>
              </div>
            </>
          ) : (
            <p className="text-[14px] text-gray-400 text-center">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
        <footer className="flex max-w-[345px] w-[345px] h-[15px] gap-1 items-center justify-center">
          <p className="text-[14px] text-gray-400 text-center">Powered by</p>
          <p className="text-[14px] text-blue-400 text-center">
            Pinecone academy
          </p>
        </footer>
      </div>
    </div>
  );
}
