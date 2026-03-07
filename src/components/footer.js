import { info } from '../../info';
import notoriovs from '/public/notoriovs.png'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative mb-0  border-t">
      <div className="bg-black py-6">
        <div className="container flex flex-col md:flex-row items-start justify-start gap-8 text-white py-8 sans">
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-neutral-50">Todos los derechos reservados.</p>
            <div className="flex gap-2 mr-3">
              <p className="text-neutral-50">{info.companyName}</p>
              <p className="relative material-icons text-neutral-50 top-2 !my-0">close</p>
              <a href="https://marketing.notoriovs.com"
                 target="_blank"
                 className="relative w-[13rem] top-0.5">
                <Image src={notoriovs} className="invert" alt="Notoriovs Studio"/>
              </a>
            </div>
            <p className="text-neutral-50">©{" "}{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}