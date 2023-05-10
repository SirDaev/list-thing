import { Inter } from 'next/font/google'
import List from '../components/List'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center px-4 py-24 ${inter.className}`}>
      <h1 className="text-2xl font-bold mb-4">List Thing</h1>
      <List />
    </main>
  )
}
