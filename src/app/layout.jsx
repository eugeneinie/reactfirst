import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import './globals.css'
import { Roboto } from 'next/font/google'

const dance = Roboto ({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'First class in React',
  description: 'React class using Next framework',
  keywords: 'react, next, js, javascript, html, css, tailwind'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dance.className}>
        <main className='flex justify-start space-x-2'>
        <Navbar />
        <div className='w-full'>
          {/* <TopNav /> */}
        {children}
        </div>
        </main>
        </body>
    </html>
  )
}