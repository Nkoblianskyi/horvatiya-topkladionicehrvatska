"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function SzhFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "Kako odabrati najbolju kladionicu u Hrvatskoj?",
      answer:
        "Pri odabiru kladionice obratite pozornost na nekoliko ključnih faktora: posjedovanje važeće licence, konkurentnost kvota, širinu ponude sportova i tržišta, kvalitetu bonusa, brzinu isplata i kvalitetu korisničke podrške. Preporučujemo usporedbu nekoliko platformi prije donošenja konačne odluke. Naše detaljne recenzije pomažu vam u tom procesu.",
    },
    {
      question: "Je li online klađenje legalno u Hrvatskoj?",
      answer:
        "Da, online klađenje je legalno u Hrvatskoj za osobe starije od 18 godina. Kladionice moraju posjedovati važeću licencu izdanu od strane nadležnog regulatornog tijela. Uvijek provjerite da platforma na kojoj se kladite ima odgovarajuću licencu i djeluje u skladu s hrvatskim zakonima.",
    },
    {
      question: "Što je bonus dobrodošlice i kako ga iskoristiti?",
      answer:
        "Bonus dobrodošlice je promocijska ponuda za nove korisnike koja obično uključuje dodatni iznos za klađenje ili besplatne uloge. Za aktivaciju bonusa potrebno je registrirati račun, izvršiti prvi depozit i ispuniti uvjete proigravanja. Pažljivo pročitajte uvjete bonusa prije aktivacije - obratite pozornost na minimalne kvote, rok valjanosti i zahtjeve za proigravanje.",
    },
    {
      question: "Koliko brzo mogu podići dobitak?",
      answer:
        "Brzina isplate ovisi o odabranoj metodi plaćanja i politici kladionice. E-novčanici (Skrill, Neteller) obično omogućavaju najbrže isplate - od nekoliko sati do 24 sata. Bankovni prijenosi mogu trajati 2-5 radnih dana. Prve isplate mogu biti sporije zbog potrebe za verifikacijom identiteta. Vrhunske kladionice obrađuju zahtjeve za isplatu u roku od 24-48 sati.",
    },
    {
      question: "Trebam li platiti porez na dobitak od klađenja?",
      answer:
        "U Hrvatskoj, dobitci od sportskog klađenja podliježu porezu na dohodak. Kladionice automatski obračunavaju i uplaćuju porez na dobitke pri isplati. Stopa poreza ovisi o visini dobitka. Za detaljne informacije o poreskim obvezama preporučujemo konzultaciju s poreznim savjetnikom ili nadležnim poreznim uredom.",
    },
    {
      question: "Što je live klađenje i kako funkcionira?",
      answer:
        "Live klađenje (klađenje uživo) omogućava postavljanje uloga tijekom trajanja sportskog događaja. Kvote se dinamički mijenjaju ovisno o tijeku utakmice. Live klađenje zahtijeva brzo donošenje odluka i dobro poznavanje sporta. Mnoge kladionice nude live streaming kako biste mogli pratiti događaj u stvarnom vremenu dok se kladite.",
    },
    {
      question: "Kako funkcionira verifikacija računa?",
      answer:
        "Verifikacija računa je zakonska obveza kladionica za sprječavanje pranja novca i zaštitu maloljetnika. Proces uključuje dostavu dokumenata koji potvrđuju vaš identitet (osobna iskaznica ili putovnica) i adresu stanovanja (račun za komunalije ili bankovni izvod). Verifikacija se obično provodi prije prve isplate. Proces traje 24-72 sata, ovisno o kladionici.",
    },
    {
      question: "Mogu li se kladiti putem mobilnog uređaja?",
      answer:
        "Da, sve moderne kladionice nude mobilne verzije svojih platformi - bilo kroz prilagođenu web stranicu ili dedicirane mobilne aplikacije za iOS i Android. Mobilne platforme pružaju potpunu funkcionalnost, uključujući live klađenje, depozite, isplate i pristup korisničkoj podršci. Kvalitetne aplikacije omogućavaju brzo i jednostavno klađenje u pokretu.",
    },
    {
      question: "Što je cash out opcija?",
      answer:
        "Cash out omogućava zatvaranje uloga prije završetka događaja i osiguravanje profita ili minimiziranje gubitka. Iznos cash out-a ovisi o trenutnom stanju utakmice i originalnim kvotama. Ova opcija pruža veću kontrolu nad vašim ulogama, ali ponuđeni iznos obično je manji od potencijalnog punog dobitka. Ne sve kladionice nude cash out za sve vrste uloga.",
    },
    {
      question: "Kako postaviti limite za odgovorno klađenje?",
      answer:
        "Sve licencirane kladionice nude alate za postavljanje limita: limit depozita (dnevni, tjedno, mjesečni), limit gubitka, limit vremena provedenog na platformi i limit pojedinačnih uloga. Limite možete postaviti u postavkama računa. Smanjenje limita stupa na snagu odmah, dok povećanje obično ima razdoblje čekanja od 24-72 sata. Preporučujemo postavljanje limita prije početka klađenja.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight uppercase tracking-tight">
            Često postavljana pitanja
          </h2>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Odgovori na najčešća pitanja o online klađenju u Hrvatskoj. Ako ne pronađete odgovor na svoje pitanje,
            slobodno nas kontaktirajte.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <article key={index} className="border-2 border-gray-200 bg-white hover:border-red-600 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 uppercase tracking-tight pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 border-t-2 border-gray-100">
                  <p className="text-base text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 border-l-4 border-red-600 p-8">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Imate dodatna pitanja?
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Ako niste pronašli odgovor na svoje pitanje, slobodno nas kontaktirajte putem email-a. Naš tim stručnjaka
            odgovorit će vam u najkraćem mogućem roku.
          </p>
          <p className="text-base text-gray-900 font-bold">Email: info@stranicezakladenjehr.com</p>
        </div>
      </div>
    </section>
  )
}
