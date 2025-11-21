"use client"
import { Logo } from "./logo"
import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"

export function SzhMainHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header className="bg-magazine-white border-b-2 border-magazine-navy fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Logo size="md" />
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-bold text-magazine-navy border-2 border-magazine-navy px-2 py-1">18+</span>
              <span className="hidden md:inline text-magazine-border">|</span>
              <button
                onClick={openModal}
                className="text-magazine-grey hover:text-magazine-navy transition-colors font-medium"
              >
                Informacije
              </button>
            </div>
          </div>
        </div>
      </div>
      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  )
}
