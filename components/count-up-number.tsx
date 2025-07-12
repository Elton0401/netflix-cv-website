
'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CountUpNumberProps {
  end: number
  decimals?: number
  suffix?: string
  duration?: number
}

export default function CountUpNumber({ 
  end, 
  decimals = 0, 
  suffix = '', 
  duration = 2 
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000
  })
  
  const displayed = useTransform(springValue, (latest) => {
    return latest.toFixed(decimals) + suffix
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [motionValue, end, isInView])

  return (
    <motion.span ref={ref}>
      {displayed}
    </motion.span>
  )
}
