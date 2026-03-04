import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_minmax(0,1fr)]">
        <div>
          <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Verify every product
            <span className="block text-[#007FCF]">before it reaches you.</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
            Mavscan is the ultimate app to authenticate cosmetics, health products, and beverages. Scan barcodes, verify serial numbers, and ensure product safety.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#007FCF]" />
              Real‑time barcode and serial checks
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-900" />
              Built for everyday shoppers
            </span>
          </div>
          <Link
            href="/waitlist"
            className="mt-4 inline-flex w-[200px] items-center justify-center rounded-lg bg-[#007FCF] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0063a1]"
          >
            Get early access
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 md:items-baseline">
          <Image
            src="/mavscan logo.jpg"
            alt="Mavscan"
            width={240}
            height={240}
            className="rounded-2xl border border-slate-200 object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
