import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainEL({ children }) {

  return (
    <main className={`flex min-h-screen flex-col items-center px-4 py-24 ${inter.className}`}>
      {children}
    </main>
  );
}