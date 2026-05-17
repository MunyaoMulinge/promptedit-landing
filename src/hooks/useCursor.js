import { useEffect } from 'react'

export default function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring   = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 5 + 'px'
      cursor.style.top  = my - 5 + 'px'
    }

    const animate = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.transform = 'scale(2.5)'
      ring.style.transform   = 'scale(1.4)'
    }
    const onLeave = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform   = 'scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}
