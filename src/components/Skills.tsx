import { FaNodeJs, FaServer } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import { PiMonitorPlayFill, PiNetworkFill } from 'react-icons/pi';
import {
  SiAwslambda,
  SiHtml5,
  SiPython,
  SiReact,
  SiSpring,
} from 'react-icons/si';
import patoback from '../assets/ChatGPT Image 14 de jul. de 2025, 16_57_18.png'
import patofront from '../assets/patofront.png'
import patoinfra from '../assets/patoinfra.png'

function Skills() {
  return (
    <div
      className="min-h-screen pt-20 flex flex-col justify-center"
      id="skills"
    >
      <div className="flex flex-col gap-10">
        <div className="w-4/9 ml-10">
          <p className="uppercase text-3xl font-bold p-2 rounded-t-xl bg-green-300 text-green-950 flex justify-center items-center gap-4">
            <FaServer />
            Backend
          </p>
          <div className=" border-2 border-green-300 bg-green-800/40 px-4 py-2 flex gap-2 items-center justify-around">
            <ul className="flex flex-col gap-2 text-2xl items-center font-semibold text-green-500">
              <li className=" flex items-center gap-2">
                <SiSpring /> Java | SpringBoot
              </li>
              <li className=" flex items-center gap-2">
                <FaNodeJs />
                NodeJS | NestJs | Express
              </li>
              <li className=" flex items-center gap-2">
                <SiPython />
                Python | Django | Flask
              </li>
            </ul>
            <img src={patoback} alt="" className='h-72' />
          </div>
        </div>

        <div className="w-4/9 ml-auto mr-10 -mt-24 ">
          <p className="uppercase text-3xl font-bold p-2 rounded-t-xl bg-sky-300 text-sky-950 flex justify-center items-center gap-4">
            <PiMonitorPlayFill />
            Frontend
          </p>
          <div className=" border-2 border-sky-300 bg-sky-800/40 px-4 py-2 flex gap-2 items-center justify-around">
            <ul className="flex flex-col gap-2 text-2xl items-center font-semibold text-sky-500">
              <li className=" flex items-center gap-2">
                <SiHtml5 /> HTML | CSS | JavaScript
              </li>
              <li className=" flex items-center gap-2">
                <SiReact /> React | Angular | VueJs
              </li>
              <li className=" flex items-center gap-2">
                <SiReact /> Tailwind | Bootstrap | MaterialUI
              </li>
            </ul>
            <img src={patofront} alt="" className='h-72' />
          </div>
        </div>

        <div className="w-4/9 ml-16 -mt-16">
          <p className="uppercase text-xl font-bold p-2 rounded-t-xl bg-red-300 text-red-950 flex justify-center items-center gap-4">
            <PiMonitorPlayFill />
            InfraEstrutura
          </p>
          <div className=" border-2 border-red-300 bg-red-900/40 px-4 py-2 flex gap-2 items-center justify-around">
            <ul className="flex flex-col gap-2 text-lg items-center font-semibold text-red-500">
              <li className=" flex items-center gap-2">
                <SiAwslambda /> Amazon Web Services (AWS)
              </li>
              <li className=" flex items-center gap-2">
                <PiNetworkFill /> Redes estruturadas
              </li>
              <li className=" flex items-center gap-2">
                <GrDeploy /> CI/CD
              </li>
            </ul>
            <img src={patoinfra} alt="" className='h-72' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
