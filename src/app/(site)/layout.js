import '@/styles/globals.scss'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { headers } from 'next/headers';

export const metadata = {
  title: 'Another Real Estate Agency',
  description:
    'Agencia boutique de inversión inmobiliaria en preventa',
}

export default async function RootLayout({ children }) {
  const h = headers();
  const pathname = h.get('x-pathname') || '';
  const isSurvey = pathname === '/survey';

  return (
    <html lang="es" className="scroll-pt-[6rem]">
      <body className="bg-neutral-100 text-[#1a1814] font-sans font-light leading-relaxed overflow-x-hidden">
        {!isSurvey && <Header/>}
        <main>{children}</main>
        {!isSurvey && <Footer/>}
      </body>
    </html>
  )
}
