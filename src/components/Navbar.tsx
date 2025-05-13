import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const sections = [
    'home',
    'sobre',
    'projetos',
    'skills',
    'experiências',
    'contato',
  ];

  const location = useLocation();

  const [closed, isClosed] = useState<boolean>(true)

  return (
    <div className="w-full fixed top-0 z-10 bg-slate-950 fundo2 ">
      <div className="container flex justify-between py-6 text-xl font-semibold mx-auto">
        <h3 className="text-gradient-purple font-black text-2xl">
          /TjFaccipieri
        </h3>
        <ul className="gap-4 hidden md:flex">
          {sections.map((item, index) => (
            <a
              href={`#${item}`}
              className={
                location.hash !== `#${item}`
                  ? 'font-semibold capitalize hover:underline'
                  : 'font-semibold capitalize text-gradient-purple'
              }
              key={index}
            >
              {item}
            </a>
          ))}
        </ul>
        <MdOutlineMenu className='md:hidden text-blue-400 text-4xl' onClick={() => isClosed(!closed)} />
        <ul className={closed ? 'hidden' : 'fundo2 transition-all flex flex-col md:hidden z-50 absolute left-0 px-6 w-full bg-slate-950'}>
          {sections.map((item, index) => (
            <a
              href={`#${item}`}
              className={
                location.hash !== `#${item}`
                  ? 'font-semibold capitalize hover:underline'
                  : 'font-semibold capitalize text-gradient-purple'
              }
              key={index}
              onClick={() => isClosed(!closed)}
            >
              {item}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
