import { NavLink } from 'react-router-dom';

function Navbar() {
  const sections = [
    'home',
    'sobre',
    'projetos',
    'skills',
    'experiências',
    'contato',
  ];

  return (
    <div className="w-full fixed top-0 bg-slate-950">
      <div className="container flex justify-between py-6 text-xl font-semibold mx-auto">
        <h3 className="text-gradient-purple">/TjFaccipieri</h3>
        <ul className="flex gap-4">
          {sections.map((item, index) => (
            // <NavLink
            //   to={item}
            //   className={({ isActive }) =>
            //     isActive
            //       ? 'text-gradient-purple font-bold capitalize'
            //       : 'text-gray-400 capitalize'
            //   }
            //   key={index}
            // >
            //   {item}
            // </NavLink>
            <a href={`#${item}`} key={index}>{item}</a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
