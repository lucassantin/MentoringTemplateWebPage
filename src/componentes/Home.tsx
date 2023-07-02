import Sandra from "../assets/sandra.png";
import { Button } from "./Button";
import { SaibaMais } from "./SaibaMais";

export function Home() {
  return (
    <main className="relative px-8 pt-6 text-white flex justify-between">
      <div className=" w-[800px]">
        <p className="text-7xl pt-[60px] ">
          Mentora especialista em direcionamento vocacional
        </p>

        <p className="text-2xl pt-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>

        <div className="flex flex-row items-center pt-[50px] gap-[50px]">
          <a href="https://cutt.ly/owrxSZi0" target="_blank">
            <Button />
          </a>
          <SaibaMais />
        </div>
      </div>

      <img src={Sandra} className="w-[650px] h-[650px]" />
    </main>
  );
}
