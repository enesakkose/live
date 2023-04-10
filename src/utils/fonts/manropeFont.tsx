import localFont from 'next/font/local'

export const manrope = localFont({
  variable: '--manrope',
  fallback: ['system-ui'],
  src: [
    {
      path: '../../assets/fonts/Manrope/ttf/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Manrope/ttf/Manrope-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Manrope/ttf/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Manrope/ttf/Manrope-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})
