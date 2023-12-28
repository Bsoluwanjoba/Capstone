import Link from 'next/link'
import styles from './recipes.module.css'

export default function Recipes() {
  return (
    <section>
       <nav className="">
       <ul className={styles.subheader}>
             <Link href="/recipes">
             <li>
                All Categories
                </li>
             </Link>


               <Link href="/recipes/maindishes">
               <li>
                Main Dishes
                </li>
               </Link>

              <Link href="/recipes/salad">
              <li>
                Salads
                </li>
              </Link>

             <Link href="/recipes/soups">
             <li>
                Soups
                </li>

             </Link>
                
                <Link href="/withvideos">
                <li>
                Video Recipes
                </li>

                </Link>
                </ul>
       </nav>

      <div className={styles.head}>
          <div className='flex flex-col justify-center items-center h-[60vh] text-white'>
            <h1 className='text-7xl font-normal'>Our Recipes</h1>
            <h2 className='1xl'>Feel free to pick from our variety of recipes</h2>
          </div>
      </div>
    </section>
  )
}
