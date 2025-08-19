import patomail from '../assets/patomail.png';
function Contato() {
  return (
    <div
      className="py-20 grid grid-cols-3 gap-8 font-mono items-center"
      id="contato"
    >
      <form action="#" className="col-span-2 space-y-8">
        <div className="flex gap-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="text-sky-400 font-bold text-lg">Nome</label>
            <input id="name" className="border-2 border-sky-400 px-4 py-2 text-sky-300 rounded-lg" type="text" placeholder="Seu nominho..." />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-sky-400 font-bold text-lg">Email</label>
            <input id="email" className="border-2 border-sky-400 px-4 py-2 text-sky-300 rounded-lg" type="email" placeholder="Seu email..." />
          </div>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="subject" className="text-sky-400 font-bold text-lg">Assunto</label>
          <input id="subject" className="border-2 border-sky-400 px-4 py-2 text-sky-300 rounded-lg" type="text" placeholder="Assunto da mensagem..." />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="text" className="text-sky-400 font-bold text-lg">Texto da mensagem</label>
          <textarea name="text" rows={4} id="text" className="border-2 border-sky-400 px-4 py-2 text-sky-300 rounded-lg resize-none" placeholder='Digite sua mensagem aqui...'></textarea>
        </div>
        <button className='uppercase text-2xl font-bold text-white border-2 border-sky-400 hover:bg-sky-500 cursor-pointer w-1/2 rounded-lg mx-auto block py-1'>Enviar</button>
      </form>
      <div className='flex flex-col items-center justify-center border-2 border-sky-400 rounded-3xl bg-sky-400/30'>
        <img src={patomail} alt="" className='h-96' />
        <p className='text-white font-semibold text-xs pb-8'>Prefiro evitar a fadiga...</p>
      </div>
    </div>
  );
}

export default Contato;
