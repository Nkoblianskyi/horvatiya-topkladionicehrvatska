import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl"

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-bold text-magazine-navy tracking-tight uppercase`}>
          Top<span className="text-magazine-orange">Kladionice</span>
        </span>
        <span className="text-xs text-magazine-grey uppercase tracking-[0.2em] mt-0.5">Hrvatska</span>
      </div>
    </Link>
  )
}
