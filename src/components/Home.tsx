import { useEffect, useRef } from 'react';
import { FaReact } from 'react-icons/fa';
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaSquareJs,
} from 'react-icons/fa6';
import Typed from 'typed.js';


function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Goku', 'Thiago'],
      typeSpeed: 50,
      backSpeed: 50
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="container flex justify-evenly items-center min-h-screen" id='home'>
      <div className="flex flex-col w-1/3 gap-6">
        <h2 className="font-extrabold text-5xl text-gray-300">
          Oi, eu sou o <span className="text-gradient-purple " id='element' ref={el}></span>
        </h2>
        <p className="text-lg font-semibold text-gray-400">
          Sou um dev fullstack que adora transformar boas ideias em projetos que
          realmente fazem a diferença. Com React no front, backend afiado e
          muita paixão por tecnologia, estou sempre criando algo novo. Aqui você
          vai ver um pouco do que eu já aprontei — e o que ainda está por vir.
        </p>
      </div>
      <div className="flex flex-col w-1/3 items-center gap-6">
        <img
          src="https://github.com/tjfaccipieri.png"
          alt=""
          className="rounded-full w-72 border-purple-600 border-4 border-dashed p-2 mx-auto"
        />
        <div className="flex gap-4">
          <FaNodeJs className="icons-hero text-[#50fa7b]" />
          <FaReact className="icons-hero text-[#8be9fd]" />
          <FaJava className="icons-hero text-[#bd93f9]" />
          <FaSquareJs className="icons-hero text-[#f1fa8c]" />
          <FaHtml5 className="icons-hero text-[#ff5555]" />
          <FaCss3Alt className="icons-hero text-[#8be9fd]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
