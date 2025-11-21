import type { SzhBettingSite } from "@/types/szh-betting-types"
import { SzhBettingRatings } from "@/components/szh-betting-ratings"

interface SzhEditorPicksProps {
  sites: SzhBettingSite[]
}

export function SzhEditorPicks({ sites }: SzhEditorPicksProps) {
  const topSite = sites.slice(0, 1)

  return (
    <section className="py-16 px-3 md:px-4 bg-gray-50">
      <div className="max-w-[1400px] mx-auto bg-white">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider bg-red-50 px-4 py-2 border border-red-200">
              Preporuka Urednika
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Naš Izbor
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nakon detaljne analize svih aspekata, ovo je naša glavna preporuka za kladionice u Hrvatskoj. Kombinacija
            izvrsnih kvota, širokog izbora sportova i pouzdane usluge čini ovu kladionicu najboljim izborom.
          </p>
        </div>

        <SzhBettingRatings sites={topSite} />

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
