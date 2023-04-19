"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Logout from "./../../public/logout-svgrepo-com.svg"

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className="absolute top-0 left-0 w-full h-[50px] flex justify-between items-center p-3 backdrop-blur-3xl bg-white/50 shadow-md">
      <section>
        FIND FEELINGS
      </section>
      <section className="flex gap-2">
        {session &&
          (
            <>
              <div className="flex justify-center items-center gap-2">
                <span className="font-black">{session.user?.name}</span>
                <Image 
                  src={session.user?.image ?? ''}
                  alt="Imagen user"
                  width={40}
                  height={40}
                  className="rounded-full shadow-md border-gray-300 border-[1px]"
                />
              </div>
            </>
          ) 
        }
      </section>
    </header>
  )
};
