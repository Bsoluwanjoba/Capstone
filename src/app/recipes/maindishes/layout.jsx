import React from 'react'

export const metadata = {
  title: 'Main Dish Recipes',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function layout({children}) {
  return (
    <section>
    {children}
 
    </section>
  )
}