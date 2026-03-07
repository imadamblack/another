'use client';

import Image from 'next/image';
import OptInForm from '@/components/opt-in-form';
import logo from '../../../public/images/svg/NTRS-Logo-Green.png';
import Link from 'next/link';
import scrollDepth from '@/utils/scrollDepth';
import { useEffect } from 'react';
import Img from 'next/image';
import logotype from '../../../public/images/svg/ANTR-Logo-2.svg';

const Section = ({
  id,
  eyebrow,
  title,
  children,
}) => (
  <section id={id} className="border-t border-black">
    <div className="mx-auto max-w-5xl px-6 py-14">
      {eyebrow ? (
        <p className="text-xs tracking-widest uppercase text-black/70">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-2xl md:text-3xl font-medium leading-tight">{title}</h2>
      <div className="mt-6 text-base leading-relaxed text-black/85">{children}</div>
    </div>
  </section>
);

const Bullet = ({children}) => (
  <li className="flex gap-3">
    <span className="mt-2 h-1 w-1 shrink-0 bg-black"/>
    <span>{children}</span>
  </li>
);


export default function Home() {
  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', 'Scroll', {depth: value}),
    })
  })

  return (
    <>
      <header className="border-b border-black">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-medium tracking-wide">ANOTHER</div>
          <nav className="hidden md:flex gap-6 text-sm text-black/80">
            <a className="hover:text-black" href="#problema">
              Problema
            </a>
            <a className="hover:text-black" href="#filtro">
              Filtro
            </a>
            <a className="hover:text-black" href="#proceso">
              Proceso
            </a>
            <a className="hover:text-black" href="#acceso">
              Acceso
            </a>
          </nav>
          <a
            href="#acceso"
            className="text-sm font-medium underline underline-offset-4 hover:no-underline"
          >
            Ver portafolio
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="container py-40">
        <div className="max-w-[80rem]">
          <div id="logo" className="flex items-center w-[20rem] aspect-video relative top-0 invert">
            <Img
              src={logotype}
              fill={true}
              style={{objectFit: 'contain'}}
              className="invert"
            />
          </div>
          <p className="text-xs tracking-widest uppercase text-black/70">
            Preventa para inversión · ZMG y Houston
          </p>

          <h1 className="ft-8">
            Una inmobiliaria más en GDL.
            <br/>— Pero más chida.
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-black/85 leading-relaxed">
            Te mostramos únicamente desarrollos que pasaron filtro legal y financiero real.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#acceso"
              className="button !w-full"
            >
              Quiero ver proyectos que sí están estructurados
            </a>
            <a
              href="#problema"
              className="button-secondary !w-full"
            >
              Ver qué revisamos (y por qué importa)
            </a>
          </div>

          <p className="mt-4 text-sm text-black/70">Servicio sin costo para el inversionista.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-black/80">
            <div className="border-t border-black pt-4">
              <p className="font-medium text-black">Filtro legal</p>
              <p className="mt-1">Estructura, fideicomiso, documentos y riesgos visibles.</p>
            </div>
            <div className="border-t border-black pt-4">
              <p className="font-medium text-black">Filtro financiero</p>
              <p className="mt-1">Escenarios, presión de flujo y números sin maquillaje.</p>
            </div>
            <div className="border-t border-black pt-4">
              <p className="font-medium text-black">Curaduría</p>
              <p className="mt-1">Si no resiste revisión, no entra al portafolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <Section
        id="problema"
        eyebrow="El problema real"
        title="El marketing inmobiliario es brillante. La estructura… no siempre."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-medium text-black">Te enseñan:</p>
            <ul className="mt-4 space-y-3">
              <Bullet>Amenidades</Bullet>
              <Bullet>Vistas</Bullet>
              <Bullet>Plusvalía proyectada</Bullet>
              <Bullet>“Últimas unidades”</Bullet>
            </ul>
          </div>

          <div>
            <p className="font-medium text-black">Pero rara vez te explican:</p>
            <ul className="mt-4 space-y-3">
              <Bullet>Cómo está estructurado legalmente el proyecto</Bullet>
              <Bullet>Si hay fideicomiso sólido</Bullet>
              <Bullet>Si existe crédito puente</Bullet>
              <Bullet>El historial real del desarrollador</Bullet>
              <Bullet>Qué pasa si el flujo financiero se presiona</Bullet>
            </ul>

            <p className="mt-6 border-t border-black pt-4 text-black">
              <span className="font-medium">El problema no es la preventa.</span> <br/>
              Es invertir sin entender el riesgo.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. UVP */}
      <Section
        id="filtro"
        eyebrow="3 · Propuesta de valor"
        title="Nosotros no vendemos lo que “se ve bien”. Revisamos lo que sostiene el proyecto."
      >
        <div className="max-w-3xl">
          <p>
            Another es una agencia boutique enfocada 100% en inversión en preventa. Antes de que veas
            una oportunidad:
          </p>

          <ul className="mt-6 space-y-3">
            <Bullet>Validamos respaldo legal</Bullet>
            <Bullet>Revisamos estructura financiera</Bullet>
            <Bullet>Analizamos proyecciones con criterio</Bullet>
            <Bullet>Evaluamos al desarrollador</Bullet>
          </ul>

          <p className="mt-6 border-t border-black pt-4 text-black">
            Si no cumple estándares estructurales, no entra. <br/>
            <span className="font-medium">No trabajamos con entusiasmo. Trabajamos con filtro.</span>
          </p>
        </div>
      </Section>

      {/* 4. BENEFICIOS */}
      <Section
        eyebrow="4 · Beneficios directos"
        title="Lo que obtienes cuando inviertes con análisis"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul className="space-y-3">
            <Bullet>Claridad jurídica antes de firmar</Bullet>
            <Bullet>Proyecciones comparativas por zona</Bullet>
            <Bullet>Identificación real de riesgos</Bullet>
            <Bullet>Acompañamiento estratégico</Bullet>
          </ul>
          <ul className="space-y-3">
            <Bullet>Gestión de crédito hipotecario si aplica</Bullet>
            <Bullet>Servicio sin honorarios para ti</Bullet>
            <Bullet>Decisiones patrimoniales informadas</Bullet>
          </ul>
        </div>

        <p className="mt-8 border-t border-black pt-4 text-black">
          No compras promesas. <span className="font-medium">Tomas decisiones patrimoniales informadas.</span>
        </p>
      </Section>

      {/* 5. CÓMO FUNCIONA */}
      <Section id="proceso" eyebrow="5 · Cómo funciona" title="Proceso estructurado. Sin improvisación.">
        <ol className="mt-2 space-y-4">
          {[
            "Perfilamos tu objetivo de inversión",
            "Seleccionamos proyectos que cumplan criterios legales y financieros",
            "Te presentamos análisis comparativo",
            "Revisamos documentación y escenarios",
            "Acompañamos la formalización",
            "Después del cierre, damos seguimiento a la evolución del proyecto",
          ].map((step, i) => (
            <li key={i} className="border-t border-black pt-4">
              <div className="flex gap-4">
                <div className="w-10 text-sm text-black/60">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-black">{step}</div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-t border-black pt-4 text-black">
          Porque invertir no termina cuando firmas.
        </p>
      </Section>

      {/* 6. CASOS */}
      <Section eyebrow="6 · Casos / Resultados" title="No fue emoción. Fue revisión.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-t border-black pt-4">
            <p className="font-medium text-black">Inversionistas que llegaron diciendo:</p>
            <ul className="mt-4 space-y-3">
              <Bullet>“No quiero sorpresas legales.”</Bullet>
              <Bullet>“Quiero entender los números.”</Bullet>
              <Bullet>“No quiero depender solo del discurso del desarrollador.”</Bullet>
            </ul>
          </div>
          <div className="border-t border-black pt-4">
            <p>
              Hoy cuentan con inversiones estructuradas en ZMG y Houston con claridad desde el día
              uno.
            </p>
            <p className="mt-6 text-black font-medium">No fue emoción. Fue revisión.</p>
          </div>
        </div>
      </Section>

      {/* 7. PARA TI */}
      <Section eyebrow="7 · ¿Es para ti?" title="Invertir no es un impulso. Es patrimonio.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-t border-black pt-4">
            <p className="font-medium text-black">Esto es para ti si:</p>
            <ul className="mt-4 space-y-3">
              <Bullet>Buscas rentabilidad con respaldo</Bullet>
              <Bullet>Quieres entender estructura legal</Bullet>
              <Bullet>Prefieres análisis sobre hype</Bullet>
              <Bullet>Estás dispuesto a tomar decisiones con información</Bullet>
            </ul>
          </div>

          <div className="border-t border-black pt-4">
            <p className="font-medium text-black">No es para ti si:</p>
            <ul className="mt-4 space-y-3">
              <Bullet>Inviertes solo por urgencia</Bullet>
              <Bullet>Te enamoras del render</Bullet>
              <Bullet>No quieres revisar documentación</Bullet>
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. PRUEBA SOCIAL */}
      <Section eyebrow="8 · Prueba social" title="No trabajamos con proyectos improvisados.">
        <p className="max-w-3xl">
          Trabajamos con desarrolladores que cumplen al menos uno de estos criterios:
        </p>
        <ul className="mt-6 space-y-3 max-w-3xl">
          <Bullet>Licencia de construcción validada</Bullet>
          <Bullet>Fideicomiso y crédito puente</Bullet>
          <Bullet>Historial comprobable de desarrollos entregados</Bullet>
        </ul>
      </Section>

      {/* 9. CONFIANZA */}
      <Section eyebrow="9 · Generadores de confianza" title="Cero presión. Cero maquillaje. Cero ‘todo el mercado’.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul className="space-y-3">
            <Bullet>Servicio gratuito para el inversionista</Bullet>
            <Bullet>Comisión pagada por el desarrollador</Bullet>
            <Bullet>Proceso documentado</Bullet>
            <Bullet>Atención personalizada</Bullet>
          </ul>
          <div className="border-t border-black pt-4 text-black">
            <p>No presionamos.</p>
            <p>No maquillamos números.</p>
            <p>No mostramos todo el mercado.</p>
          </div>
        </div>
      </Section>

      {/* 10. CTA FINAL + FORM */}
      <section id="acceso" className="border-t border-black">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs tracking-widest uppercase text-black/70">10 · CTA final</p>

          <h2 className="mt-3 text-3xl md:text-4xl font-medium leading-tight">
            Si vas a invertir en preventa, hazlo con estructura.
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-black/85">
            Solicita acceso al portafolio filtrado y agenda una sesión estratégica.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3 border-t border-black pt-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="mt-2 w-full border border-black bg-white px-3 py-2 text-sm outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+52 33 0000 0000"
                    className="mt-2 w-full border border-black bg-white px-3 py-2 text-sm outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium" htmlFor="goal">
                    Objetivo de inversión
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="mt-2 w-full border border-black bg-white px-3 py-2 text-sm outline-none focus:ring-0"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option>Renta (flujo)</option>
                    <option>Plusvalía (salida)</option>
                    <option>Diversificación</option>
                    <option>Explorar opciones</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full border border-black bg-black text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
                >
                  Quiero analizar oportunidades con respaldo real
                </button>

                <p className="text-sm text-black/70">
                  Cupos limitados por capacidad de análisis. Mostramos solo proyectos que resisten revisión.
                </p>
              </form>
            </div>

            <div className="md:col-span-2 border-t border-black pt-6">
              <p className="text-sm text-black/80">
                Lo que recibes al solicitar acceso:
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <Bullet>Portafolio filtrado (no “catálogo” masivo)</Bullet>
                <Bullet>Comparativo por zona / escenario</Bullet>
                <Bullet>Checklist de estructura mínima</Bullet>
                <Bullet>Sesión estratégica para decidir con criterio</Bullet>
              </ul>

              <div className="mt-8 border-t border-black pt-4 text-sm text-black/70">
                Microcopy: Servicio sin costo para el inversionista.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black">
        <div
          className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-black/70">
          <p>© {new Date().getFullYear()} Another</p>
          <p>Curaduría legal y financiera para inversión en preventa.</p>
        </div>
      </footer>
    </>
  );
}
