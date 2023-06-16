import localFont from 'next/font/local'

export const barlow = localFont({
  variable: '--barlow',
  fallback: ['system-ui'],
  src: [
    {
      path: '../Barlow/Barlow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../Barlow/Barlow-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../Barlow/Barlow-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../Barlow/Barlow-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})
