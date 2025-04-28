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

  return (
    <div className="w-full fixed top-0 bg-slate-950">
      <div className="container flex justify-between py-6 text-xl font-semibold mx-auto">
        <h3 className="text-gradient-purple font-black text-2xl">
          /TjFaccipieri
        </h3>
        <ul className="flex gap-4">
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
      </div>
    </div>
  );
}

export default Navbar;
