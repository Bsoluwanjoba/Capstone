import { IoHomeOutline } from "react-icons/io5"
import { PiForkKnifeBold } from "react-icons/pi"
import { FaRegHeart, FaYoutube } from "react-icons/fa"
import { GrAnnounce } from "react-icons/gr"
import { LuMessagesSquare } from "react-icons/lu"
import { IoIosMail } from "react-icons/io"


import { Dancing_Script } from 'next/font/google'
import styles from './navbar.module.css'
import Link from "next/link"
import Image from "next/image"


const italian = Dancing_Script({ subsets: ['latin'], weight: ['400'] }) 

export default function Navbar() {
  return (
   <section>
   <nav className={styles.nav} id="top">
       
        
    <ul>
       <Link href="/">
       <li>
           <IoHomeOutline />
            <span>Home</span>
            </li>
       </Link>

        <Link href="/recipes">
        <li>
        <PiForkKnifeBold />
            <span>Recipes</span>
            </li>
            </Link>

          <Link href="/withvideos">
          <li>
            <FaYoutube />
            <span>Video Recipes</span>
            </li>
            </Link> 
      </ul>
   
     
     <li className={styles.logo}>

      <Image src='/bg/bg/logo.png'  alt="logo" width={70} height={70} />
     </li>
    

       <Link href="/blog">
       <li>
        <GrAnnounce />
            <span>Blog</span>
            </li>
       </Link>

       <Link href='/about'>
       <li>
        <LuMessagesSquare />
            <span>About us</span>
            </li>

       </Link>

      <Link href="/contact">
      <li>
        <IoIosMail />    
        <span>Contact us</span>
        </li>
      </Link>

   
   
    
    </nav>
    </section>

    
   
  )
}
