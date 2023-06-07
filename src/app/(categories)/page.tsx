import React from 'react'
import Page from './[category]/page'

async function HomePage() {
  return (
     // @ts-expect-error Server Component
    <Page params={{ category: 'football'}} />
  )
}

export default HomePage