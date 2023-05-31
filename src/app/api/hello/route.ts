import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    const response = await fetch('https://api.sofascore.com/api/v1/sport/tennis/scheduled-events/2023-05-29');
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error occurred', { status: 500 });
  }
}
