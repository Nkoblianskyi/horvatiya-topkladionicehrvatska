import Image from "next/image"
import { Star } from "lucide-react"
import type { SzhBettingSite } from "@/types/szh-betting-types"
import Link from "next/link"

interface SzhRatingListProps {
  sites: SzhBettingSite[]
}

export function SzhBettingRatings({ sites }: SzhRatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-300" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-gray-300" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-white border-l-4 border-magazine-navy hover:shadow-lg transition-all",
        logo: "bg-magazine-light-bg border-r border-magazine-border",
        content: "bg-white",
        badge: "bg-magazine-navy text-white",
        borderColor: "border-magazine-navy",
        buttonPrimary: "bg-magazine-navy hover:bg-magazine-black",
        buttonSecondary: "text-magazine-navy hover:text-magazine-black",
      }
    } else if (index === 1) {
      return {
        container: "bg-white border-l-4 border-magazine-orange hover:shadow-lg transition-all",
        logo: "bg-magazine-light-bg border-r border-magazine-border",
        content: "bg-white",
        badge: "bg-magazine-orange text-white",
        borderColor: "border-magazine-orange",
        buttonPrimary: "bg-magazine-orange hover:bg-magazine-navy",
        buttonSecondary: "text-magazine-orange hover:text-magazine-navy",
      }
    } else if (index === 2) {
      return {
        container: "bg-white border-l-4 border-magazine-teal hover:shadow-lg transition-all",
        logo: "bg-magazine-light-bg border-r border-magazine-border",
        content: "bg-white",
        badge: "bg-magazine-teal text-white",
        borderColor: "border-magazine-teal",
        buttonPrimary: "bg-magazine-teal hover:bg-magazine-navy",
        buttonSecondary: "text-magazine-teal hover:text-magazine-navy",
      }
    } else {
      return {
        container: "bg-white border-l-4 border-magazine-grey-light hover:shadow-lg transition-all",
        logo: "bg-magazine-light-bg border-r border-magazine-border",
        content: "bg-white",
        badge: "bg-magazine-grey text-white",
        borderColor: "border-magazine-border",
        buttonPrimary: "bg-magazine-navy hover:bg-magazine-black",
        buttonSecondary: "text-magazine-navy hover:text-magazine-black",
      }
    }
  }

  return (
    <section className="py-8 md:py-12 bg-magazine-white">
      <div className="container mx-auto px-3 md:px-4 max-w-[1400px]">
        <div className="grid gap-4">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div key={site.id} className={`relative overflow-visible transition-all pt-4 ${cardStyle.container}`}>
                {showBadge && (
                  <div className="absolute -top-2 left-8 z-10">
                    <div
                      className={`${cardStyle.badge} px-6 py-1.5 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden lg:block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[280px_1fr_240px_200px] items-center gap-6 p-6 h-[180px]">
                    <div className={`flex items-center justify-center ${cardStyle.logo} p-6 h-full`}>
                      <div className="relative h-20 w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 h-full">
                      <p className="text-xs font-bold mb-2 uppercase tracking-[0.2em] text-red-600">
                        BONUS DOBRODOŠLICE
                      </p>
                      <h3 className="font-display text-3xl font-bold leading-tight text-gray-900">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-xl font-semibold mt-1 text-gray-600">{site.dopBonus}</p>}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 h-full">
                      <div className="font-display text-6xl font-bold mb-2 text-gray-900">{site.rating.toFixed(1)}</div>
                      <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        ({formatNumber(site.reviews)} recenzija)
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-4 h-full">
                      <div
                        className={`w-full ${cardStyle.buttonPrimary} transition-colors text-white font-bold py-4 px-6 text-center uppercase tracking-[0.15em] text-sm whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                      <span
                        className={`${cardStyle.buttonSecondary} transition-colors font-semibold text-sm whitespace-nowrap uppercase tracking-wide`}
                      >
                        Posjeti stranicu
                      </span>
                    </div>
                  </div>

                  <div className={`border-t ${cardStyle.borderColor} px-6 py-3 ${cardStyle.content}`}>
                    <p className="text-gray-500 text-xs leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden md:block lg:hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[280px_1fr] h-[200px]">
                    <div className={`${cardStyle.logo} p-6 flex flex-col items-center justify-center h-full`}>
                      <div className="relative h-20 w-48 mb-4">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">{renderStars(site.rating)}</div>
                        <span className="text-gray-900 font-display font-bold text-3xl">{site.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className={`p-6 flex flex-col items-center justify-center ${cardStyle.content} h-full`}>
                      <p className="text-gray-500 text-sm mb-4 uppercase tracking-wide">BONUS DOBRODOŠLICE</p>
                      <h3 className="text-gray-900 font-display text-2xl font-bold text-center leading-tight mb-2.5">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && <p className="text-gray-600 text-base font-semibold mb-2">{site.dopBonus}</p>}

                      <div
                        className={`w-full max-w-[240px] ${cardStyle.buttonPrimary} transition-colors text-white font-bold py-4 px-6 text-center uppercase tracking-[0.15em] text-sm whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className={`${cardStyle.content} px-6 py-3 border-t ${cardStyle.borderColor}`}>
                    <p className="text-gray-500 text-xs leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="md:hidden block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="grid grid-cols-[170px_1fr] gap-0 h-[190px]">
                    <div className={`${cardStyle.logo} p-4 flex flex-col items-center justify-center h-full`}>
                      <div className="relative h-24 w-full mb-3">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="text-gray-900 font-display font-bold text-xl">{site.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-gray-500 text-[10px] text-center uppercase">({formatNumber(site.reviews)})</p>
                    </div>

                    <div className={`p-4 flex flex-col items-center justify-between ${cardStyle.content} h-full`}>
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <p className="text-gray-500 uppercase tracking-wide font-medium text-[10px] mb-1">
                          BONUS DOBRODOŠLICE
                        </p>
                        <h3 className="text-gray-900 font-display font-bold text-center leading-tight text-2xl mb-0.5">
                          {site.bonus}
                        </h3>
                        {site.dopBonus && <p className="text-gray-800 font-semibold text-base">{site.dopBonus}</p>}
                      </div>
                      <div
                        className={`w-full ${cardStyle.buttonPrimary} transition-colors text-white font-bold py-3 px-4 text-center uppercase tracking-wider text-xs whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className={`${cardStyle.content} px-3 py-2.5 border-t ${cardStyle.borderColor}`}>
                    <p className="text-gray-500 text-[9px] leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti i odredbe
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
