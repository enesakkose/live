export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query: string | null = searchParams.get('q')
    const BASE_URL = 'https://api.sofascore.com/api/v1'
    const ENDPOINT =
      query === null || query?.length < 2
        ? 'search/suggestions/default'
        : `search/all?q=${query}&page=0`
    const response = await fetch(`${BASE_URL}/${ENDPOINT}`)
    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Error occurred', { status: 500 })
  }
}
