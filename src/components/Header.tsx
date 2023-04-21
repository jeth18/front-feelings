"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { Menu } from "./Menu";

const DATA = [
  {
    id: 1,
    description: "Cerrar sesión",
    event: signOut
  }
]

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className="absolute top-0 left-0 w-full h-[50px] flex justify-between items-center p-3 backdrop-blur-3xl bg-white/50 shadow-md">
      <section>
        FIND FEELINGS
      </section>
      <section className="flex gap-2">
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
