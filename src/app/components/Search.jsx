'use client'
import React from 'react'


export default function Search() {
    const [searchBook, setSearchBook] = useState('')
    const foodCat = foods.filter(food =>
     food.title.toLowerCase().includes(searchBook.toLowerCase()) || food.category.toLowerCase().includes(searchBook.toLowerCase() ))
 
     function onSubmit(e){
       e.preventDefault()
       setSearchBook(e.target.search.value)
     }
 
  return (
    <div>
         <form className='flex items-center justify-center py-[2em]' onSubmit={onSubmit}>
      <input type="search" name="search" id="search" placeholder='Search For Food & Categories' className={`w-3/5 outline-8 rounded-[40px] border-[3px] border-[red] border-solid my-5 m-auto ${styles.sear}`} defaultValue={searchBook} />
    </form>
    </div>
  )
}
