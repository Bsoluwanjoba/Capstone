import Link from 'next/link'
import { foods } from '../page'
import { FaRegClock } from "react-icons/fa"


const soupFood = foods.filter(food => food.category == 'Soup')

const foodCategory = soupFood.map(food => (
  <Link href={`/chinese/${food.id}`} title={`${food.category} of ${food.title}`}>
  <section key={food.id} style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)), url(/images/${food.image}.jpeg)`}}
  className='shadow-2xl rounded-md h-[250px] w-[350px] gap-2'>

        <span className='ml-[250px] mt-[550px] text-white text-[12px] font-medium bg-[red] rounded p-[5.8px] tracking-[2px]'>{food.category}</span>
      
        <section className='mt-[150px] text-center text-white'>
 <h2 className='font-semibold tracking-[2.8px]'>{food.title}</h2>

  <p className='flex flex-row gap-2 ml-[110px] mt-[11px]'> <FaRegClock />
  <span>{food.time > 60 ? parseInt(food.time/60)+'hr ' +(food.time % 60)+ 'mins' : food.time + 'mins'}</span>
  </p>

 
 </section>

  </section>
  </Link>
))
export default function page() {
  return (
    <div className='grid grid-cols-3 gap-10 p-20 w-[85%] m-auto'>{foodCategory}</div>
  )
}
