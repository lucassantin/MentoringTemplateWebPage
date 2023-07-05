import { Mentorias } from "./componentes/Mentorias";
import { Depoimentos } from "./componentes/Depoimentos";
import { Header } from "./componentes/Header";
import { Home } from "./componentes/Home";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <>
      <div className="bg-nature bg-cover h-screen w-screen  ">
        <Header />
        <Home />
      </div>

      <Mentorias />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default App;
