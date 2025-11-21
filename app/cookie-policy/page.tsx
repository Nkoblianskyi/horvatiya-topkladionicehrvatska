export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-magazine-white pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <header className="text-center mb-12 pb-8 border-b-2 border-magazine-navy">
            <h1 className="text-4xl md:text-5xl font-bold text-magazine-black mb-4">Politika Kolačića</h1>
            <p className="text-magazine-grey">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-sm text-magazine-grey mt-2">topkladionicehrvatska.com</p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">Što su Kolačići</h2>
              <p className="text-magazine-grey leading-relaxed">
                Kolačići (cookies) su male tekstualne datoteke koje web stranice pohranjuju na vaše računalo ili mobilni
                uređaj tijekom posjete. Omogućavaju stranicama pamćenje vaših radnji i postavki kroz određeno vrijeme,
                čime poboljšavaju vaše korisničko iskustvo.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">Kako Koristimo Kolačiće</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                topkladionicehrvatska.com koristi kolačiće za sljedeće svrhe:
              </p>
              <ul className="list-disc list-inside space-y-2 text-magazine-grey ml-4">
                <li>Omogućavanje osnovnih funkcionalnosti web stranice</li>
                <li>Pamćenje vaših postavki i preferencija između posjeta</li>
                <li>Analiza načina korištenja stranice za poboljšanje sadržaja</li>
                <li>Prikupljanje anonimnih statističkih podataka o ponašanju korisnika</li>
                <li>Personalizacija sadržaja prema vašim interesima i potrebama</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-6">Vrste Kolačića koje Koristimo</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-magazine-navy pl-6 bg-magazine-light-bg p-4">
                  <h3 className="text-2xl font-bold mb-3 text-magazine-black">1. Nužni Kolačići</h3>
                  <p className="text-magazine-grey leading-relaxed">
                    Ovi kolačići su neophodni za ispravno funkcioniranje naše web stranice. Omogućavaju osnovne funkcije
                    poput navigacije i pristupa sigurnim područjima. Ovi kolačići ne mogu se isključiti jer bi stranica
                    prestala raditi ispravno bez njih.
                  </p>
                </div>

                <div className="border-l-4 border-magazine-orange pl-6 bg-magazine-light-bg p-4">
                  <h3 className="text-2xl font-bold mb-3 text-magazine-black">2. Analitički Kolačići</h3>
                  <p className="text-magazine-grey leading-relaxed">
                    Omogućavaju nam brojanje posjeta i praćenje izvora prometa kako bismo mogli mjeriti i poboljšavati
                    performanse naše stranice. Svi podaci prikupljeni ovim kolačićima su agregirani i potpuno anonimni.
                  </p>
                </div>

                <div className="border-l-4 border-magazine-teal pl-6 bg-magazine-light-bg p-4">
                  <h3 className="text-2xl font-bold mb-3 text-magazine-black">3. Funkcionalni Kolačići</h3>
                  <p className="text-magazine-grey leading-relaxed">
                    Omogućavaju nam pružanje poboljšane funkcionalnosti i personalizacije. Mogu biti postavljeni od
                    strane nas ili vanjskih pružatelja usluga čije smo usluge dodali na naše stranice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-magazine-black mb-4">Upravljanje Kolačićima</h2>
              <p className="text-magazine-grey leading-relaxed mb-4">
                Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke vašeg preglednika
                kako biste odbili kolačiće ako želite. Imajte na umu da onemogućavanje kolačića može utjecati na
                funkcionalnost naše stranice i ograničiti vaše korisničko iskustvo.
              </p>
              <p className="text-magazine-grey leading-relaxed">
                Za detaljne upute o upravljanju kolačićima u različitim preglednicima, posjetite stranice pomoći vašeg
                preglednika.
              </p>
            </section>

            <section className="bg-magazine-light-bg p-8 border-l-4 border-magazine-navy">
              <h2 className="text-3xl font-bold text-magazine-black mb-4">Kontakt Informacije</h2>
              <p className="text-magazine-grey leading-relaxed mb-3">
                Za sva pitanja vezana uz našu politiku kolačića, možete nas kontaktirati na:
              </p>
              <p className="text-magazine-black font-semibold">
                Email:{" "}
                <p
                  className="text-magazine-navy hover:text-magazine-orange underline"
                >
                  info@topkladionicehrvatska.com
                </p>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
