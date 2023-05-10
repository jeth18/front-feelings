"use client"

import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import axios from 'axios'

const getFeelings = async (text: string) => {
  try {
    const response = await axios.post('http://localhost:3001/getFeeling', {
      text: text 
    })
    return response
  } catch (error: any) {
    return error.response.data
  }
}


export const MyApp = () => {
  
  const [data, setData] = useState<{ feelings: string[], tips: string[]} | null>(null)
  const [text, setText] = useState("")

  const getData = async () => {
    if (!text.length) return toast.error('No ha escrito nada, por favor escriba lo que siente')
    if (text.length < 10) return toast.error('Ha escrito una palabra muy corta')

    const response:any = await getFeelings(text)
    
    if(response.error) return toast.error(response.error)
    
    setData(response)
  }
  
  return (
    <>
      <Toaster position="bottom-center"/>
      <section className="flex flex-row gap-2 h-[400px] flex-wrap">
        <div className={`relative backdrop-blur-3xl bg-white/40 rounded-xl min-w-[400px] h-auto shadow-md z-10 ${data && 'animate-show_data_left'}`}>
          <textarea 
            autoComplete="off" 
            onChange={(e) => setText(e.target.value)} 
            className="p-3 outline-none resize-none bg-transparent overflow-auto h-full w-full" 
            placeholder="Escribe lo que sientes..."
            maxLength={150}
            value={text}
            >
          </textarea>
          <span className="absolute bottom-0 right-0 p-2 text-xs text-gray-400">{text.length} / 150</span>
        </div>
        <div className={`relative flex gap-2 flex-wrap ${data ? 'display' : 'hidden'} animate-show_data z-0`}>
          <section className="flex flex-col gap-2 flex-wrap">
            <div className="flex items-center gap-2 p-4 min-w-[400px] backdrop-blur-3xl rounded-xl bg-white/60 rounded-x h-[80px] shadow-md">
              {
                data && data.feelings.map((feel, index) => {
                  return (
                    <span className="p-2 bg-blue-200 rounded-xl border-blue-400 border-[1px] text-black" key={index}>{feel}</span>
                  )
                })
              }
            </div>
            <div className="flex flex-col gap-2 p-4 max-w-[400px] backdrop-blur-3xl rounded-xl bg-white/60 rounded-x h-[310px] shadow-md">
              {
                data && data.tips.map((step, index) => {
                  return (
                    <span className="bg-white pl-2 pr-2 pt-3 pb-3 rounded-xl shadow-md" key={index}>{step}</span>
                  )
                })
              }
            </div>
          </section>
          <section id="NOTA" className="bg-white rounded-md w-52 h-min right-4 text-sm p-3">
            Tenga en cuenta que las emociones y los consejos proporcionados son sugerencias generales y
            no deben considerarse un sustituto del consejo o tratamiento profesional de salud mental.
          </section>
        </div>
      </section>
      
      <div className="flex m-2 gap-2 mt-2">
        <button onClick={getData} className="p-2 bg-white border-[1px] border-l-indigo-200 rounded-xl shadow-sm">Obtener resultados</button>
        <button onClick={() => {
          setData(null)
          setText("")
        }} className="p-2 bg-white border-[1px] border-l-indigo-200 rounded-xl shadow-sm">Limpiar</button>
      </div>

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
