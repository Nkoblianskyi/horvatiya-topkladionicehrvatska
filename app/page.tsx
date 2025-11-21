"use client"

import { bettingSitesHR } from "@/types/szh-betting-types"
import { SzhHeroBanner } from "@/components/szh-hero-banner"
import { SzhBettingRatings } from "@/components/szh-betting-ratings"
import { SzhReviewMethodology } from "@/components/szh-review-methodology"
import { SzhOffersDialog } from "@/components/szh-offers-dialog"
import { SzhEditorPicks } from "@/components/szh-editor-picks"
import { SzhAboutUs } from "@/components/szh-about-us"
import { SzhResponsibleGaming } from "@/components/szh-responsible-gaming"
import { SzhFaq } from "@/components/szh-faq"

export default function StranicaZakladenjeHR() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image for entire page */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/hero-sports-bg.jpg)" }}
        />
        {/* Semi-transparent white overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <main className="relative z-10 max-w-[1400px] mx-auto">
        <SzhHeroBanner />
        <SzhBettingRatings sites={bettingSitesHR} />
        <SzhAboutUs />
        <SzhResponsibleGaming />

        <SzhReviewMethodology />
        <SzhEditorPicks sites={bettingSitesHR} />
        <SzhFaq />
      </main>
      <SzhOffersDialog sites={bettingSitesHR} />
    </div>
  )
}
