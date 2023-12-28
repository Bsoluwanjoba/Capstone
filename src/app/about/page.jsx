import styles from './about.module.css'
import { GoArrowUp } from "react-icons/go"
import Image from 'next/image'
import { blogs } from '../blog/page'
import Link from 'next/link'

export default function page() {
  return (
   <section>
    <div className={styles.header}>
      <div className='flex flex-col justify-center items-center h-64 text-white leading-7'>
        <h1 className='text-7xl font-normal  mt-[240px]'>About Recipe</h1>
        <h2 className='text-1xl'>About our cooks and their recipes</h2>
      </div>
     </div> 

     <div className='flex items-center justify-center  w-[70%] gap-16 m-auto py-20 leading-8 font-semibold'>
      <p className='border-3 border-[red] border-dashed'>Kreator's Chinese Recipe Blog is a culinary haven for enthusiasts seeking authentic and delectable Chinese recipes. With a diverse array of dishes ranging from vibrant salads to savory main courses, the blog caters to all tastes and skill levels. Each recipe is thoughtfully curated, providing detailed instructions and insights into Chinese culinary traditions.</p>
      <p> Kreator's commitment to simplicity and flavor ensures that even novice cooks can recreate the magic of Chinese cuisine in their own kitchens. Explore the blog for a delightful journey through the rich tapestry of Chinese flavors, expertly crafted by Kreator's passion for culinary excellence.</p>
     </div>

     
      <section className='flex items-center justify-center gap-20 bg-[red] h-[70vh] p-[20px]'>
      <div className='grid grid-cols-3 w-[70%] m-auto gap-5'>

       <div className=" bg-white h-[370px] rounded-lg items-center">
       <Image src={`https://robohash.org/${blogs.author}`} alt='author' width={90} height={90} className={styles.image}/>
          <div className='mt-[70px] leading-8'>
          <h2 className='font-bold text-[17px] text-center'>Nathaniel Smith</h2>
          <p className='w-[290px] text-center ml-[23px] tracking-wider'>A well renowed Five star Michellin chef with 30 years of experience in cooking of Chinese cuisines.</p>

          </div>
          <Link href='https://wa.link/vx9kq6'> <p className='bg-[red] p-[7px] text-white w-[90px] rounded-sm h-[30px] text-[14px] mt-[50px] ml-[115px] text-center items-center'>Contact Me</p></Link>
       </div>
       
       
       <div className=" bg-white h-[370px] rounded-lg items-center">
        <Image src={`https://robohash.org/${blogs.author}`} alt='author' width={90} height={90} className={styles.image}/>
            <div className='mt-[70px] leading-8'>
            <h2 className='font-bold text-[17px] text-center'>Amanda Smith</h2>
            <p className='w-[290px] text-center ml-[23px] tracking-wider'>A well renowed Three star Michellin chef with 15 years of experience in cooking of Chinese cuisines.</p>

            </div>
            <Link href='https://wa.link/vx9kq6'> <p className='bg-[red] p-[7px] text-white w-[90px] rounded-sm h-[30px] text-[14px] mt-[50px] ml-[115px] text-center items-center'>Contact Me</p></Link>
       </div>
      
       <div className=" bg-white h-[370px] rounded-lg items-center">
     <Image src={`https://robohash.org/${blogs.june}`} alt='author' width={90} height={90} className={styles.image}/>
          <div className='mt-[70px] leading-8'>
          <h2 className='font-bold text-[17px] text-center'>Ballack Smith</h2>
          <p className='w-[290px] text-center ml-[23px]'>A well renowed Two star Michellin chef with 23 years of experience in cooking of Chinese cuisines.</p>

          </div>
        
         <Link href='https://wa.link/vx9kq6'> <p className='bg-[red] p-[7px] text-white w-[90px] rounded-sm h-[30px] text-[14px] mt-[50px] ml-[115px] text-center items-center'>Contact Me</p></Link>
       </div>

       </div>
       
      </section>
    
    <div className='ml-[1340px] pt-[80px]'>
    <div className={styles.topbtnii}>
      <span> <GoArrowUp /></span>
      <button>Back To Top</button> 
      </div>
    </div>



  
   </section>
  )
}
