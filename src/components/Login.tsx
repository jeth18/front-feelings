import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import GitHub from '../../public/github-mark-white.svg'
import Google from '../../public/google-mark.svg'

export const Login = () => {
  const { data: session } = useSession()
  const show = !session ? 'display-modal' : 'display-none'

  if(session) {
    const expiresAt = new Date(session.expires);
    const hasExpired = expiresAt < new Date();

    if (hasExpired) {
      signOut()
    }  
  }

  return (
    <div className={`modal ${show} z-50`}>
      <article className='modal-main'>
        <section className="flex flex-col justify-center items-center gap-4 pt-4">
          <p>Bienvenido a</p>
          <p id="title-project" className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">HOW FEELINGS</p>
          <p className="text-center max-w-[400px] text-sm">Un sitio donde puedes escribir lo que sientes, saber como te sientes y recibir consejos.</p>
        </section>
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
      </article>
    </div>
  )
  
}
