import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/mavscan logo.jpg"
            alt="Mavscan"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-cover"
          />
          <div>
            <span className="text-lg font-bold text-slate-900">Mavscan</span>
            <p className="text-xs text-slate-500">Authenticate. Verify. Protect.</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Footer">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
          >
            How it works
          </Link>
          <Link
            href="/#waitlist"
            className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
          >
            Get early access
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
          >
            FAQ
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
        <p>&copy; 2025 Mavscan. All rights reserved.</p>
      </div>
    </footer>
  )
}
