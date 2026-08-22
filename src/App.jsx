import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, details });
    settask(copytask);

    settitle("");
    setdetails("");
  };

  const del = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };

  return (
    <div
      className="bg-slate-800 min-h-screen w-full flex flex-col justify-center items-center text-white p-10 "
      style={{
        backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
        backgroundSize: "30px 30px",
      }}
    >
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-slate-700 h-155 lg:w-185 md:w-185 w-90 lg:rounded-4xl md:rounded-3xl rounded-2xl mt-30"
      >
        <div className="lg:p-10 md:p-8 p-6 flex flex-col justify-center items-center font-medium">
          <input
            className="bg-white text-black w-full h-15 p-5 lg:rounded-xl md:rounded-xl rounded-lg mb-10 outline-none border-2 border-transparent "
            type="text"
            placeholder="ENTER TITLE"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          <textarea
            className="bg-white text-black w-full h-80 p-5 lg:rounded-xl md:rounded-xl rounded-lg mb-10 resize-none outline-none border-2 border-transparent"
            placeholder="ENTER CONTENT"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          />

          <button className="bg-blue-400 text-black w-1/2 h-15 p-5 lg:rounded-xl md:rounded-xl rounded-lg hover:bg-blue-300 active:scale-95 transition-all duration-200">
            ADD NOTES
          </button>
        </div>
      </form>

      <div className=" min-h-screen w-full p-10 flex flex-col justify-center items-center m-30">
        <div className="bg-slate-700 w-full rounded-4xl p-4 border border-gray-400">
          <h1 className="font-bold text-white text-2xl flex flex-col justify-center items-center mt-8 lg:px-3 md:px-4 px-5 lg:text-3xl md:text-3xl whitespace-nowrap">
            YOUR NOTES
          </h1>

          <div className=" bg-cover w-full rounded-2xl flex justify-center flex-wrap gap-8 mt-5 mb-10 ">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="bg-slate-500 h-55 w-55 rounded-xl bg-cover "
                >
                  <div className="h-full p-4 flex flex-col items-center text-center">
                    <div className="h-full overflow-y-auto hide-scrollbar">
                      <h3 className="p-2 font-bold flex-wrap text-lg break-all flex-1">
                        {elem.title}
                      </h3>
                      <p className="font-medium leading-tight flex-wrap text-sm break-all whitespace-pre-wrap py-4">
                        {elem.details}
                      </p>
                      <button
                        onClick={() => {
                          del(idx);
                        }}
                        className="bg-red-500 text-sm font-medium px-18 py-1 rounded mt-2 w-full hover:bg-red-400 active:scale-95 transition-all duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
