import kreator from './main.module.css'
import { FaRegClock } from "react-icons/fa"
import { foods } from '../recipes/page'
import Link from 'next/link'
export default function Category() {
  return (
    <section className={kreator.section}>
      <div className={kreator.category}>
      
      {/* <Link href={`/chinese/${foods.id}`} title={`${foods.category} of ${foods.title}`}> */}
      <div>
      <h2>Featured Recipe</h2>
      <div className='mt-[120px] text-white'>
      <h3 className='font-bold text-2xl tracking-wider'>Kung Pao Shrimp</h3>
       <p className='flex flex-row gap-2 text-[13px] ml-[26px] mt-[10px]'><span><FaRegClock /></span>3 hours 15 minutes</p>
      </div>
      </div>
      {/* </Link> */}

      {/* <Link href={`/chinese/${foods.id}`} title={`${foods.category} of ${foods.title}`}> */}
      <div>
      <h2>Featured Recipe</h2>
      <div className='mt-[120px] text-white'>
      <h3 className='font-bold text-2xl tracking-wider'>Bean Sprout Salad</h3>
       <p className='flex flex-row gap-2 text-[13px] ml-[31px] mt-[10px]'><span><FaRegClock /></span>2 hours 35 minutes</p>
      </div>
      </div>
      {/* </Link> */}

      {/* <Link href={`/chinese/${foods.id}`} title={`${foods.category} of ${foods.title}`}> */}
      <div>
      <h2>Featured Recipe</h2>
      <div className='mt-[120px] text-white'>
      <h3 className='font-bold text-2xl tracking-wider'>Chicken Salad</h3>
       <p className='flex flex-row gap-2 text-[13px] ml-[10px] mt-[10px]'><span><FaRegClock /></span>1 hours 05 minutes</p>
      </div>
      </div>
      
      {/* </Link> */}
  </div>
    </section>
  

  )
}
