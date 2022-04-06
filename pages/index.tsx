import type { NextPage } from "next";
import Head from "next/head";
import { Formik, Field, Form, setIn } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  //const [pts, setPts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [inc, setInc] = useState(5);
  const [link, setLink] = useState(false);
  const router = useRouter();
  const [place, setPlace] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  





    return (
      <>
        <Head>
          <title>Points</title>
        </Head>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="rounded-lg bg-gray-200 p-8 mt-10 shadow-xl shadow-black/30 text-gray-800 font-medium  ">
            <h1 className="text-2xl font-bold text-center">Increment</h1>
            <div className="mt-2 mb-4 grid grid-cols-4 place-items-center">
              <button
                className={
                  "rounded-full w-8 h-8 grid place-items-center bg-gray-300 font-medium " +
                  (inc == 5 ? "bg-blue-500" : "")
                }
                onClick={() => setInc(5)}
              >
                5
              </button>
              <button
                className={
                  "rounded-full w-8 h-8 grid place-items-center bg-yellow-200 font-medium " +
                  (inc == 10 ? "bg-blue-500" : "")
                }
                onClick={() => setInc(10)}
              >
                10
              </button>
              <button
                className={
                  "rounded-full w-8 h-8 grid place-items-center bg-orange-300 font-medium " +
                  (inc == 25 ? "bg-blue-500" : "")
                }
                onClick={() => setInc(25)}
              >
                25
              </button>
              <button
                className={
                  "rounded-full w-8 h-8 grid place-items-center bg-red-300 font-medium " +
                  (inc == 50 ? "bg-blue-500" : "")
                }
                onClick={() => setInc(50)}
              >
                50
              </button>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-10">
              <Patrol
                name="Beavers"
                index={0}
                inc={inc}
              />
              <Patrol
                name="Cobras"
                index={1}
                inc={inc}
              />
              <Patrol
                name="Falcons"
                
                index={2}
                inc={inc}
              />
              <Patrol
                name="Fleagles"
                index={3}
                inc={inc}
              />
              <Patrol
                name="Lions"
                index={4}
                inc={inc}
              />
              <Patrol
                name="Panthers"
                index={5}
                inc={inc}
              />
              <Patrol
                name="Stags"
                inc={inc}
                index={6}
              />
              <Patrol
                name="Tigers"
                inc={inc}
                index={7}
              />
            </div>
          </div>
          <div
            className={
              "rounded-full  px-4 py-1 mb-10 mt-6 shadow-lg shadow-black/20 text-black font-medium flex items-center cursor-pointer " +
              (link ? "bg-green-600" : "bg-gray-200")
            }
            onClick={() => {
              navigator.clipboard.writeText("s");
              setLink(true);
              setTimeout(() => setLink(false), 1000);
            }}
          >
            Get the link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </>
    );
    
    function Patrol(props: {
      name: string;

      inc: number;
      index: number;
    }) {
      return (
        <>
          <div className=" w-28">
            {props.name}
            <span className="rounded-lg bg-cyan-300 px-2 py-1 ml-2">
              {place != undefined ? place[props.index] : 0}
            </span>
          </div>
          <div className="flex w-full justify-end">
            <button
              className="rounded-full bg-red-600 shadow-red-700/30 shadow-lg mr-4 grid place-items-center w-8 h-8 text-gray-200 font-bold leading-[0]"
              onClick={() => setPlace(place[props.index] + props.inc)}
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
              onClick={() => console.log("")}
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
  

  
};

export default Home;
