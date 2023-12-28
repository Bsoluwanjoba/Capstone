import React from 'react'
import styles from './pc.module.css'

export default function PopularCategories() {
  return (
    <section className={styles.popularcategories}>
    <div className='leading-[70px] ml-[400px]'>
    <h1 className='ml-[3px] text-5xl text-white font-semibold gap-2 tracking-widest leading-6 text-[54px]'>Recipes Category</h1>
     <p className='text-white ml-5 text-[16px] font-thin'>Be sure not to miss out this categories. Enjoy trying them out</p>
    </div>

    <section className={styles.two}>
        <div>
            <h1 className='mt-[180px] ml-[10px] font-semibold tracking-wider'>Main Dish</h1>
            <p className='font-thin text-[14px] ml-[10px]'>View All Recipes</p>
        </div>

        <div>
        <h1 className='mt-[180px] ml-[10px] tracking-wider'>Salad</h1>
        <p className='font-thin text-[14px] ml-[10px]'>View All Recipes</p>
        </div>

        <div>
        <h1 className='mt-[180px] ml-[10px] tracking-wider'>Soup</h1>
        <p className='font-thin text-[14px] ml-[10px]'>View All Recipes</p>
        </div>
    </section>

    <section className='' style={{backgroundImage: `url(/pexels-roman-odintsov-4958641.jpg)`}}>

    </section>
    </section>
  )
}
