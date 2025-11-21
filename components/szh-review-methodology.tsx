import { Shield, TrendingUp, Gift, Zap, CreditCard, MessageCircle } from "lucide-react"

export function SzhReviewMethodology() {
  const criteria = [
    { icon: Shield, label: "Sigurnost i licenca", weight: "25%", color: "text-yellow-600" },
    { icon: TrendingUp, label: "Kvote i ponuda", weight: "20%", color: "text-green-600" },
    { icon: Gift, label: "Bonusi i promocije", weight: "15%", color: "text-blue-600" },
    { icon: Zap, label: "Korisničko iskustvo", weight: "20%", color: "text-purple-600" },
    { icon: CreditCard, label: "Metode plaćanja", weight: "10%", color: "text-orange-600" },
    { icon: MessageCircle, label: "Korisnička podrška", weight: "10%", color: "text-red-600" },
  ]

  const ratings = [
    { range: "9.0 - 10.0", label: "Izvrsno", desc: "Premium kladionice", gradient: "from-yellow-500 to-yellow-600" },
    { range: "7.5 - 8.9", label: "Vrlo dobro", desc: "Visoka kvaliteta", gradient: "from-green-500 to-green-600" },
    { range: "6.0 - 7.4", label: "Dobro", desc: "Kvalitetni operatori", gradient: "from-blue-500 to-blue-600" },
    { range: "4.0 - 5.9", label: "Zadovoljavajuće", desc: "Osnovne funkcije", gradient: "from-gray-400 to-gray-500" },
    { range: "0.0 - 3.9", label: "Ispod standarda", desc: "Ne preporučujemo", gradient: "from-red-500 to-red-600" },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-3">
            Metodologija ocjenjivanja
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mb-4"></div>
          <p className="text-gray-600 text-lg">
            Svaka kladionica prolazi detaljno testiranje prema 6 ključnih kriterija
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {criteria.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-gray-50 p-4 border-l-4 border-gray-300 hover:border-yellow-500 transition-all"
              >
                
                <h3 className="font-bold text-xs text-gray-900 mb-1 leading-tight">{item.label}</h3>
                <p className="text-xl font-bold text-gray-900">{item.weight}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Skala ocjenjivanja
          </h3>

          <div className="space-y-3 mb-6">
            {ratings.map((rating, index) => (
              <div key={index} className={`flex items-center gap-4 p-4 bg-gradient-to-r ${rating.gradient} text-white`}>
                <div className="text-2xl font-bold min-w-[100px] font-mono">{rating.range}</div>
                <div className="flex-1">
                  <div className="font-bold text-base uppercase tracking-wide">{rating.label}</div>
                  <p className="text-sm opacity-90">{rating.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 text-center pt-4 border-t border-gray-300">
            Neovisne ocjene temeljene na 45-dnevnom testiranju • Ažuriranje kvartalno
          </p>
        </div>
      </div>
    </section>
  )
}
