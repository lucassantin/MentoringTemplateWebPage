import CardImg from '../assets/CardImg.jpeg';
import { Button } from './Button';

export function Card() {
  return (
    <div className='w-[240px] h-[375px] rounded-[20px] overflow-hidden border-solid border-white border-[3px] relative'>
      <img src={CardImg}/>
      <div className='flex'>
        <h1>Titulo Mentoria</h1>
        <p>Funcao da Mentoria</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, vitae. Molestias velit ipsam labore et eligendi numquam, eaque nemo, quas, asperiores maxime inventore ut quidem!</p>
        <Button />
      </div>
    </div>
  )
}