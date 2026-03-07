// import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Another Real Estate Agency',
  description:
    'Agencia boutique de inversión inmobiliaria en preventa',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es" className="scroll-pt-[6rem]">
      <body className="bg-[#edeae3] text-[#1a1814] font-sans font-light leading-relaxed overflow-x-hidden">
      <Header/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
