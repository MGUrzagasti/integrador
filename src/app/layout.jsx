import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Foter from '@/components/Foter';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


<Navbar />


      {children}
      <br />
      <br />
      <br />
      <Foter />
      </body>
    </html>
  )
}
