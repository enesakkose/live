import { NextResponse } from 'next/server'
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const response = await fetch(`https://api.sofascore.com/api/v1/sport/${category}/events/live`)
    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Error occurred', { status: 500 })
  }
}
