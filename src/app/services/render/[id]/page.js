import { headers } from 'next/headers';
import Image from 'next/image';
import {formatCurr} from '@/utils/formatters';

const getData = (id) => {
  const headersList = headers();
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const host = headersList.get('host');
  const baseUrl = `${protocol}://${host}`;

  return fetch(`${baseUrl}/api/render?id=${id}`, {method: 'POST'})
    .then(response => response.json())
    .then(res => res)
    .catch(err => console.error('ERROR', err));
};

export async function generateMetadata({params}) {
  const {id} = params;
  const data = await getData(id);

  return {
    title: `NotoriovsStudio-Render-${data.brand.replace(' ', '')}`,
    description: data.concept,
    openGraph: {
      title: `NotoriovsStudio-Render-${data.brand.replace(' ', '')}`,
      description: data.concept,
      url: `https://marketing.notoriovs.com/images/render?id=${id}`,
      type: 'website',
      images: [
        {
          url: 'https://marketing.notoriovs.com/images/render-cover.png',
          width: 1200,
          height: 630,
          alt: `NotoriovsStudio-Render-${data.brand.replace(' ', '')}`,
        },
      ],
    },
  };
}

export default async function Render({params}) {
  const {id} = params;
  const data = await getData(id);
  const [a, b, c] = data.scenarios;

  console.log(data);

  return (
    <div className="flex flex-col items-center gap-8 print:gap-0 p-8 print:p-0 bg-brand-1">
      <section className="slide bg-[url('/images/backgrounds/bkg-0.jpg')]">
        <div className="bg-blur"></div>
        <div className="grain"></div>

        <div className="relative h-full px-16 py-14 flex flex-col">
          <div className="relative flex mx-auto items-center justify-center w-[20ch] lg:w-[25ch] h-[5rem]">
            <Image src="/images/NT-Logotype-H.png" layout="fill" alt="NOTORIOVS" className="invert object-contain"/>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <p className="ft-2 sans text-white mb-3">Render del Sistema de Prospección</p>
            <h1 className="ft-10 text-white">
              {data.brand}
            </h1>
            <p className="mt-10 max-w-3xl ft-2 text-white/70">
              Proyección financiera del sistema de prospección digital con escenarios de crecimiento y rentabilidad
            </p>
          </div>

          <div className="text-center -ft-2 text-white/40">
            Notoriovs Studio
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">
        <div className="bg-blur"></div>
        <div className="grain"></div>

        <div className="relative h-full px-16 py-14 flex flex-col">

          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="ft-8 text-center text-white max-w-[24ch]">
              Sin misterios...<br/>¿esta estrategia de marketing si va a servir o solo te va a hacer gastar?
            </h2>

            <p className="mt-8 text-center text-white/70 max-w-[50ch]">
              Vamos a calcular el punto exacto en donde tu inversión en marketing deja de ser un costo y comienzas a
              obtener un retorno pero sin suposiciones de «yo creo» o «yo siento»
            </p>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">

        <div className="-ft-2 text-white/60">SUPUESTOS BASE</div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">

          <div className="lg:col-span-5 relative h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="ft-8 text-white max-w-[24ch]">
                Supuestos Base
              </h2>

              <p className="mt-8 text-white/70 max-w-[50ch]">
                El ADN financiero y comercial, los supuestos base que nos van a decir si esta operación tiene pies y
                cabeza.
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <p className="ft-2 text-white/70">Ticket promedio</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(a.avt)}</p>

              <p className="ft-2 text-white/70">Margen bruto (%)</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{data.margin * 100} %</p>

              <p className="ft-2 text-white/70">Margen bruto ($)</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(data.marginCurr)}</p>

              <p className="ft-2 text-white/70">CAC* Objetivo (%)</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{data.cac * 100} % del ticket</p>

              <p className="ft-2 text-white/70">CAC* Objetivo ($)</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(data.cacCurr)}</p>

              <p className="ft-2 text-white/70">Recompras en un año</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{data.yearlyTransactions}</p>

              <p className="ft-2 text-white/70">Tasa de cierre de ventas</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{data.closeRate * 100} %</p>

              <p className="ft-2 text-white/70">Honorarios agencia</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(data.plan)}</p>
            </div>
            <div className="mt-auto pt-20 -ft-2 text-white/50 leading-relaxed">
              *CAC (Costo de Adquisición de Cliente): indicador clave de lo que estamos dispuestos a pagar por un
              cliente nuevo.
            </div>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">

        <div className="-ft-2 text-white/60">PUNTO DE EQUILIBRIO</div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">

          <div className="lg:col-span-5 relative h-full flex flex-col">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="ft-8 text-white max-w-[24ch]">
                Cómo salir tablas...
              </h2>

              <p className="mt-8 text-white/70 max-w-[50ch]">
                El punto exacto qué necesita el sistema para alcanzar el punto de equilibrio y ser autosuficiente
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <p className="ft-2 text-white/70">Leads necesarios</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{a.newLeads}</p>

              <p className="ft-2 text-white/70">Costo por Lead Objetivo</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(data.cpl)}</p>

              <p className="ft-2 text-white/70">Ventas necesarias</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{a.transactions}</p>

              <p className="ft-2 text-white/70">Ingresos necesarios</p>
              <p className="ft-2 text-right text-white/80 font-semibold">{formatCurr.format(a.sales)}</p>
            </div>
            <div className="mt-auto pt-20 -ft-2 text-white/50 leading-relaxed">
              *CAC (Costo de Adquisición de Cliente): indicador clave de lo que estamos dispuestos a pagar por un
              cliente nuevo.
            </div>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">

        <div className="relative h-full flex flex-col">
          <div className="-ft-2 text-white/60">PUNTO DE EQUILIBRIO</div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="ft-8 text-white max-w-[24ch]">
              Ojo aqui... con menos de <nobr className="text-brand-1">{Math.ceil(a.transactions)} ventas</nobr>,
              el marketing no es una inversión, es un gasto
            </h2>

            <p className="mt-10 text-white/75 max-w-[100ch]">
              A partir de la venta <span className="font-bold text-white">#{Math.ceil(a.transactions) + 1}</span>,
              empezamos a ganarle.
              <br/>
              Importante como mínimo esfuerzo: <span className="font-bold text-white">venderle a {data.closeRate * 100} de cada 100</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">
        <div className="bg-blur"></div>
        <div className="grain"></div>

        <div className="relative h-full flex flex-col">
          <div className="-ft-2 text-white/60">ESCENARIOS DE ESCALAMIENTO</div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="ft-8 text-white max-w-[24ch]">
              De «gastar» en marketing a poder predecir el crecimiento
            </h2>

            <p className="mt-10 text-white/75 max-w-[50ch]">
              Simulación de escenarios con el mismo sistema de marketing, variando inversión y estrategia comercial.
            </p>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">
        <div className="relative h-full flex flex-col">
          <div className="-ft-2 text-white/60">ESCENARIOS DE ESCALAMIENTO</div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-5 flex-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col">
              <p className="ft-3 sans text-white/80">A: Punto de Equilibrio</p>
              <div className="-ft-2 text-white/50 mt-1">El objetivo aquí es no perder dinero</div>

              <hr className="my-12 border border-white/20"/>

              <div className="space-y-3 text-sm">
                <p className="flex justify-between">
                  <span className="text-white/70">Leads en Base de Datos</span>
                  <span className="text-white font-semibold">{a.dbLeads}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Leads Mensuales Nuevos</span>
                  <span className="text-white font-semibold">{a.newLeads}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white">Nuevos Clientes</span>
                  <span className="text-white font-semibold">{a.transactions}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Ticket promedio</span>
                  <span className="text-white font-semibold">{formatCurr.format(a.avt)}</span>
                </p>
                {/*<p className="flex justify-between">*/}
                {/*  <span className="text-white/70">Transacciones en un año</span>*/}
                {/*  <span className="text-white font-semibold">{a.yearlyTransactions}</span>*/}
                {/*</p>*/}
                <p className="flex justify-between">
                  <span className="text-white/70">Lifetime Value*</span>
                  <span className="text-white font-semibold">{formatCurr.format(a.avt)}</span>
                </p>
              </div>

              <hr className="my-12 border border-white/20"/>

              <p className="flex justify-between">
                <span className="text-white/70">Pautas necesarias</span>
                <span className="text-white font-semibold">{formatCurr.format(a.adSpend)}</span>
              </p>
              <p className="flex justify-between mb-12">
                <span className="text-white/70">Honorarios Agencia</span>
                <span className="text-white font-semibold">{formatCurr.format(a.plan)}</span>
              </p>

              <div>
                <p className="-ft-2 text-white/50">Ventas</p>
                <p className="ft-2 text-white font-extrabold mt-1">{formatCurr.format(a.sales)}</p>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  El marketing deja de ser un gasto y comienza a convertirse en infraestructura de ventas.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col">
              <p className="ft-3 sans text-white/80">B: Upselling</p>
              <div className="-ft-2 text-white/50 mt-1">Ganar más con los mismos leads</div>

              <hr className="my-12 border border-white/20"/>

              <div className="space-y-3 text-sm">
                <p className="flex justify-between">
                  <span className="text-white/70">Leads en Base de Datos</span>
                  <span className="text-white font-semibold">{b.dbLeads}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Leads Mensuales Nuevos</span>
                  <span className="text-white font-semibold">{b.newLeads}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white">Nuevos Clientes</span>
                  <span className="text-white font-semibold">{b.transactions}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Ticket promedio</span>
                  <span className="text-white font-semibold">{formatCurr.format(b.avt)}</span>
                </p>
                {/*<p className="flex justify-between">*/}
                {/*  <span className="text-white/70">Transacciones en un año</span>*/}
                {/*  <span className="text-white font-semibold">{b.yearlyTransactions}</span>*/}
                {/*</p>*/}
                <p className="flex justify-between">
                  <span className="text-white/70">Lifetime Value*</span>
                  <span className="text-white font-semibold">{formatCurr.format(b.ltv)}</span>
                </p>
              </div>

              <hr className="my-12 border border-white/20"/>

              <p className="flex justify-between">
                <span className="text-white/70">Pautas necesarias</span>
                <span className="text-white font-semibold">{formatCurr.format(b.adSpend)}</span>
              </p>
              <p className="flex justify-between mb-12">
                <span className="text-white/70">Honorarios Agencia</span>
                <span className="text-white font-semibold">{formatCurr.format(b.plan)}</span>
              </p>

              <div>
                <p className="-ft-2 text-white/50">Ventas</p>
                <p className="ft-2 text-white font-extrabold mt-1">{formatCurr.format(b.sales)}</p>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Incrementar el monto que cada cliente nos deja convierte el marketing en flujo de efectivo.
                </p>
              </div>

              <div className="mt-auto"></div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col">
              <p className="ft-3 sans text-white/80">C: Bola de nieve 12 meses</p>
              <div className="-ft-2 text-white/50 mt-1">Crecimiento agresivo controlado</div>

              <hr className="my-12 border border-white/20"/>

              <div className="space-y-3 text-sm">
                <p className="flex justify-between">
                  <span className="text-white/70">Leads en Base de Datos</span>
                  <span className="text-white font-semibold">{c.dbLeads} **</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Leads Mensuales Nuevos</span>
                  <span className="text-white font-semibold">{c.newLeads}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white">Nuevos Clientes</span>
                  <span className="text-white font-semibold">{c.transactions}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white/70">Ticket promedio</span>
                  <span className="text-white font-semibold">{formatCurr.format(c.avt)}</span>
                </p>
                {/*<p className="flex justify-between">*/}
                {/*  <span className="text-white/70">Transacciones en un año</span>*/}
                {/*  <span className="text-white font-semibold">{c.yearlyTransactions}</span>*/}
                {/*</p>*/}
                <p className="flex justify-between">
                  <span className="text-white/70">Lifetime Value*</span>
                  <span className="text-white font-semibold">{formatCurr.format(c.ltv)}</span>
                </p>
              </div>

              <hr className="my-12 border border-white/20"/>

              <p className="flex justify-between">
                <span className="text-white/70">Pautas necesarias</span>
                <span className="text-white font-semibold">{formatCurr.format(c.adSpend)}</span>
              </p>
              <p className="flex justify-between mb-12">
                <span className="text-white/70">Honorarios Agencia</span>
                <span className="text-white font-semibold">{formatCurr.format(c.plan)}</span>
              </p>

              <div>
                <p className="-ft-2 text-white/50">Ventas</p>
                <p className="ft-2 text-white font-extrabold mt-1">{formatCurr.format(c.sales)}</p>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Aprovechar la base de datos con retargeting para incrementar exponencialmente la utilidad.
                </p>
              </div>

              <div className="mt-auto"></div>
            </div>
          </div>
          <p className="-ft-2 text-white/60 mt-8">
            * Lifetime Value: El valor monetario que nos representa un cliente en 1 año.<br/>
            ** La cantidad de Leads en Base de Datos se calcula como un 30% de los leads conseguidos en 1 año.
          </p>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">
        <div className="bg-blur"></div>
        <div className="grain"></div>

        <div className="relative h-full px-16 py-14 flex flex-col">
          <div className="-ft-2 text-white/60 font-semibold">ESCENARIOS DE ESCALAMIENTO</div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="ft-8 text-white max-w-[24ch]">
              Esto no es una campaña, <br/>es una fábrica de ganancias
            </h2>

            <p className="mt-10 text-white/75 max-w-[100ch]">
              La pregunta no es si invertir en marketing. <br/>
              Es si quieres el escenario 1, el 2 o el 3.
            </p>

            <p className="mt-10 text-white/75 max-w-[100ch]">
              El riesgo solo está al inicio. La riqueza está después del punto de equilibrio.
            </p>
          </div>
        </div>
      </section>

      <section className="slide rounded-2xl shadow-2xl shadow-black/60 bg-black">
        <div className="bg-blur"></div>
        <div className="grain"></div>

        <div className="relative h-full px-16 py-14 flex flex-col">
          <div className="flex-1 flex items-center justify-center text-center">
            <h2 className="ft-8 text-white max-w-[24ch]">¿Cuándo comenzamos?</h2>
          </div>
          <div className="relative flex mx-auto items-center justify-center w-[20ch] lg:w-[25ch] h-[5rem]">
            <Image src="/images/NT-Logotype-H.png" layout="fill" alt="NOTORIOVS" className="invert object-contain"/>
          </div>

          <p className="-ft-3 text-center mt-10 mx-auto text-white/75 max-w-[100ch]">
            El contenido intelectual de esta presentación así como la marca de Notoriovs y sus derivados son
            propiedad de Notoriovs Studio y el uso o réplica en cualquier medio queda prohibido
            <span className="mt-2"> © {new Date().getFullYear()}</span>
          </p>
        </div>
      </section>

    </div>
  );

}