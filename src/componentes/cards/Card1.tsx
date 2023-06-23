import cardImg from '../assets/cardImg.jpeg';
import { Button } from '../Button.tsx';

export function Card1() {
  return (
    <div className='w-[1560px] h-[425px]  bg-violet-700 rounded-[20px] overflow-hidden border-solid border-white border-[3px] relative'>
      <img src={cardImg}/>
      <div className='flex'>
        <h1>Titulo Mentoria</h1>
        <p>Funcao da Mentoria</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, vitae. Molestias velit ipsam labore et eligendi numquam, eaque nemo, quas, asperiores maxime inventore ut quidem!</p>
        <Button />
      </div>
    </div>
    
  )
}