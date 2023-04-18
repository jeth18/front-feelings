
type Props = {
  open: boolean,
  children: React.ReactNode
}

export const MessageAlert = ({open, children}: Props) => {
  const show = open ? 'display-modal' : 'display-none'
  return (
    <div className={`modal ${show}`}>
      <section className='modal-main'>
        <section className='modal-content'>
          {children}
        </section>
      </section>
    </div>
  )
  
}
