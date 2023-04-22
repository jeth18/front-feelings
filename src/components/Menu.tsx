import { useOutsideAlerter } from "@/hooks/useOutsideAlerter";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

interface IDataMenu {
  id: number;
  description: string;
  event?: any;
  icon?: ReactNode
}

interface IMenu {
  header?: string | null;
  list: IDataMenu[];
  img?: string | null;
}

export const Menu = ({ header = "username", list, img }: IMenu) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useOutsideAlerter(wrapperRef)

  return (
    <div className="flex flex-col gap-2 w-min z-50 items-end cursor-pointer" ref={wrapperRef}>
      <main className="relative w-max bg-white border-gray-400 shadow-sm border-solid borde-[1px] rounded-full pl-1 pr-1 cursor-pointer">
        <section
          className="flex gap-2 p-1 items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {img && (
            <Image
              src={img}
              alt="avatar_image"
              width={28}
              height={28}
              className="rounded-full"
            />
          )}
          <span className="text-[14px]">{header}</span>
          {isOpen ? <AiOutlineCaretUp/> : <AiOutlineCaretDown/>}
        </section>
      </main>
    
        <section id="list" className={`${isOpen ? "block" : "hidden"} absolute top-[55px] bg-white rounded-2xl p-4 z-50`}>
          {list.map((el) => {
            return (
              <button key={el.id} className="flex gap-2 items-center cursor-pointer">
                <span onClick={el?.event}>{el.description}</span>
                {el.icon}
              </button>
            );
          })}
        </section>
      
    </div>
  );
};
