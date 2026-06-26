import '@/styles/globals.scss'

export const metadata = {
  title: 'Another Real Estate Agency',
  description:
    'Agencia boutique de inversión inmobiliaria en preventa',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-pt-[6rem]">
    <body className="bg-neutral-100 text-[#1a1814] font-sans font-light leading-relaxed overflow-x-hidden">
    <main>{children}</main>
    </body>
    </html>
  )
}
