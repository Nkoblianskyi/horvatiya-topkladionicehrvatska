import { Shield, TrendingUp, Users, Award, Target, Heart } from "lucide-react"

export function SzhAboutUs() {
  return (
    <section className="py-16 md:py-24 bg-magazine-light-bg">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-magazine-navy text-white text-sm font-bold uppercase tracking-wider mb-6">
            O Nama
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-magazine-black leading-tight tracking-tight">
            Vaš Pouzdani Vodič Kroz
            <br />
            <span className="text-magazine-navy">Svijet Kladionica</span>
          </h2>
          <p className="text-lg md:text-xl text-magazine-grey max-w-3xl mx-auto leading-relaxed">
            Top Kladionice Hrvatska pruža neovisne, stručne analize najboljih kladionica u Hrvatskoj. Naša misija je
            pomoći vam donijeti informirane odluke o platformama za sportsko klađenje.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 text-center border-2 border-magazine-navy">
            <div className="text-4xl font-bold text-magazine-navy mb-2">40+</div>
            <div className="text-sm text-magazine-grey font-medium uppercase tracking-wide">
              Analiziranih Kladionica
            </div>
          </div>
          <div className="bg-white p-6 text-center border-2 border-magazine-orange">
            <div className="text-4xl font-bold text-magazine-orange mb-2">2025</div>
            <div className="text-sm text-magazine-grey font-medium uppercase tracking-wide">Ažurne Recenzije</div>
          </div>
          <div className="bg-white p-6 text-center border-2 border-magazine-teal">
            <div className="text-4xl font-bold text-magazine-teal mb-2">100%</div>
            <div className="text-sm text-magazine-grey font-medium uppercase tracking-wide">Neovisnost</div>
          </div>
          <div className="bg-white p-6 text-center border-2 border-magazine-navy">
            <div className="text-4xl font-bold text-magazine-navy mb-2">24/7</div>
            <div className="text-sm text-magazine-grey font-medium uppercase tracking-wide">Praćenje Tržišta</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <article className="bg-white p-8 border-t-4 border-magazine-navy">
            <div className="w-14 h-14 bg-magazine-navy flex items-center justify-center mb-5">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Pouzdanost i Sigurnost
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Analiziramo licence, sigurnosne certifikate i reputaciju svake kladionice. Preporučujemo isključivo
              provjerene i pouzdane platforme koje ispunjavaju najviše standarde.
            </p>
          </article>

          <article className="bg-white p-8 border-t-4 border-magazine-orange">
            <div className="w-14 h-14 bg-magazine-orange flex items-center justify-center mb-5">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Objektivna Metodologija
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Koristimo transparentnu metodologiju ocjenjivanja s jasno definiranim kriterijima. Svaka ocjena temelji se
              na detaljnom testiranju i analizi stvarnih korisničkih iskustava.
            </p>
          </article>

          <article className="bg-white p-8 border-t-4 border-magazine-teal">
            <div className="w-14 h-14 bg-magazine-teal flex items-center justify-center mb-5">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Korisničko Iskustvo
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Testiramo sve aspekte platformi iz perspektive korisnika - od registracije do isplate. Fokusiramo se na
              stvarno iskustvo koje očekuje svakog igrača.
            </p>
          </article>

          <article className="bg-white p-8 border-t-4 border-magazine-navy">
            <div className="w-14 h-14 bg-magazine-navy flex items-center justify-center mb-5">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Stručna Analiza
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Naš tim čine iskusni analitičari s dugogodišnjim iskustvom u industriji sportskog klađenja i detaljnim
              poznavanjem hrvatskog tržišta kladionica.
            </p>
          </article>

          <article className="bg-white p-8 border-t-4 border-magazine-orange">
            <div className="w-14 h-14 bg-magazine-orange flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Redovna Ažuriranja
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Kontinuirano pratimo promjene na platformama i redovno ažuriramo naše recenzije. Tržište je dinamično i
              naše informacije ostaju uvijek aktualne.
            </p>
          </article>

          <article className="bg-white p-8 border-t-4 border-magazine-teal">
            <div className="w-14 h-14 bg-magazine-teal flex items-center justify-center mb-5">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-sans text-xl font-bold text-magazine-black mb-3 uppercase tracking-tight">
              Odgovorno Klađenje
            </h3>
            <p className="text-magazine-grey leading-relaxed">
              Promičemo sigurno i odgovorno klađenje. Evaluiramo alate za zaštitu igrača i nikada ne prikazujemo
              klađenje kao siguran način zarade.
            </p>
          </article>
        </div>

        <div className="bg-magazine-navy p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">Naša Misija</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-4 opacity-95">
              Vjerujemo da transparentnost i objektivnost moraju biti temelj svake preporuke. U industriji prepunoj
              marketinških obećanja, mi donosimo samo provjerene činjenice.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Ne prihvaćamo plaćanja za bolje ocjene. Ne skrivamo nedostatke. Samo pružamo točne informacije koje
              trebate za pametne odluke.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
