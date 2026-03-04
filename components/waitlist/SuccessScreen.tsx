"use client"

export default function SuccessScreen({
  email,
  waitlistPosition,
}: {
  email: string
  waitlistPosition: number | null
}) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[#007FCF]">
        You&apos;re in!
      </p>
      <h2 className="text-2xl font-semibold text-gray-900">Thanks for joining.</h2>
      {waitlistPosition && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#007FCF]/30 bg-[#007FCF]/10 px-4 py-2">
          <span className="text-gray-600">Your position:</span>
          <span className="text-xl font-bold text-[#007FCF]">#{waitlistPosition}</span>
        </div>
      )}
      <p className="text-gray-600">
        We&apos;ll notify you at <span className="font-medium text-[#007FCF]">{email}</span> when
        Mavscan is ready.
      </p>
      <div className="pt-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center rounded-2xl bg-[#007FCF] px-5 py-3 font-semibold text-white hover:bg-[#0063a1]"
        >
          Back to top
        </button>
      </div>
    </div>
  )
}
