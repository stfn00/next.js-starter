import localFont from 'next/font/local'

export const primaryFont = localFont({
  src: [
    {
      path: '../../public/fonts/MonaspaceNeon-Light.woff',
      weight: '300',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/MonaspaceNeon-Regular.woff',
      weight: '400',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/MonaspaceNeon-Medium.woff',
      weight: '500',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/MonaspaceNeon-SemiBold.woff',
      weight: '700',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
    {
      path: '../../public/fonts/MonaspaceNeon-Bold.woff',
      weight: '800',
      style: 'normal',
      fallback: ['serif'],
      adjustFontFallback: 'serif',
      display: 'swap',
      preload: true,
    },
  ],
})
