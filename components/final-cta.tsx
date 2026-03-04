import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl rounded-3xl bg-[#007FCF] px-8 py-14 text-center shadow-xl md:px-14 md:py-16">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Get early access
        </h2>
        <p className="mb-8 text-base text-white/90 md:text-lg">
          Leave your details and we&apos;ll send you the waitlist when it&apos;s ready.
        </p>
        <Link
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#007FCF] shadow-sm transition hover:bg-slate-50 hover:shadow-md"
        >
          Get early access
        </Link>
      </div>
    </section>
  )
}
