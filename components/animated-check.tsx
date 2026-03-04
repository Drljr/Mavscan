"use client"

import { motion } from "framer-motion"

export default function AnimatedCheck({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="49"
        fill="#06B217"
        stroke="none"
        variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      />
      <motion.path
        d="M28 52 L44 68 L74 38"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
        transition={{ delay: 0.15, duration: 0.6, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}
