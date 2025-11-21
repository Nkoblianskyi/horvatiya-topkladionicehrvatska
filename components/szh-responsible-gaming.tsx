import { Shield, Lock, AlertCircle, Heart } from "lucide-react"

export function SzhResponsibleGaming() {
  return (
    <section className="py-20 md:py-28 bg-magazine-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-magazine-navy text-white text-sm font-bold uppercase tracking-wider mb-6">
            Odgovorno Klađenje
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-magazine-black leading-tight tracking-tight">
            Igrajte Sigurno i Odgovorno
          </h2>
          <div className="w-24 h-1 bg-magazine-navy mb-8"></div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-magazine-black leading-relaxed mb-6">
              Sportsko klađenje treba biti zabavna aktivnost, ne izvor problema. Odgovorno klađenje znači postavljanje
              jasnih granica, razumijevanje rizika i prepoznavanje kada je vrijeme za stanku.
            </p>
            <p className="text-lg text-magazine-grey leading-relaxed">
              Sve licencirane kladionice u Hrvatskoj obvezne su pružati alate za odgovorno klađenje i podršku
              korisnicima. Nikada ne klađite više nego što možete priuštiti izgubiti.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <article className="bg-magazine-light-bg p-8 border-l-4 border-magazine-navy">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-magazine-navy">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-bold text-magazine-black mb-2 uppercase tracking-tight">
                  Postavite Limite
                </h3>
              </div>
            </div>
            <p className="text-base text-magazine-grey leading-relaxed mb-4">
              Prije početka klađenja, odredite maksimalni iznos koji ste spremni potrošiti. Pridržavajte se postavljenih
              limita bez obzira na rezultate.
            </p>
            <ul className="space-y-2 text-base text-magazine-grey">
              <li>• Limit depozita - kontrola uplaćenih iznosa</li>
              <li>• Limit gubitka - zaštita od velikih gubitaka</li>
              <li>• Limit vremena - ograničavanje trajanja sesija</li>
              <li>• Limit uloga - kontrola veličine pojedinačnih uloga</li>
            </ul>
          </article>

          <article className="bg-magazine-light-bg p-8 border-l-4 border-magazine-orange">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-magazine-orange">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-bold text-magazine-black mb-2 uppercase tracking-tight">
                  Znakovi Upozorenja
                </h3>
              </div>
            </div>
            <p className="text-base text-magazine-grey leading-relaxed mb-4">
              Problematično klađenje može se razviti postupno. Važno je prepoznati rane znakove i reagirati na vrijeme.
            </p>
            <ul className="space-y-2 text-base text-magazine-grey">
              <li>• Klađenje s novcem potrebnim za osnovne potrebe</li>
              <li>• Pokušaji nadoknade gubitaka većim ulozima</li>
              <li>• Zanemarivanje obveza i odnosa</li>
              <li>• Laganje o iznosima i vremenu klađenja</li>
            </ul>
          </article>

          <article className="bg-magazine-light-bg p-8 border-l-4 border-magazine-teal">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-magazine-teal">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-bold text-magazine-black mb-2 uppercase tracking-tight">
                  Samoisključenje
                </h3>
              </div>
            </div>
            <p className="text-base text-magazine-grey leading-relaxed mb-4">
              Ako trebate pauzu, sve kladionice nude opciju samoisključenja na određeno razdoblje ili trajno.
            </p>
            <ul className="space-y-2 text-base text-magazine-grey">
              <li>• Privremeno isključenje - od 24 sata do 6 mjeseci</li>
              <li>• Trajno isključenje - neograničeno zatvaranje</li>
              <li>• Nacionalni registar - zaštita na svim platformama</li>
              <li>• Razdoblje hlađenja - kratka pauza za razmišljanje</li>
            </ul>
          </article>

          <article className="bg-magazine-light-bg p-8 border-l-4 border-magazine-navy">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-magazine-navy">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-bold text-magazine-black mb-2 uppercase tracking-tight">
                  Potražite Pomoć
                </h3>
              </div>
            </div>
            <p className="text-base text-magazine-grey leading-relaxed mb-4">
              Niste sami. Postoje profesionalne organizacije koje pružaju besplatnu i povjerljivu podršku.
            </p>
            <ul className="space-y-2 text-base text-magazine-grey">
              <li>• Nacionalna linija - besplatno savjetovanje</li>
              <li>• Grupe podrške - dijeljenje iskustava</li>
              <li>• Profesionalna terapija - individualni tretman</li>
              <li>• Online resursi - alati za samopomoć</li>
            </ul>
          </article>
        </div>

        <div className="border-t-2 border-magazine-border pt-12">
          <div className="bg-magazine-navy text-white p-8 mb-8">
            <h3 className="font-sans text-3xl font-bold mb-4 uppercase tracking-tight">Važne Informacije</h3>
            <div className="space-y-4 text-base leading-relaxed opacity-95">
              <p>
                <strong>Dobna granica:</strong> Klađenje je dozvoljeno samo osobama starijim od 18 godina. Sve
                kladionice provjeravaju dob i sprječavaju pristup maloljetnicima.
              </p>
              <p>
                <strong>Rizici:</strong> Klađenje uključuje rizik gubitka novca. Nema garancije dobitka. Klađenje nikada
                ne bi trebalo biti način zarade.
              </p>
              <p>
                <strong>Zaštita podataka:</strong> Licencirane kladionice koriste napredne sigurnosne mjere za zaštitu
                vaših podataka. Uvijek provjerite licencu platforme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
