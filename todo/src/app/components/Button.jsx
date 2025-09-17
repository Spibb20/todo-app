export const Button = (props) => {
  const { clickHandler, children, btnColor } = props;
  const color = {
    blue: "bg-blue-400 text-white hover:bg-blue-300",
    red: "bg-red-400 text-white hover:bg-red-300",
    gray: "bg-gray-200 text-gray-500 hover:bg-blue-300",
    p: "text-red-400 hover:text-red-300",
  };
  return (
    <button
      onClick={clickHandler}
      className={`max-w-[150px] w-[fit] rounded-[6px] p-2 text-[14px] ${color[btnColor]}`}
    >
      {children}
    </button>
  );
};
