import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialIcons from './components/Socialicons'

const jose = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Kreator\'s Recipe Blog',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jose.className}>
       <Navbar />

        <div className='min-h-screen'>
        {children}
        </div>

        <Footer />
        </body>
    </html>
  )
}
