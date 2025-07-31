import './globals.css'
import Noise from "./components/noise";
import { Inter } from 'next/font/google'
 
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
  // 404, Page could not be loaded due to missing computational resources
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Noise />
        {children}
      </body>
    </html>
  )
}
