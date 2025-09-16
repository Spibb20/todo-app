export const InputContainer = (props) => {
  const { inputVal, inputChangeHandler } = props;
  return (
    <input
      type="text"
      placeholder="Add a new task ..."
      value={inputVal}
      onChange={inputChangeHandler}
      className=" max-w-[280px] w-[280px] rounded-[6px] border-[1px] border-gray-100 default p-2 text-black"
    />
  );
};
