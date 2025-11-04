"use client"

import { AnimatePresence, motion, type MotionProps } from "motion/react"
import { useEffect, useState } from "react"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 1500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="overflow-hidden ">
        bold
      <AnimatePresence mode="wait"> 
        <motion.span key={words[index]} className={className} {...motionProps} >
       {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

