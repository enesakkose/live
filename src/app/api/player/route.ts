export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const playerId = searchParams.get('playerId')
    const response = await fetch(
      `https://api.sofascore.com/api/v1/player/${playerId}`,
    )
    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Error occurred', { status: 500 })
  }
}