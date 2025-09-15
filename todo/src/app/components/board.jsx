export function Board() {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-[377px] w-[377px] min-h-[290px] bg-white shadow-md shadow-gray-400 rounded-[6px] pt-6 pb-6 pl-4 pr-4 flex flex-col gap-[40px] ">
        <div className="max-w-[345px] w-[345px] min-h-[187px] flex flex-col gap-5">
          <p className="text-center font-semibold text-[20px] text-black">
            To-Do list
          </p>
          <div className="w-full h-[38px] flex gap-1.5">
            <input
              type="text"
              placeholder="Add a new task ..."
              className=" max-w-[280px] w-[280px] rounded-[6px] border-[1px] border-gray-100 default p-2"
            />

            <button className="max-w-[59px] w-[59px] bg-blue-400 rounded-[6px] pt-1 text-[14px] text-white">
              Add
            </button>
          </div>
          <div className="w-full h-[32px] flex gap-1.5">
            <button className=" w-[38px] h-full bg-blue-400 rounded-[6px] pt-1 text-[14px] text-white">
              All
            </button>
            <button className=" w-[60px] h-full bg-gray-100 rounded-[6px] pt-1 text-[14px] text-black">
              Active
            </button>
            <button className=" w-[87px] h-full bg-gray-100 rounded-[6px] pt-1 text-[14px] text-black">
              Completed
            </button>
          </div>
          <p className="text-[14px] text-gray-400 text-center">
            No tasks yet. Add one above!
          </p>
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

/* <div className="max-w-[345px] w-[345px] min-h-[187px] flex flex-col gap-5">
          <p className="text-center font-semibold text-[20px]">To-Do list</p>
          <div className="w-full h-[38px] flex gap-1.5">
            <input
              type="text"
              className="max-w-[280px] w-[280px] rounded-[6px] border-[1px] border-gray-100 default"
            />

            <button className="max-w-[59px] w-[59px] bg-blue-400 rounded-[6px] pt-1 text-[14px] text-white">
              Add
            </button>
          </div>
          <div className="w-full h-[32px] flex gap-1.5">
            <button className=" w-[38px] h-full bg-blue-400 rounded-[6px] pt-1 text-[14px] text-white">
              All
            </button>
            <button className=" w-[60px] h-full bg-gray-100 rounded-[6px] pt-1 text-[14px] text-black">
              Active
            </button>
            <button className=" w-[87px] h-full bg-gray-100 rounded-[6px] pt-1 text-[14px] text-black">
              Completed
            </button>
          </div>
          <p className="text-[14px] text-gray-400 text-center">
            No tasks yet. Add one above!
          </p>
        </div> 
        <footer className="flex max-w-[345px] w-[345px] h-[15px] gap-1 items-center justify-center">

        */
