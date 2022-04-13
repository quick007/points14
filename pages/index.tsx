import type { NextPage } from "next";
import Head from "next/head";
import { Formik, Field, Form, setIn } from "formik";
import { SetStateAction, useState } from "react";
import { prependOnceListener } from "process";

const Home: NextPage = () => {
  const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [places, setPlaces] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [inc, setInc] = useState(5);

  return (
    <>
      <Head>
        <title>Points</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg bg-gray-200 p-6 mx my-10 mx-1 shadow-xl shadow-black/30 text-gray-800 font-medium  ">
          <h1 className="text-2xl font-bold text-center">Increment</h1>
          <div className="mt-2 mb-4 grid grid-cols-4 place-items-center">
            <button
              className={
                "rounded-full w-8 h-8 grid place-items-center font-medium bg-gray-300 " +
                (inc == 5 ? "ring " : "")
              }
              onClick={() => setInc(5)}
            >
              5
            </button>
            <button
              className={
                "rounded-full w-8 h-8 grid place-items-center font-medium bg-yellow-300 " +
                (inc == 10 ? "ring" : "")
              }
              onClick={() => setInc(10)}
            >
              10
            </button>
            <button
              className={
                "rounded-full w-8 h-8 grid place-items-center font-medium bg-orange-400 " +
                (inc == 25 ? "ring" : " ")
              }
              onClick={() => setInc(25)}
            >
              25
            </button>
            <button
              className={
                "rounded-full w-8 h-8 grid place-items-center  font-medium bg-red-400 " +
                (inc == 50 ? "ring" : "")
              }
              onClick={() => setInc(50)}
            >
              50
            </button>
          </div>
          <div className="flex mb-4 mt-8">
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              onChange={(e) => setInc(parseInt(e.target.value))}
              className="w-full"
              value={inc}
            />
          </div>
          <div className="flex px-8 items-center mb-4">
            <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent to-gray-900 rounded-full opacity-75 mr-2" />
            {inc}
            <div className="flex-grow h-0.5 bg-gradient-to-l from-transparent to-gray-900 rounded-full opacity-75 ml-2" />
          </div>

          <div className="grid grid-cols-2 place-items-center gap-10">
            <Patrol name="Beavers" index={0} inc={inc} />
            <Patrol name="Cobras" index={1} inc={inc} />
            <Patrol name="Falcons" index={2} inc={inc} />
            <Patrol name="Fleagles" index={3} inc={inc} />
            <Patrol name="Lions" index={4} inc={inc} />
            <Patrol name="Panthers" index={5} inc={inc} />
            <Patrol name="Stags" index={6} inc={inc} />
            <Patrol name="Tigers" index={7} inc={inc} />
          </div>
        </div>
      </div>
    </>
  );
  function Patrol(props: { name: string; index: number; inc: number }) {
    return (
      <>
        <div className=" w-32 flex items-center" /* bad practice but whatever */>

          {props.name}
          <span className="rounded-lg bg-cyan-300 px-2 py-1 ml-2">
            {pts[props.index]}
            
          </span>
          <span className="ml-2">{figurePlace(places[props.index])}</span>
        </div>
        <div className="flex w-full justify-end">
          <button
            className="rounded-full bg-red-600 shadow-red-700/30 shadow-lg mr-6 grid place-items-center w-8 h-8 text-gray-200 font-bold leading-[0]"
            onClick={() => {place(props.index, newPts(props.index, -inc)); }}
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
            onClick={() => place(props.index,newPts(props.index, inc))}
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
  function newPts(index: number, newP: number) {
    let arr: number[] = [];
    pts.forEach((v) => {
      arr.push(v);
    });
    arr[index] += newP;
    setPts(arr);
    return arr;
  }

  function place(index: number, newP: number[]) {
    let arr: number[] = [];
    newP.forEach((v) => {
      arr.push(v);
    });

    let arr2: number[] = [];
    places.forEach((v) => {
      arr2.push(v);
    });
    arr.sort((a, b) => {return b - a})
    for (let i = 0; i < newP.length; i++) {
      const place = arr.indexOf(newP[i])
      if (newP[i] != 0)
      arr2[i] = place + 1;
    }
    
    
    

    setPlaces(arr2)
    console.log(arr2)
    
  }

  function figurePlace(place: number) {
    switch (place) {
      case 1:
        return "🥇"
      case 2: 
      return "🥈"
      case 3: 
      return"🥉"
      case 8: 
      return "🫠"
    }
  }
};

export default Home;
