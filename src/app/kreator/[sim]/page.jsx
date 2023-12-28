import React from 'react'
import { blogs } from '@/app/blog/page'
import Link from 'next/link'
import Image from 'next/image'
import styles from './kreator.module.css'


export default function Page({params}) {
    const blogCard = blogs.find(blog => blog.id == params.sim)

    const filteredBlogs = blogs.filter(blog => blog.title !== blogCard.title)
  return (
    <div className='py-[5em]'>
        <div className={styles.header}>
        
        </div>

                  <section className='w-[80%] m-auto'>
                      <div className='text-center'>
                        <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)), url(/images/${blogCard.image}.jpg)`}} className={`h-[450px] w-[850px] bg-cover mt-[-50px] ml-[170px] shadow-2xl, ${styles.main} `}> 
                      
                            <div className='mt-[230px]'>
                          <span className='text-white font-semibold text-[22px] py-[7em] tracking-widest'> {blogCard.title} </span> <br />
                            </div>
                                                                  <div className='flex gap-[10px] items-center text-[white] tracking-widest bg-[red] w-[290px] h-[70px] bg-opacity-50'>
                                              <Image src={`https://robohash.org/${blogCard.author}`} width={50} height={50}  className='border-solid border-[red]'/>
                                              <p className='font-bold items-center tracking-[0.2em] mt-[20px]'> {blogCard.author} <br />
                                              <span className='text-[12px]'>{blogCard.date}</span>
                                              </p>
                                              </div>
                        </div>

                        <div className='p-[10px] text-start mt-[50px]'>
                          <p className='font-semibold text-[28px] underline tracking-wider text-center text-[red]'>{blogCard.title}</p>
                         <p className='tracking-wider leading-10 indent-16'> {blogCard.details}</p>
                        </div>
                      </div>




                              <section className='py-[7em]'>
                                <h2 className='text-[25px] font-bold text-[red] border-l-[4px] border-black pl-[7px]'>Read More Of Our Amazing Blogs...</h2>

                              <p className='py-[2em] grid grid-cols-3 gap-[38px] leading-10'>   
                                {filteredBlogs.map((buk, index) => (
                                          <section key={index}>
                                              <Link href={`/kreator/${buk.id}`} title={`${buk.title} of ${buk.author}`}>
                                              <Image src={`/images/${buk.image}.jpg`} alt={buk.title} width={950} height={850} />
                                              <h3 className='font-bold leading-7 text-center'>{buk.title}</h3>
                                              </Link>
                                              
                                          </section>
                                          ))}
                                          </p>
                              </section>
                  </section>
    </div>
   
  )
}
