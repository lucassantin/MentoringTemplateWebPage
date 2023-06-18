import { Carrosel } from "./componentes/Carrosel"
import { Depoimentos } from "./componentes/Depoimentos"
import { Header } from "./componentes/Header"
import { Home } from "./componentes/Home"
import { Main } from "./componentes/Main"

function App() {
  return (
    <div className="overflow-hidden">
      <div className="bg-nature h-screen w-screen  ">
        <Header/>
        <Home />
        
      </div>
      <Main />
      <Carrosel />
      <Depoimentos />
    </div>
  )
}

export default App
