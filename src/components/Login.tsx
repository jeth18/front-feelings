import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import GitHub from '../../public/github-mark-white.svg'
import Google from '../../public/google-mark.svg'

export const Login = () => {
  const { data: session } = useSession()
  const show = !session ? 'display-modal' : 'display-none'
  return (
    <div className={`modal ${show}`}>
      <section className='modal-main'>
        <section className='flex flex-col gap-2 p-4'>
          <button className="bg-gray-800 rounded-md p-2 pt-3 pb-3 shadow-md text-white flex gap-2 min-w-[300px] justify-center items-center" onClick={() => signIn("github")}>
            <Image src={GitHub} alt="github" width={32} height={32} />
            Continuar con Github
          </button>
          <button className="bg-gray-200 rounded-md p-2 pt-3 pb-3 shadow-md text-black flex gap-2 min-w-[300px] justify-center items-center" onClick={() => signIn("google")}>
            <Image src={Google} alt="google" width={32} height={32} />
            Continuar con Google
          </button>
        </section>
      </section>
    </div>
  )
  
}
