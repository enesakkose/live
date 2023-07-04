export const getFormatNumber = (value: number) => {
  const formatter = Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  })

  return formatter.format(value)
}
