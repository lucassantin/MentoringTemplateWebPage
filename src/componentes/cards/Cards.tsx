import cardImg from "../../assets/cardImg.jpeg";

export const CardsStructure = {
  TituloMentoria1: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
  TituloMentoria2: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
  TituloMentoria3: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
  TituloMentoria4: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
  TituloMentoria5: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
  TituloMentoria6: {
    image: {
      source: cardImg,
      alt: "essa imagem é",
    },
    text: {
      func: "essa mentoria é para isso",
      inf: "infomações de como a mentoria é",
    },
  },
};

export function Cards() {
  return (
    <div className="flex flex-row gap-[30px] ">
      {Object.entries(CardsStructure).map(([key, value]) => {
        return (
          <div
            className="w-[1560px] h-[425px]  bg-violet-700 rounded-[20px] 
          overflow-hidden border-solid border-white border-[3px] relative"
          >
            <img src={value.image.source} />
            <div className="flex">
              <h1>{key}</h1>
              <p>{value.text.func}</p>
              <p>{value.text.inf}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
