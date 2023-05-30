import { NextResponse } from "next/server"
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const date = searchParams.get('date')
    const response = await fetch(`https://api.sofascore.com/api/v1/sport/${category}/scheduled-events/${date}`);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error occurred', { status: 500 });
  }
}