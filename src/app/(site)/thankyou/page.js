'use client';

import { info } from '/info.js';
import Image from 'next/image';
import logo from '../../../../public/logo-full.svg';
import { InlineWidget } from 'react-calendly';
import { useMemo } from 'react';
import getTrackingData from '@/services/tracking-cookies';

export default function Thankyou() {
  const { lead} = useMemo(() => {
    return getTrackingData();
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="fixed flex items-center h-screen w-full z-[-1]"/>
      <section className="relative justify-center items-center z-[1] top-[5rem] pt-[4rem] pb-[10rem]">
        <div className="flex flex-col items-center">
          <div className="hidden md:flex items-center w-full h-32 mb-20 relative">
            <Image
              src={logo}
              fill={true}
              style={{objectFit: 'contain'}}
              alt="Notoriovs Studio"
            />
          </div>
          <h2 className="ft-6 text-center">
            ¡Vientos! ya estamos del otro lado.
          </h2>
          <p className="mb-12 text-center">Selecciona una día y hora para platicar</p>
        </div>
      </section>

      <div className="mb-20">
        <InlineWidget
          url={`${info.schedulerWebhook}?hide_gdpr_banner=1&name=${lead.fullName}&email=${lead.email}`}
          styles={{height: '1000px'}}
        />
      </div>

      <div className="container my-20">
        <p className="ft-3 text-center">Si no se abrió nuestro calendario para agendar tu sesión gratuita
          de exploración inmobiliaria
        </p>
        <a
          className="ft-2 button mx-auto mt-12"
          href={info.schedulerWebhook}
          target="_blank"
        >
          <nobr>DA CLICK AQUÍ</nobr>
        </a>
      </div>
    </div>
  );
}