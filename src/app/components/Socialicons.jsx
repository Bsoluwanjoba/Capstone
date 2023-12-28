import { FaLinkedin, FaGithub, FaSquareInstagram } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi"
import Link from "next/link"
import { IoCall } from "react-icons/io5"

export default function SocialIcons() {
  return (
    <aside className="flex gap-4 bg-[red] text-black text-xl p-[2px] float-right">
      <Link href= "https://www.linkedin.com/in/babatunde-oluwanjoba-28a89a255/" target="_blank">
      <FaLinkedin />
      </Link>
      <Link href="https://github.com/Bsoluwanjoba/" target="_blank">
      <FaGithub />
      </Link>
      <FaSquareInstagram />
      <Link href= 'mailto:bsoluwanjoba@gmail.com'>
      <BiLogoGmail />
      </Link>

      <Link href='tel:+2347053471066'>
      <IoCall />
      </Link>
    </aside>
  
  )
}
