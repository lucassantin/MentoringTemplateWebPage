import Sandra from '../assets/sandra.png';

export function Home() {
  return (
    <main className="px-8 pt-6 text-white flex justify-between">
      <div className='bg-slate-500 w-[800px]'>
        <h6 className="text-2xl">🖐️ Olá, meu nome é</h6>
        <h1 className="text-7xl">Sandra.</h1>

        <p className="">Mentora especialista em direcionamento vocacional</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
    
        <a href="https://cutt.ly/owrxSZi0" target="_blank">
          <button className="color: white;">AGENDE SUA MENTORIA</button>
        </a>

        <a>
          <h4>Saiba Mais!</h4>
        </a> 
      </div>

      <img src={Sandra} className="w-[700px] h-[700px]" />
  
    </main>

    
  )
}