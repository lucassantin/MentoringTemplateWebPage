import star from "../assets/star.svg";
import { Stars } from "./stars";

export const DepoimentosStructure = {
  "Ana Silveira": {
    imagePerfil: {
      source:
        "https://i.pinimg.com/564x/1c/3f/f8/1c3ff84664dd06e42f7dc3593a3b71e5.jpg",
      alt: "Foto de perfil",
    },
    ImageEstrela: {
      source: star,
      alt: "5 estrela",
    },
    DepoimentoText: {
      text: "Lorem Lorem ipsum dolor sit amet.Lorem Lorem ipsum dolor sit amet.",
    },
  },
  "José de Alencar": {
    imagePerfil: {
      source:
        "https://i.pinimg.com/564x/58/21/9f/58219fb8da79e0ff4b4f6ec5f8725032.jpg",
      alt: "Foto de perfil",
    },
    ImageEstrela: {
      source: star,
      alt: "5 estrela",
    },
    DepoimentoText: {
      text: "Lorem Lorem ipsum dolor sit amet.Lorem Lorem ipsum dolor sit amet.",
    },
  },
  "Beatriz Motta": {
    imagePerfil: {
      source:
        "https://i.pinimg.com/750x/ab/b4/a6/abb4a6948359e607257feb63ff4bc165.jpg",
      alt: "Foto de perfil",
    },
    ImageEstrela: {
      source: star,
      alt: "5 estrela",
    },
    DepoimentoText: {
      text: "Lorem Lorem ipsum dolor sit amet.Lorem Lorem ipsum dolor sit amet.",
    },
  },
};
export function Depoimentos() {
  return (
    <div className="bg-colorNature bg-cover px-[120px] pt-[50px]">
      <p className="text-white text-7xl pb-[50px] flex justify-center w-full h-[px] ">
        Depoimentos
      </p>

      <div className="flex justify-row justify-between py-[70px]">
        {Object.entries(DepoimentosStructure).map(([key, value]) => {
          return (
            <div
              className="w-[350px] h-[480px] bg-gradient-to-t from-[#0e3452] text-white
              to-colorContrast rounded-3xl flex flex-col items-center shadow-black shadow-2xl"
            >
              <img
                className="rounded-full object-cover w-[140px] h-[140px] shadow-blue-950 shadow-lg"
                src={`${value.imagePerfil.source}`}
                alt={`${value.imagePerfil.alt}`}
              />
              <p className="font-bold text-[22px]">{key}</p>
              <Stars
                source={value.ImageEstrela.source}
                alt={value.ImageEstrela.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
