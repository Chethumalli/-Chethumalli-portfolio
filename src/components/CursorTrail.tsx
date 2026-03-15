"use client"

import { useEffect } from "react"

export default function CursorTrail() {

  useEffect(() => {

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")!

    document.body.appendChild(canvas)

    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "9999"

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const mouse = { x: 0, y: 0 }

    const trail: { x: number; y: number }[] = []

    const trailLength = 20

    for (let i = 0; i < trailLength; i++) {
      trail.push({ x: 0, y: 0 })
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail[0].x += (mouse.x - trail[0].x) * 0.25
      trail[0].y += (mouse.y - trail[0].y) * 0.25

      for (let i = 1; i < trail.length; i++) {

        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.25
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.25

      }

      ctx.beginPath()

      for (let i = 0; i < trail.length; i++) {

        const p = trail[i]

        if (i === 0) ctx.moveTo(p.x, p.y)
        else ctx.lineTo(p.x, p.y)

      }

      ctx.strokeStyle = "#a855f7"
      ctx.lineWidth = 4
      ctx.lineCap = "round"
      ctx.shadowColor = "#a855f7"
      ctx.shadowBlur = 20

      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

  }, [])

  return null
}