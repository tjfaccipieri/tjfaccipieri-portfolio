import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaSquareJs } from 'react-icons/fa6';

function Skills() {
  return (
    <div className="min-h-screen pt-20" id="skills">
      <div className="flex flex-col gap-10">
        <FaNodeJs className="icons-hero text-[#50fa7b]" />
        <FaReact className="icons-hero text-[#8be9fd]" />
        <FaJava className="icons-hero text-[#bd93f9]" />
        <FaSquareJs className="icons-hero text-[#f1fa8c]" />
        <FaHtml5 className="icons-hero text-[#ff5555]" />
        <FaCss3Alt className="icons-hero text-[#8be9fd]" />
      </div>
    </div>
  );
}

export default Skills;
