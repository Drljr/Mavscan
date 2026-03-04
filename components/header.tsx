import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#waitlist", label: "Get early access" },
  { href: "#faq", label: "FAQ" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
          <Image
            src="/mavscan logo.jpg"
            alt="Mavscan"
            width={36}
            height={36}
            className="h-12 w-12 rounded-lg object-cover shadow-sm"
          />
          <span>Mavscan</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="#waitlist"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#007FCF] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0063a1] hover:shadow-md"
        >
          Get early access
        </Link>
      </div>
    </header>
  )
}
