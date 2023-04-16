import React from 'react'
import Header from '@/app/(categories)/event/[id]/components/Header'
import Hero from '@/app/(categories)/event/[id]/components/Hero'
import { notFound } from 'next/navigation'

type EventsParamsType = {
  params: {
    id: string
  }
}

async function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function Page({ params }: EventsParamsType) {
  await delay(4000)
  
  if(params.id === 'YXKg7xSn8'){
    notFound()
  }
  
  
  if(params.id === 'YXKg7xSn') {
    throw new Error('error')
  } 
  return (
    <div>
      <Header/>
      <Hero/>
      Page {params.id}
    </div>
  )
}

export default Page