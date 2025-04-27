import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sobre from './components/Sobre';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-slate-200 flex justify-center items-center flex-col">
        <Navbar />
          <Home />
          <Sobre />
      </div>
    </BrowserRouter>
  );
}

export default App;
