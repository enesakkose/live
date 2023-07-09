export interface Highlights {
  highlights: Highlight[]
}

export interface Highlight {
  title: string
  subtitle: string
  url: string
  thumbnailUrl: string
  mediaType: number
  doFollow: boolean
  keyHighlight: boolean
  id: number
  createdAtTimestamp: number
  sourceUrl: string
}
