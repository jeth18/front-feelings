import Image from "next/image";
import { useState } from "react";

interface IDataMenu {
  id: number;
  description: string;
  event?: any;
}

interface IMenu {
  header?: string | null;
  list: IDataMenu[];
  img?: string | null;
}

export const Menu = ({ header = "username", list, img }: IMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <main className="bg-slate-200 border-gray-400 border-solid borde-[1px] rounded-full pl-2 pr-2 relative">
        <section
          className="flex gap-1 p-1 items-center"
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
          {/* ICON */}
        </section>
      </main>
      {isOpen && (
        <section id="list" className={`${isOpen ? "block" : "hidden"} absolute top-[55px] bg-white rounded-2xl p-4`}>
          {list.map((el) => {
            return (
              <div key={el.id}>
                <span onClick={el.event && el.event}>{el.description}</span>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
