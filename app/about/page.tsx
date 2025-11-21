import { Shield, Users, TrendingUp, CheckCircle2, Target, Eye, Heart } from "lucide-react"
import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"
import { SzhCookieConsent } from "@/components/szh-cookie-consent"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-magazine-white">
      <SzhMainHeader />

      {/* Hero Section */}
      <section className="relative bg-magazine-white pt-24 md:pt-32 pb-12 md:pb-16 border-b border-magazine-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-magazine-navy text-white font-bold text-xs uppercase tracking-wide mb-6">
              O Nama
            </div>
            <h1 className="font-bold text-4xl md:text-6xl mb-6 uppercase tracking-tight text-magazine-black">
              topkladionicehrvatska
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-magazine-grey">
              Vaš stručni vodič kroz svijet online klađenja u Hrvatskoj
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-magazine-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-magazine-black mb-6 uppercase">Naša Misija</h2>
              <div className="space-y-4 text-base text-magazine-grey leading-relaxed">
                <p>
                  topkladionicehrvatska.com nastao je iz potrebe za transparentnim i pouzdanim vodičem kroz hrvatski
                  tržište online klađenja. U industriji punoj marketinških trikova, mi donosimo činjenice i objektivne
                  analize.
                </p>
                <p>
                  Naš tim stručnjaka detaljno ispituje svaku platformu - od sigurnosti i licenci do korisničkog iskustva
                  i kvalitete podrške. Ne prihvaćamo plaćanja za bolje ocjene, jer naša jedina obveza je prema vama.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "150+", label: "Analiziranih Kladionica" },
                { number: "7+", label: "Godina Iskustva" },
                { number: "24/7", label: "Praćenje Industrije" },
                { number: "100%", label: "Nezavisnost" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-magazine-light-bg border border-magazine-border p-6 text-center hover:border-magazine-navy transition-colors"
                >
                  <div className="text-3xl font-bold mb-2 text-magazine-navy">{stat.number}</div>
                  <div className="text-xs uppercase tracking-wide text-magazine-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-magazine-light-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-magazine-black mb-4 uppercase">Naši Principi</h2>
            <p className="text-lg text-magazine-grey max-w-2xl mx-auto">
              Vrijednosti koje definiraju naš pristup analizi i recenzijama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Objektivnost",
                description:
                  "Transparentna metodologija ocjenjivanja temeljena na stvarnim testiranjima i faktičkim podacima.",
              },
              {
                icon: Shield,
                title: "Sigurnost",
                description: "Detaljno provjeravamo licence, certifikate i sigurnosne protokole prije svake preporuke.",
              },
              {
                icon: Eye,
                title: "Transparentnost",
                description: "Otvoreno komuniciramo našu metodologiju i partnerstva bez skrivenih agenda.",
              },
              {
                icon: Users,
                title: "Korisnički Fokus",
                description: "Sve analiziramo iz perspektive igrača - od registracije do isplate sredstava.",
              },
              {
                icon: TrendingUp,
                title: "Aktualnost",
                description: "Kontinuirano praćenje tržišta s redovitim ažuriranjem recenzija i informacija.",
              },
              {
                icon: Heart,
                title: "Odgovornost",
                description: "Promoviranje sigurnog klađenja i edukacija o odgovornom pristupu igrama na sreću.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-magazine-white p-6 border border-magazine-border hover:border-magazine-navy transition-colors"
                >
                  
                  <h3 className="font-bold text-lg text-magazine-black mb-3 uppercase">{value.title}</h3>
                  <p className="text-magazine-grey leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-magazine-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-magazine-black mb-4 uppercase">Naša Metodologija</h2>
            <p className="text-lg text-magazine-grey max-w-3xl mx-auto">
              Šest ključnih kriterija za sveobuhvatnu procjenu svake platforme
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Licenciranje i Sigurnost",
                description:
                  "Temeljita provjera valjanosti licenci, SSL enkripcije, politika privatnosti i mjera zaštite podataka. Preporučujemo isključivo potpuno licencirane i sigurne operatore.",
              },
              {
                title: "Bonusi i Promocije",
                description:
                  "Detaljna analiza uvjeta bonusa, zahtjeva za klađenje, vremenskih ograničenja i programa vjernosti. Čitamo sva pravila kako ne biste morali vi.",
              },
              {
                title: "Korisničko Iskustvo",
                description:
                  "Testiranje web stranica i mobilnih aplikacija na brzinu, intuitivnost i funkcionalnost. Kvalitetna platforma mora biti jednostavna za sve korisnike.",
              },
              {
                title: "Sportska Ponuda i Kvote",
                description:
                  "Usporedba raspona sportova, broja tržišta i konkurentnosti kvota. Evaluacija live betting opcija i specijalnih ponuda.",
              },
              {
                title: "Metode Plaćanja",
                description:
                  "Analiza brzine transakcija, dostupnih metoda, naknada i limita. Najbolje platforme omogućavaju brze i sigurne transakcije.",
              },
              {
                title: "Korisnička Podrška",
                description:
                  "Provjera dostupnosti, vremena odgovora i stručnosti tima podrške kroz sve kanale komunikacije.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-magazine-white p-6 border border-magazine-border hover:border-magazine-teal transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-magazine-teal text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-magazine-black mb-2 uppercase">{item.title}</h3>
                    <p className="text-magazine-grey leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gambling Section */}
      <section className="py-16 md:py-20 bg-magazine-light-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-magazine-white p-8 md:p-10 border-2 border-magazine-teal">
            <h2 className="font-bold text-3xl md:text-4xl text-magazine-teal mb-6 uppercase text-center">
              Odgovorno Klađenje
            </h2>
            <div className="space-y-4 text-base text-magazine-grey leading-relaxed">
              <p className="text-center">
                Zalažemo se za odgovorno i sigurno klađenje. Klađenje treba biti zabava, nikada način zarade.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-6">
                {[
                  "Postavljajte limite i pridržavajte ih se",
                  "Nikada ne pokušavajte vratiti gubitke",
                  "Kladite se samo novcem koji možete priuštiti izgubiti",
                  "Potražite pomoć ako klađenje postane problem",
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 bg-magazine-light-bg p-3">
                    <CheckCircle2 className="w-5 h-5 text-magazine-teal flex-shrink-0 mt-0.5" />
                    <p className="text-magazine-black text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SzhMainFooter />
      <SzhCookieConsent />
    </div>
  )
}
