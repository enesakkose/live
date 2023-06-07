export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const response = await fetch(`https://api.sofascore.com/api/v1/search/all?q=${query}&page=0`)
    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Error occurred', { status: 500 })
  }
}