"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import { MessageAlert } from "./MessageAlert";

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-3 backdrop-blur-3xl bg-white/50 shadow-md">
      <section>
        FIND FEELINGS
      </section>
      <section className="flex gap-2">
        {session &&
          (
            <>
              <button className="rounded-md bg-red-600 text-white p-1" onClick={() => signOut()}>Cerrar sesión</button>
              <div className="flex justify-center items-center gap-2">
                <span className="font-black">{session.user?.name}</span>
                <Image 
                  src={session.user?.image ?? ''}
                  alt="Imagen user"
                  width={32}
                  height={24}
                  className="rounded-full"
                />
              </div>
            </>
          ) 
        }
      </section>
    </header>
  )
};
