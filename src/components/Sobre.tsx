import { FaFileCode, FaMapMarkerAlt } from 'react-icons/fa';
import { IoDocumentAttach, IoLanguage } from 'react-icons/io5';
import pdf from '../assets/Thiago Faccipieri - currículo.pdf'
import duck from '../assets/confused-duck.webp'

function Sobre() {
  return (
    <div
      className="min-h-screen pt-20 container mx-auto flex gap-8 font-mono text-lg items-center "
      id="sobre"
    >
      <div className="text-zinc-300 flex-2 flex flex-col gap-6 ">
        <p className="">
          Oi! Eu sou o Thiago, desenvolvedor fullstack com uma quedinha maior
          por frontend e um entusiasmo gigante por tecnologia no geral.
          Atualmente, trabalho como professor de programação — o que me permite
          fazer duas coisas que curto muito:{' '}
          <span className="text-cyan-200 font-bold underline">
            codar e compartilhar conhecimento
          </span>
          .
        </p>
        <p className="">
          Tenho uma bagagem que vai além do código, com experiência em
          infraestrutura e manutenção, o que me ajuda a enxergar o
          desenvolvimento de software de forma mais completa. Estou sempre
          buscando formas de criar soluções modernas, escaláveis e que realmente
          façam a diferença.
        </p>
        <p>
          Sou certificado pela AWS, curto bastante o universo de cloud
          computing, DevOps e arquitetura de sistemas. Gosto de aprender, mas
          também gosto de transformar esse aprendizado em algo útil — seja num
          projeto pessoal ou numa aula para os alunos.
        </p>
        <p>
          No meu{' '}
          <a
            href="https://github.com/tjfaccipieri"
            target="_blank"
            className="text-purple-400 underline font-bold"
          >
            GitHub
          </a>
          , você encontra alguns dos meus projetos, estudos e experimentos
          (inclusive umas ideias malucas que acabaram funcionando 😄). Já no{' '}
          <a
            href="https://www.linkedin.com/in/thiago-faccipieri/"
            target="_blank"
            className="text-purple-400 underline font-bold"
          >
            LinkedIn
          </a>
          , dá pra acompanhar minha trajetória, cursos e experiências mais
          formais.
        </p>
        <p className="text-cyan-500 text-xl font-bold">
          Se quiser trocar uma ideia sobre tecnologia, projetos ou ensino, é só
          chamar. Bora construir algo legal juntos!
        </p>
        <div className="flex gap-4 mx-auto">
          <p className="about-buttons cursor-default">
            <FaMapMarkerAlt className="text-purple-500 text-xl" /> Praia Grande
            - SP
          </p>
          <p className="about-buttons cursor-default">
            <FaFileCode className="text-purple-500 text-xl" /> WebDev FullStack
          </p>
          <p className="about-buttons cursor-default">
            <IoLanguage className="text-purple-500 text-xl" /> PT-BR / EN-US
          </p>
          <a href={pdf} download={'Thiago Faccipieri - Curriculo'} className="about-buttons cursor-pointer">
            <IoDocumentAttach className="text-purple-500 text-xl" /> Download CV
          </a>
        </div>
      </div>
      <div className="flex flex-1">
        <img src={duck} alt="" className='rounded-4xl border-purple-700 border-4 p-1' />
      </div>
    </div>
  );
}

export default Sobre;
