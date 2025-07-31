import './globals.css'
import Noise from "./components/noise";
import { Inter } from 'next/font/google'
 import { Analytics } from "@vercel/analytics/next"
const roboto = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Joona Kareinen's homepage",
  description: "Joona Kareinen's homepage",
  keywords: 'Homepage, Computer Vision, Artificial Intelligence, Machine Learning',
  author: 'Joona Kareinen',
  metadataBase: new URL('https://jookare.vercel.app/'),
  charset: 'UTF-8',
  openGraph: {
    title: "Joona Kareinen's homepage",
    description: "Joona Kareinen's homepage",
    type: 'website',
    locale: 'en_FI',
    site_name: "Joona Kareinen's homepage",
  },
}

export default function RootLayout({children}) {
  console.log("Hey there, curious developer! You found me.");
  
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Noise />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
