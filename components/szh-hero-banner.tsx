"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Shield, Award, TrendingUp, CheckCircle } from "lucide-react"

export function SzhHeroBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20 border-b border-magazine-border">
      <div className="absolute inset-0 bg-black/20 md:bg-black/25 z-0" />

      <div className="container mx-auto sm:max-w-[1400px] relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="mb-4">
              <span className="text-magazine-orange text-xs md:text-sm uppercase tracking-[0.25em] font-bold">
                Stručna Analiza 2025
              </span>
            </div>

            <h1 className="font-sans text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
              <span className="text-red-600">Najbolje</span> Kladionice <br className="hidden md:block" />u <span className="text-blue-600">Hrvatskoj</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
              Neovisne recenzije i detaljne analize vodećih kladionica. Usporedite bonuse, kvote i platforme da
              pronađete idealnu opciju za vaše klađenje.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 md:gap-2.5">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" />
                <span className="text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                  Licencirane
                </span>
              </div>
              
              <div className="flex items-center gap-2 md:gap-2.5">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-green-600" />
                <span className="text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                  Provjerene
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-2.5">
                <Award className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-secondary" />
                <span className="text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                  Ekskluzivni Bonusi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
