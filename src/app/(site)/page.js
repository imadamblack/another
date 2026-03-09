'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OptInForm from '@/components/opt-in-form';

function FaqItem({question, answer}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-t border-[#1a1814]/10 cursor-pointer last:border-b last:border-[#1a1814]/10"
      onClick={() => setOpen(!open)}
    >
      <h3 className="flex justify-between items-center py-6 gap-6">
        <span
          className={`font-medium transition-opacity duration-300 ${
            open ? 'opacity-100' : 'hover:opacity-50'
          }`}
        >
          {question}
        </span>
        <span
          className={`ft-2 w-8 h-8 rounded-full border border-[#1a1814]/10 flex items-center justify-center text-base font-light text-[#8a8680] flex-shrink-0 transition-all duration-300 select-none ${
            open ? 'rotate-45 bg-[#1a1814] text-[#edeae3] border-[#1a1814]' : ''
          }`}
        >
          +
        </span>
      </h3>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="pb-7 max-w-[600px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

function CTA({button = 'Contáctanos', cta = 'Programa una cita para conocer las mejores oportunidades de inversión'}) {
  return (
    <div className="w-full">
      <Link href="#contact" className="button !w-full mb-4">{button} (→)</Link>
      <div className="text-center -ft-2">{cta}</div>
    </div>
  );
}

const problemQuestions = [
  {
    title: '(LICENCIA)',
    desc: '¿El desarrollo ya tiene licencia de construcción o apenas está en trámite?',
  },
  {
    title: '(FIDEICOMISO)',
    desc: '¿Existe un fideicomiso que proteja tu capital?',
  },
  {
    title: '(CRÉDITO PUENTE)',
    desc: '¿Hay crédito puente, o el proyecto depende de las preventas para poder construirse?',
  },
  {
    title: '(TRAYECTORIA)',
    desc: '¿El desarrollador ya ha entregado proyectos antes, o este es el primero?',
  },
];

const criterios = [
  {
    num: '01',
    title: 'Estructura Legal',
    body: 'Situación del terreno, licencias de construcción y fideicomisos. Si algo no está en orden, no listamos el proyecto.',
  },
  {
    num: '02',
    title: 'Respaldo Financiero',
    body: 'Crédito puente y estructura del capital. Un proyecto dependiente de preventas es un riesgo vs al que tiene financiamiento asegurado.',
  },
  {
    num: '03',
    title: 'Historial del Desarrollador',
    body: 'Trayectoria y proyectos previos del desarrollador. El historial importa más que cualquier render. Sin excepciones.',
  },
  {
    num: '04',
    title: 'Lógica del Producto',
    body: '¿Hay demanda real en esa zona? ¿El precio tiene sentido frente al potencial de renta o plusvalía?',
  },
];

const pasos = [
  {
    n: '01',
    title: 'Entendemos tu perfil',
    body: 'Hablamos primero. Presupuesto, horizonte de inversión y objetivo: plusvalía a largo plazo, renta mensual o diversificación de portafolio.',
  },
  {
    n: '02',
    title: 'Opciones ya filtradas',
    body: 'Solo proyectos que pasaron nuestra revisión. No decenas de opciones — únicamente las que tienen sentido para tu perfil.',
  },
  {
    n: '03',
    title: 'Analizamos juntos',
    body: 'Precio de entrada, proyección de plusvalía, potencial de renta y riesgos reales. Sin presión. Sin urgencia artificial.',
  },
  {
    n: '04',
    title: 'Te acompañamos',
    body: 'Desde la selección de unidad hasta la firma. Cada paso del proceso de compra.',
  },
];

const proyectos = [
  {
    zona: 'Americana · GDL',
    name: 'Scala Towers',
    price: '$2.9 mdp',
    timeframe: '24 meses',
    validators: ['Legal', 'Finanzas', 'Licencias', 'Trayectoria'],
    desc: 'Estructura legal y financiera verificada. Solicita los detalles y nuestra evaluación completa.',
    badge: 'Disponible',
    badgeClass: 'bg-[#1a1814] text-[#edeae3]',
    dim: false,
    img: 'scala',
  },
  {
    zona: 'Americana · GDL',
    name: 'Torre XII',
    price: '$3.2 mdp',
    timeframe: '30 meses',
    validators: ['Legal', 'Finanzas', 'Licencias', 'Trayectoria'],
    desc: 'Estructura legal y financiera verificada. Solicita los detalles y nuestra evaluación completa.',
    badge: 'Disponible',
    badgeClass: 'bg-[#1a1814] text-[#edeae3]',
    dim: false,
    img: 'torrexii',
  },
  {
    zona: 'The Woodlands · TX',
    name: 'The Meadows',
    price: '$300,000 usd',
    timeframe: '6 meses',
    validators: ['Legal', 'Finanzas', 'Licencias', 'Trayectoria'],
    stage: 'En construcción',
    desc: 'Constantemente revisamos nuevos desarrollos. Si no hay algo para tu perfil hoy, te lo decimos.',
    badge: 'Próximamente',
    badgeClass: 'border border-[#1a1814]/10 text-[#8a8680]',
    dim: false,
    img: 'meadows',
  },
];

const faqs = [
  {
    question: '¿El servicio tiene costo para mí?',
    answer:
      'No. Nuestro servicio es completamente gratuito para el inversionista. La comisión la recibimos directamente del desarrollador cuando se concreta una operación.',
  },
  {
    question: '¿Solo trabajan con preventas?',
    answer:
      'Principalmente sí. La preventa puede ofrecer condiciones muy atractivas cuando el proyecto está bien estructurado. Ese "cuando" es exactamente lo que nosotros revisamos.',
  },
  {
    question: '¿Trabajan con exclusividad?',
    answer:
      'No. Mantenemos independencia para analizar y recomendar proyectos de distintos desarrolladores. Nuestro criterio no está atado a ninguno en particular.',
  },
  {
    question: '¿Qué pasa si ningún proyecto se ajusta a mi perfil?',
    answer:
      'Te lo decimos directamente. Preferimos esperar a tener una oportunidad que tenga sentido para ti, antes que empujarte hacia algo que no la tiene.',
  },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function Home() {

  return (
    <>
      {/* ── HERO ── */}
      <div className="px-10">
        {/* Top editorial row */}
        <div className="grid md:grid-cols-3 items-end gap-0 py-12">
          <h1 className="col-span-2 ft-11 font-bold text-[#1a1814]">
            Antes de que inviertas en un depa, alguien debería revisar lo que no aparece en el render
          </h1>

          {/* Tag — hidden on mobile */}
          <p className="hidden md:block text-[10px] uppercase text-[#8a8680] px-8 self-end">
            Anti-agencia<br/>inmobiliaria
          </p>
        </div>

        {/* Hero image */}
        <div className="delay-1 relative w-full overflow-hidden" style={{height: 'clamp(340px, 50vw, 580px)'}}>
          <Image src="/images/home/hero.jpg" alt="Interior" fill style={{objectFit: 'cover'}} priority/>
          <a
            href="#proyectos"
            className="absolute bottom-9 right-14 w-[120px] h-[120px] rounded-full bg-[#edeae3] flex items-center justify-center text-center no-underline text-[#1a1814] text-[11px] font-semibold tracking-[0.1em] uppercase leading-snug shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition-all duration-300 hover:bg-[#1a1814] hover:text-[#edeae3] hover:scale-105"
          >
            VER<br/>SELECCIÓN
          </a>
        </div>
      </div>

      <section className="py-20">
        <div className="reading-container">
          <h2>
            La mayoría de los inversionistas toman decisiones con la mitad de la información
          </h2>
          <p>
            Llevas semanas investigando desarrollos en preventa.<br/>
            Has visto:<br/>
            — renders impecables<br/>
            — showrooms<br/>
            — proyecciones de plusvalía que suenan muy bien<br/><br/>
            El vendedor te dice que quedan pocas unidades.<br/>
            Sientes que si no decides hoy, pierdes la oportunidad.<br/><br/>
            Lo que nadie te está contando es esto:<br/>
            <span className="ft-2 font-bold">Un proyecto puede tener amenidades de lujo y una ubicación privilegiada… y aun así ser una mala inversión.</span><br/>
          </p>
          <CTA button="Da clic aquí"/>
        </div>
      </section>

      <section className="w-full py-20 border-t border-neutral-300">
        <div className="container">
          <div className="reading-container">
            <h2>Porque lo que determina si tu dinero está seguro no es el render, es la
              estructura real detrás del proyecto.</h2>
          </div>
          {problemQuestions.map((row) => (
            <div
              key={row.title}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 py-7 border-t border-neutral-300 last:border-b last:border-neutral-300 cursor-default"
            >
              <h3 className="ft-6 font-semibold">
                {row.title}
              </h3>
              <p>
                {row.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="reading-container">
          <p>Estas preguntas casi nunca aparecen en la presentación comercial.</p>
          <p>El trabajo es vender unidades, no analizar inversiones.</p>
          <p>El incentivo es cerrar la operación, no proteger tu capital.</p>
          <p>Eso es exactamente lo que nosotros hacemos diferente.</p>
        </div>
        <div className="reading-container">
          <CTA button="Da clic aquí"/>
        </div>
      </section>

      {/* ── STATS ── */}
      {/*<div className="px-10 py-20 grid grid-cols-1 md:grid-cols-[200px_1fr]">*/}
      {/*  <div className="text-[12px] font-normal text-[#8a8680] pr-10 pt-1.5 leading-relaxed mb-6 md:mb-0">*/}
      {/*    Solo vendemos lo que<br/>nosotros mismos<br/>invertiríamos*/}
      {/*  </div>*/}
      {/*  <div className="grid grid-cols-3 gap-0">*/}
      {/*    {[*/}
      {/*      {num: '+30', desc: 'proyectos analizados\nen preventa'},*/}
      {/*      {num: '<50%', desc: 'pasaron nuestro\nfiltro de criterios'},*/}
      {/*      {num: '$0', desc: 'costo para el\ninversionista'},*/}
      {/*    ].map((s) => (*/}
      {/*      <div key={s.num} className="pr-12">*/}
      {/*        <div className="text-stat font-normal text-[#1a1814] tracking-[-0.03em] leading-none mb-2.5">*/}
      {/*          {s.num}*/}
      {/*        </div>*/}
      {/*        <div className="text-[12px] font-light text-[#8a8680] leading-snug whitespace-pre-line">*/}
      {/*          {s.desc}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* ── CRITERIOS ── */}
      <section className="w-full py-20 border-t border-neutral-300">
        <div className="container">
          <div className="reading-container mb-12">
            <h2 className="font-bold">Revisamos, filtramos y omitimos desarrollos que no pasan la prueba</h2>
            <p>De todos los proyectos que hemos analizado, menos de la mitad cumplieron nuestros criterios. <br/>
              Los demás quedaron fuera, sin importar qué tan bien se veían en el showroom.</p>
            <p className="ft-2 font-semibold">¿Qué revisamos antes de mostrarte un proyecto?</p>
          </div>

          <div className="delay-1 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1814]/10">
            {criterios.map((c) => (
              <div
                key={c.num}
                className="bg-[#edeae3] hover:bg-[#e6e2da] transition-colors duration-300 p-9"
              >
                <p className="-ft-2 mb-5">{c.num}</p>
                <p className="ft-1 font-medium">{c.title}</p>
                <p className="text-neutral-600">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="reading-container">
            <CTA button="Da clic aquí"/>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section id="proceso" className="w-full pt-20 px-8 border-t border-neutral-300">
        <div className="reading-container mb-12">
          <h2 className="font-bold">Un proceso simple<br/>para inversionistas serios</h2>
          <p>Sin presentaciones genéricas.<br/>Sin urgencia artificial.<br/>Sin rollo.</p>
        </div>

        <div className="container">
          {pasos.map((p) => (
            <div
              key={p.n}
              className="group grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr_1fr] items-start gap-0 py-8 border-t border-neutral-300 last:border-b last:border-neutral-300"
            >
              <div className="text-[11px] font-normal text-[#8a8680] tracking-[0.1em] pt-0.5">{p.n}</div>
              <h3
                className="text-paso font-medium tracking-[-0.01em] leading-none text-[#1a1814] group-hover:opacity-50">
                {p.title}
              </h3>
              <p
                className="text-neutral-500 col-start-2 md:col-start-3 mt-2 md:mt-0">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <div className="reading-container">
          <CTA button="Da clic aquí"/>
        </div>
      </section>

      <section className="w-full bg-neutral-900 flex items-center mt-20 py-40 px-8">
        <div className="reading-container">
          <h3
            className="ft-8 font-semibold text-neutral-300">
            Nuestro incentivo está alineado con el tuyo, no con el del desarrollador
          </h3>
          <p className="text-neutral-100 leading-[1.8]">
            Nuestro servicio no tiene costo para el inversionista.<br/>
            La comisión proviene directamente de los desarrolladores cuando se concreta la operación.<br/>
          </p>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="w-full py-20 px-8 border-t border-neutral-300">

        <div className="reading-container mb-12">
          <h2 className="font-bold">Estas son algunos de los proyectos que hoy cumplen nuestros criterios</h2>
          <p>Desarrollos en la Zona Metropolitana de Guadalajara y otros mercados estratégicos.</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((p) => (
            <div
              key={p.zona}
              className="group grid grid-cols-1 items-center border-y border-neutral-300 cursor-default"
              style={p.dim ? {opacity: 0.35, pointerEvents: 'none'} : {}}
            >
              <div className="relative w-full aspect-video">
                <Image src={`/images/home/${p.img}.jpg`} fill alt={p.name} objectFit="cover"/>
              </div>

              <div className="flex flex-col pt-8 pb-16">
                <div className="-ft-3 uppercase text-neutral-600">
                  {p.zona}
                </div>
                <h3 className="ft-6 !my-0 font-semibold group-hover:opacity-50">
                  {p.name}
                </h3>
                <p className="font-semibold group-hover:opacity-50">
                  → Desde {p.price}
                </p>
                <p className="font-semibold group-hover:opacity-50">
                  → Entrega en {p.timeframe}
                </p>
                <div className="flex gap-4 my-8">
                  {p.validators.map(v => (
                    // eslint-disable-next-line react/jsx-key
                    <p className="py-1 px-2 border-2 -ft-3 font-medium tracking-wide">{v} (OK)</p>
                  ))}
                </div>
                <CTA button={`Me interesa ${p.name}`} cta={`Programa una cita para conocer más sobre ${p.name}`}/>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-20 border-y border-neutral-400 bg-neutral-800">
        <div className="reading-container">
          <h2 className="font-bold text-neutral-50">Nuestros aliados comerciales</h2>
        </div>
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-40 py-20">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image src="/images/home/logos/lopx.png" layout="fill" alt="Lopx" objectFit="contain"/>
          </div>
          <div className="relative w-full aspect-video overflow-hidden">
            <Image src="/images/home/logos/dala.avif" layout="fill" alt="Dala" objectFit="contain"/>
          </div>
          <div className="relative w-full aspect-video overflow-hidden">
            <Image src="/images/home/logos/dezka.svg" layout="fill" alt="Dezka" objectFit="contain"/>
          </div>
          <div className="relative w-full aspect-video overflow-hidden">
            <Image src="/images/home/logos/ccu.webp" layout="fill" alt="CompraCasasUSA" objectFit="contain"/>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="w-full py-20 border-y border-neutral-400">
        <div className="reading-container">
          <h2 className="ft-6 font-bold">Preguntas que nos hacen normalmente</h2>
        </div>

        <div className="container">
          {faqs.map((f) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer}/>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="contact" className="w-full py-20">
        <div className="reading-container">
          <h2 className="font-bold">
            Ya llegaste hasta acá, programa una cita para revisar opciones de inversión que sí valen la pena
          </h2>
          <p className="">
            En esta asesoría te mostramos:<br/>
            — desarrollos que ya pasaron nuestro filtro legal y financiero<br/>
            — análisis de inversión por proyecto<br/>
            — oportunidades activas en el mercado<br/>
          </p>
          <OptInForm/>

        </div>
      </section>
    </>
  );
}
