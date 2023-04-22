"use client"
import { signOut, useSession } from "next-auth/react"
import { Menu } from "./Menu";
import { AiOutlineLogout } from 'react-icons/ai'

const DATA = [
  {
    id: 1,
    description: "Cerrar sesión",
    event: signOut,
    icon: <AiOutlineLogout/>
  }
]

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className="absolute z-50 top-0 left-0 w-full h-[50px] flex justify-between items-center p-3 backdrop-blur-3xl bg-white/40">
      <section id="title-project" className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        HOW FEELINGS
      </section>
      <section className="flex gap-2 items-center">
        { session && 
          <Menu 
            header={session.user?.name}
            list={DATA}
            img={session.user?.image}
          />
        }
      </section>
    </header>
  )
};
