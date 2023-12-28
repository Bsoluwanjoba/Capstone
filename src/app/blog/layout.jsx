import React from 'react'


export const metadata = {
  title: 'Blog',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function layout({children}) {
  return (
    <div>
    {children}
    </div>
  )
}
