import Image from "next/image";

export default function CodeStyles() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4">
      <h1 className="text-center text-5xl font-bold">
        Because your code deserves a <br />
        <span className="bg-gradient-to-tr from-green-500 to-blue-400 bg-clip-text text-transparent">
          stunning presentation
        </span>
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 justify-around">
        <div className=" sm:mx-5 rounded-lg bg-blue-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-green-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-purple-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-red-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-around">
        <div className=" sm:mx-5 rounded-lg bg-orange-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-slate-700 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-teal-500 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
        <div className=" sm:mx-5 rounded-lg bg-emerald-600 p-4">
          <img src="/img/code5.png" alt="" />
        </div>
      </div>
      <button className="mx-auto mt-8 mb-4 rounded-md bg-gradient-to-tr from-purple-400 to-red-400 py-2 px-4 font-bold text-white">
        {"Let's get started!"}
      </button>
    </div>
  );
}
