import React from 'react'
import Recipes from './Recipes'

export const metadata = {
  title: 'All Recipes',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function layout({children}) {
  return (
    <section>
   <Recipes /> 
    {children}
 
    </section>
  )
}
