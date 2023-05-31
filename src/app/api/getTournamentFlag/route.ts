export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tournamentFlag = searchParams.get('tournamentFlag')
    const response = `https://www.sofascore.com/static/images/flags/${tournamentFlag}.png`
    

    return new Response(response, {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Error occurred', { status: 500 })
  }
}