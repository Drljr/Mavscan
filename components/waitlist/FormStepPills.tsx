import type { WaitlistStep } from "@/app/lib/types"

export default function FormStepPills({
  currentStep,
  totalSteps,
  onStepClick,
}: {
  currentStep: WaitlistStep
  totalSteps: number
  onStepClick: (step: WaitlistStep) => void
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => {
        const step = n as WaitlistStep
        return (
          <button
            key={n}
            type="button"
            onClick={() => onStepClick(step)}
            className={[
              "h-7 w-7 rounded-full border text-xs font-semibold text-gray-700 transition",
              n === currentStep
                ? "border-[#007FCF] bg-[#007FCF]/10 text-[#007FCF]"
                : "border-gray-200 bg-gray-50 hover:border-[#007FCF]/50",
            ].join(" ")}
            aria-current={n === currentStep ? "step" : undefined}
          >
            {n}
          </button>
        )
      })}
    </div>
  )
}
