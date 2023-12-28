import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
         <div className="flex items-stretch gap-32 ml-[135px] py-12 w-[90%s]">
      <div className='mt-[20px]'>
      <Image src='/bg/kr.png' alt='logo' width={100} height={100}/>
      </div>

     <div>
      <ul>
        <h2>Recipes Creator</h2>
        <li>John Kreator</li>
        <li>Jessica Kreator</li>
        <li>Amanda Kreator</li>
        <li>Nathaniel Kreator</li>
        </ul>
     </div>

     <div>
       <ul>
        <h2>Favorite Recipes</h2>
        <li>Sichuan Hot Pot</li>
        <li>Kung Pao Chicken</li>
        <li>Hot and Sour Soup</li>
        <li>Winter Melon Soup</li>
         </ul>
     </div>

     <div>
      <ul>
        <h2>Recently Added</h2>
        <li>Grilled Kebab</li>
        <li>Tofu</li>
        <li>Spring Rolls</li>
        <li>10-minutes Dumplings</li>
      </ul>
     </div>
          </div>
     
      

        <div className='flex justify-center foot'>
        <ul className='mr-[400px] text-white tracking-widest text-[13px]'>
         Copyright &copy;Kreator   Powered By <Link href="https://vercel.com/kreators-projects">Vercel io</Link>
        </ul>

        <ul className='flex justify-center items-stretch gap-2 tracking-widest text-[13px]'>
           <Link href='/recipes'> <li>Recipes</li> </Link>
            <Link href='/blog'> <li>Blog</li>  </Link>
           <Link href='/about'>  <li>About Us</li> </Link>
           <Link href='/contact'>  <li>Contact Us</li> </Link>
        </ul>
        </div>
      </section>
     
   

    </footer>
  )
}
