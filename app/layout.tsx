import { Header } from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'НОТАРІУС Сімонова Вікторія',
  description: 'нотаріус сімонова вікторія валеріївна',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <Header/>
        <main>
              {children}
        </main>    
        </body>
    </html>
  )
}
