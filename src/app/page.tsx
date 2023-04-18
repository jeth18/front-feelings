"use client"
import { MyApp } from "@/components/App"
import { Header } from "@/components/Header"
import { MessageAlert } from "@/components/MessageAlert"
import { signIn, useSession } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  return (
      <main className="flex flex-col justify-center items-center min-h-screen h-screen">
        <Header />
        <MyApp/>
        { !session &&
          <MessageAlert open={session !== undefined}>
            <button onClick={() => signIn("github")}>Iniciar sesión con github</button>
          </MessageAlert>
        }
      </main>
  )
}

