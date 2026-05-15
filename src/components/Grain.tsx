'use client'
import { useEffect, useRef } from 'react'

export default function Grain() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    document.body.classList.add('custom-cursor')
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor')
    }
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
    </>
  )
}
