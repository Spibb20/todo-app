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
    setTask(tasks.filter((_, i) => i !== id));
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
            <Button>All</Button>
            <Button btnColor="gray">Active</Button>
            <Button btnColor="gray">Completed</Button>
          </div>
          {tasks.length > 0 ? (
            tasks.map((el, id) => {
              return (
                <Tasks
                  key={id}
                  task={el.nametxt}
                  deleteHandler={() => {
                    deleteHandler(id);
                  }}
                />
              );
            })
          ) : (
            <p className="text-[14px] text-gray-400 text-center">
              No tasks yet. Add one above!
            </p>
          )}
          ;
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
