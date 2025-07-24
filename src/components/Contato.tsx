function Contato() {
  return (
    <div
      className="min-h-screen pt-20 flex flex-col justify-center font-mono"
      id="contato"
    >
      <form action="#">
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-purple-400 font-bold text-lg">Nome</label>
          <input id="name" className="border-2 border-purple-700 px-4 py-2 text-purple-300 rounded-lg" type="text" placeholder="Seu nominho..." />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="phone" className="text-purple-400 font-bold text-lg">Telefone</label>
          <input id="phone" className="border-2 border-purple-700 px-4 py-2 text-purple-300 rounded-lg" type="text" placeholder="Seu telefone..." />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-purple-400 font-bold text-lg">Email</label>
          <input id="email" className="border-2 border-purple-700 px-4 py-2 text-purple-300 rounded-lg" type="email" placeholder="Seu email..." />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="subject" className="text-purple-400 font-bold text-lg">Assunto</label>
          <input id="subject" className="border-2 border-purple-700 px-4 py-2 text-purple-300 rounded-lg" type="text" placeholder="Assunto da mensagem..." />
        </div>
      </form>
    </div>
  );
}

export default Contato;
