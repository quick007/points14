import type { NextPage } from "next";
import Head from "next/head";
import { Formik, Field, Form, setIn } from "formik";
import { useState } from "react";

const Home: NextPage = () => {
  const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [inc, setInc] = useState(5);
  

  return (
    <>
      <Head>
        <title>Points</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg bg-gray-200 p-6 mx my-10 shadow-xl shadow-black/30 text-gray-800 font-medium  ">
          <h1 className="text-2xl font-bold text-center">Increment</h1>
          <div className="mt-2 mb-4 grid grid-cols-4 place-items-center">
            <button className={"rounded-full w-8 h-8 grid place-items-center font-medium bg-gray-300 " + (inc == 5 ? "ring " : "")} onClick={() => setInc(5)}>5</button>
            <button className={"rounded-full w-8 h-8 grid place-items-center font-medium bg-yellow-300 " + (inc == 10 ? "ring" : "")} onClick={() => setInc(10)}>10</button>
            <button className={"rounded-full w-8 h-8 grid place-items-center font-medium bg-orange-400 " + (inc == 25 ? "ring" : " ")} onClick={() => setInc(25)}>25</button>
            <button className={"rounded-full w-8 h-8 grid place-items-center  font-medium bg-red-400 " + (inc == 50 ? "ring" : "")} onClick={() => setInc(50)}>50</button>
          </div>
          <div className="flex mb-4 mt-8"><input type="range" min="5" max="100" step="5" onChange={(e) => setInc(parseInt(e.target.value))} className="w-full" value={inc} />
          
          </div>
          <div className="flex px-8 items-center mb-4">
            <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent to-gray-900 rounded-full opacity-75 mr-2" />
            {inc}
            <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent to-gray-900 rounded-full opacity-75 ml-2"/>
          </div>
          
          
          
          <div className="grid grid-cols-2 place-items-center gap-10">
            <Patrol name="Beavers" index={0} inc={inc} />
            <Patrol name="Cobras" index={0} inc={inc} />
            <Patrol name="Falcons" index={0} inc={inc} />
            <Patrol name="Fleagles" index={0} inc={inc} />
            <Patrol name="Lions" index={0} inc={inc} />
            <Patrol name="Panthers" index={0} inc={inc} />
            <Patrol name="Stags" index={0} inc={inc} />
            <Patrol name="Tigers" index={0} inc={inc} />
          </div>
        </div>
      </div>
    </>
  );

  
};

function Patrol(props: { name: string; index: number; inc: number }) {
  
  const [pts, setPts] = useState(0);
  return (
    <>
      <div className=" w-32" /* bad practice but whatever */>
        {props.name}
        <span className="rounded-lg bg-cyan-300 px-2 py-1 ml-2">{pts}</span>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="rounded-full bg-red-600 shadow-red-700/30 shadow-lg mr-6 grid place-items-center w-8 h-8 text-gray-200 font-bold leading-[0]"
          onClick={() => setPts(pts - props.inc)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <button
          onClick={() => setPts(pts + props.inc)}
          className="rounded-full bg-blue-700 shadow-blue-700/30 shadow-lg grid place-items-center w-8 h-8 text-gray-200 font-bold leading-[0]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Home;
