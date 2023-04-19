"use client"
import { MyApp } from "@/components/App"
import { Header } from "@/components/Header"
import { Login } from "@/components/Login"


export default function Home() {
  return (
      <main className="flex flex-col justify-center items-center min-h-screen h-screen">
        <Header />
        <MyApp/>
        <Login />
      </main>
  )
}

