import React from 'react'
import Recipes from '../recipes/Recipes'


export const metadata = {
  title: 'Video Recipes',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function ({children}) {
  return (
    <div>
      {/* <Recipes /> */}
     {children}   
    </div>
  )
}
