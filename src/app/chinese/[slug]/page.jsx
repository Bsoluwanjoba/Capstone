'use client'
import { foods } from "@/app/recipes/page"
import Link from "next/link"
import Image from "next/image"
import { GiCookingPot } from "react-icons/gi";
import styles from './chinese.module.css'
import { BiFoodMenu } from "react-icons/bi"
import { MdOutlineFastfood } from "react-icons/md"
import { PiBowlFoodLight } from "react-icons/pi"
import { MdTimer } from "react-icons/md"
import { FaBowlFood } from "react-icons/fa6"
import { TfiMenuAlt } from "react-icons/tfi"


export default function Page({params}) {
  const foodCard = foods.find(food => food.id == params.slug)

 const filteredFoods = foods.filter(food => food.category == foodCard.category && food.title !== foodCard.title)
 
 
  return (
    <div className="relative -z-10">
     
    <section>
          <section className={`py-[5.2em] h-[500px] w-[1498px] ${styles.border}`}  style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0.800)), url(/images/${foodCard.image}.jpeg)`}} >
          {/* <div className="text-white font-semibold bg-cover shadow-2xl"> */}
              <div className=" bg-[red] w-[350px] h-[190px] mt-[110px] ml-[200px] p-[15px] text-white font-semibold tracking-[0.3em] text-[13px] leading-8 bg-opacity-70 rounded-md">
                <h2 className="flex flex-row gap-3 items-center border-b border-dotted p-[5px]">
                <span><FaBowlFood /></span>
                  {foodCard.title}</h2>

                <h2 className="flex flex-row gap-3 items-center border-b border-dotted p-[3px]">  
                   <span><TfiMenuAlt /></span>
                  {foodCard.category}</h2>

                <h2 className="flex flex-row gap-3 items-center border-b border-dotted p-[3px]">  
                <span><MdTimer /></span>
                  {foodCard.time > 60 ? parseInt(foodCard.time/60)+'hr ' +(foodCard.time % 60)+ 'mins' : foodCard.time + 'mins'}</h2>

              </div>
      {/* </div> */}
          </section>

        <section className="w-[80%] m-auto">

        <div className="text-black w-[60%] leading-8 mt-[68px]">
        <ul>
          <p className="text-3xl font-semibold underline text-center text-[red] tracking-widest">Steps To Follow In Making This Recipe:</p>
        {foodCard.preparation.map((para,index) => ( 
          
          <li key={index} className="flex gap-[8px]">
           <span> <GiCookingPot  className="text-[15px] mt-[5px]"/></span>
            <span className=" tracking-wider leading-8 mb-[20px]">{para}</span>
          </li>
          
          ))}
        </ul>
      </div>

      
        </section>
        <div className="float-right -mt-[690px] mr-[84px] leading-9 bg-[#ffe] shadow-2xl p-[50px] h-[430px] w-[330px]">
          <p className="text-xl font-semibold text-center text-[red] mb-[20px]">Ingredients</p>
            <ul className={styles.aside}>
              {foodCard.ingredients.map((lara,index) => (
                <li key={index} className="flex flex-row items-center gap-2 border-y-[1px] border-dotted border-black mt-">
                <MdOutlineFastfood />
                  <span>{lara}</span>
                </li>
              ))}
            </ul>
          </div>
             

               <div className="mt-[100px] w-[80%] m-auto">
            <h2 className={`text-[25px] font-bold text-[red] leading-[25px] tracking-widest items-center p-[5px] ${styles.borderr}`}>Related Foods</h2>
            <div className="grid grid-cols-3 rounded-md mt-[20px]">
            {filteredFoods.slice(0,5).map((kub, index) => (
              <section key={index}>
                   <Link href={`/chinese/${kub.id}`} title={`${kub.title} of ${kub.author}`}>
                    <Image src={`/images/${kub.image}.jpeg`} alt={kub.title} width={300} height={250} className="rounded-md"/>
                    <h3 className="leading-[50px] flex items-center gap-1 text-black font-extrabold tracking-wider text-center text-[13px]"> {kub.title} </h3>
                    </Link>
                </section>

                ))}
            </div>
      </div>
    </section>
    
    </div>
  )
}
