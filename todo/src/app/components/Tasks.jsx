import { Button } from "./Button";

export const Tasks = (props) => {
  const { task, deleteHandler, stateHandler } = props;
  return (
    <div className="flex gap-4 w-full p-4 h-auto bg-gray-200 rounded-md justify-between">
      <div className="flex gap-4">
        <input
          type="checkbox"
          id="AllB"
          className="w-5 checked:w-4"
          checked={task.completed}
          onChange={stateHandler}
        />
        <span
          htmlFor="AllB"
          className={`text-black text-center flex items-center ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.nametxt}
        </span>
      </div>
      <div>
        <Button clickHandler={deleteHandler} btnColor="red">
          Delete
        </Button>
      </div>
    </div>
  );
};
