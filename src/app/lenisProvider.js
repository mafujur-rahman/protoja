// components/LenisProvider.tsx
'use client'

import { useLenisScroll } from "@/hook/useLenisScroll"

export function LenisProvider({ children }) {
  useLenisScroll()
  return <>{children}</>
}
