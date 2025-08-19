import { BrowserRouter } from "react-router-dom";
import Contato from "./components/Contato";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-slate-200 flex justify-center items-center flex-col fundo2 px-8 md:px-4">
        <Navbar />
          <div>
            <Home />
            <Sobre />
            <Skills />
            <Contato />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
