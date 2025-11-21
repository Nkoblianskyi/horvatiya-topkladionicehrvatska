"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SzhCookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")

    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-magazine-navy shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-magazine-black leading-relaxed">
              Koristimo kolačiće za poboljšanje vašeg iskustva. Nastavkom korištenja stranice prihvaćate upotrebu
              kolačića.{" "}
              <Link
                href="/cookie-policy"
                className="text-magazine-navy hover:text-magazine-orange font-semibold underline"
              >
                Saznajte više
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 md:flex-none border-2 border-magazine-grey text-magazine-grey hover:bg-magazine-grey hover:text-white bg-transparent"
            >
              Odbij
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 md:flex-none bg-magazine-navy hover:bg-magazine-black text-white"
            >
              Prihvati sve
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
