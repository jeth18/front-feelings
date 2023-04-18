"use client"
import { useState } from "react";

export const MyApp = () => {
  
  const [data, setData] = useState({
    feelings: ["contento", "alegre"],
    steps: ["disfrutar del día", "tener una actitud positiva"]
  })
  const [text, setText] = useState("")

  const getData = () => {
    console.log(text)
  }

  
  return (
    <>
      <section className="flex flex-row gap-2 flex-wrap">
          <article className="backdrop-blur-3xl bg-white/70 rounded-xl min-w-[400px] h-auto shadow-sm">
            <textarea onChange={(e) => setText(e.target.value)} className="p-3 outline-none resize-none bg-transparent overflow-auto h-full w-full" placeholder="Escribe lo que sientes..."></textarea>
          </article>
          <article className="flex flex-col gap-2 flex-wrap">
            <div id="emojis" className="flex items-center gap-2 p-4 min-w-[400px] backdrop-blur-3xl rounded-xl bg-white/70 rounded-x h-[100px] shadow-sm">
              { 
                data.feelings.map((feel, index)=> {
                  return (
                    <span className="p-2 bg-blue-200 rounded-xl border-blue-400 border-[1px] text-black" key={index}>{feel}</span>
                  )
                }) 
              } 
            </div>
            <div id="emojis" className="flex flex-col gap-2 p-4 min-w-[400px] backdrop-blur-3xl rounded-xl bg-white/70 rounded-x h-[300px] shadow-sm">
              {
                data.steps.map((step, index) => {
                  return (
                    <span className="bg-white pl-2 pr-2 pt-3 pb-3 rounded-xl shadow-md" key={index}>{step}</span>
                  )
                })
              } 
            </div>
          </article>
        </section>
        
        <button onClick={getData} className="m-4 pl-4 pr-4 pt-2 pb-2 bg-white border-[1px] border-l-indigo-200 rounded-xl">Obtener resultados</button>

        <div 
          id="square" 
          className="absolute blur-[72px] w-[300px] h-[300px] bg-gradient-to-r from-orange-600 to-orange-300 -z-10 top-[100px] left-[250px] animate-[bounce_6s_ease-in-out_infinite]">
        </div>
        <div
          id="square"
          className="absolute blur-[72px] w-[200px] h-[200px] bg-gradient-to-r from-blue-500 to-cyan-500 -z-10 top-[300px] left-[600px] animate-[bounce_4s_ease-in-out_infinite]">
        </div>
        <div
          id="square"
          className="absolute blur-[72px] w-[200px] h-[200px] bg-gradient-to-r from-green-600 to-lime-700 -z-10 top-[80px] right-[350px] animate-[bounce_10s_ease-in-out_infinite]">
        </div>
    </>
  )
};
