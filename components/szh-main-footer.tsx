import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function SzhMainFooter() {
  return (
    <footer className="bg-white border-t-2 border-magazine-navy relative z-10">
      <div className="container mx-auto px-4 max-w-[1400px] py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-magazine-grey leading-relaxed text-sm mb-4">
              Vaš pouzdani izvor za neovisne recenzije i analize najboljih kladionica u Hrvatskoj.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-magazine-black font-bold mb-4 text-xs uppercase tracking-[0.2em]">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-magazine-grey hover:text-magazine-navy transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-magazine-navy"></span>
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-magazine-grey hover:text-magazine-navy transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-magazine-navy"></span>O Nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-magazine-black font-bold mb-4 text-xs uppercase tracking-[0.2em]">
              Pravne Informacije
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-magazine-grey hover:text-magazine-navy transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-magazine-navy"></span>
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-magazine-grey hover:text-magazine-navy transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-magazine-navy"></span>
                  Politika Kolačića
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Section */}
        <div className="border-t-2 border-magazine-border pt-8 mb-8">
          <div className="bg-magazine-light-bg border-2 border-magazine-navy p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-12 h-12 bg-magazine-navy flex items-center justify-center">
                  <span className="text-white text-xl font-bold">18+</span>
                </div>
                <div>
                  <h4 className="text-magazine-black font-bold text-sm uppercase">Odgovorno Klađenje</h4>
                  <p className="text-xs text-magazine-grey">Igrajte sigurno</p>
                </div>
              </div>
              <p className="text-sm text-magazine-grey leading-relaxed">
                Klađenje može uzrokovati ovisnost. Igrajte samo ako imate 18+ godina. Za pomoć posjetite{" "}
                <Link
                  href="https://www.hupis.hr/klok"
                  className="text-magazine-navy hover:text-magazine-orange font-semibold"
                >
                  HUPIS
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t-2 border-magazine-border pt-8 mb-8">
          <div className="bg-white border-2 border-magazine-navy p-6 md:p-8">
            <h4 className="text-center text-xs uppercase tracking-[0.2em] text-magazine-black mb-6 font-bold">
              Partneri za Odgovorno Klađenje
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <div className="relative w-[100px] h-[40px] bg-white border-2 border-magazine-border p-2">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <div className="relative w-[100px] h-[40px] bg-white border-2 border-magazine-border p-2">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <div className="relative w-[100px] h-[40px] bg-white border-2 border-magazine-border p-2">
                  <Image src="/hupis.png" alt="HUPIS" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-all hover:scale-105"
              >
                <div className="relative w-[100px] h-[40px] bg-white border-2 border-magazine-border p-2">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <div className="relative w-[100px] h-[40px] bg-white border-2 border-magazine-border p-2">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-magazine-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-magazine-grey text-center md:text-left">
              © {new Date().getFullYear()} topkladionicehrvatska.com. Sva prava pridržana.
            </p>
            <p className="text-xs text-magazine-grey text-center md:text-right">
              Neovisne recenzije kladionica u Hrvatskoj
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
