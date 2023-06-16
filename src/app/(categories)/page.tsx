import React from 'react'
import Page from './[category]/page'

function HomePage() {
  return (
     // @ts-expect-error
    <Page params={{ category: 'football' }}/>
  )
}

export default HomePage