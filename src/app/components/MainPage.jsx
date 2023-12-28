import styles from './main.module.css'
import Image from 'next/image'
import { GiHotMeal } from "react-icons/gi"
import { Dancing_Script } from 'next/font/google'


const scripts = Dancing_Script({ subsets: ['latin'], weight: ['400'] }) 
export default function MainPage() {
  return (
    <section className={styles.main}>
        <div className='flex flex-col items-center justify-center h-screen text-white leading-[80px]'>
        
      <h1 className="flex flex-row gap-2 text-6xl font-semibold">
     <span className='text-[red]'> <GiHotMeal /></span> Welcome to Kreator's Chinese Recipes Blog
      </h1>
      <h2 className={scripts.className}>Taking you closer to the Chinese food fantasies</h2>
    </div>
        

           
    </section>
  )
}
