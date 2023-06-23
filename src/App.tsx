import { Carrosel } from "./componentes/Carrosel"
import { Depoimentos } from "./componentes/Depoimentos"
import { Header } from "./componentes/Header"
import { Home } from "./componentes/Home"

function App() {
  return (
    <div className="overflow-hidden">
      <div className="bg-nature bg-cover h-screen w-screen  ">
        <Header/>
        <Home />
      </div>
      
      <Carrosel />
      <Depoimentos />
    </div>
  )
}

export default App
