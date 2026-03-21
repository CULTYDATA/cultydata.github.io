import React from "react"

/**
 * Mathematical SVG Illustrations — Quantum Kandinsky Design System
 * Elliptic curves, torus projections, vector fields, fiber bundles, network diagrams
 * All SVG-based, zero image weight, smooth animations
 */

// --- Elliptic Curve (y² = x³ + ax + b) ---
export const EllipticCurve = ({
  width = 300,
  height = 300,
  a = -1,
  b = 1,
  accent = "#dc2626",
  animate = true,
  className = "",
}) => {
  const points = []
  const scale = 40
  const cx = width / 2
  const cy = height / 2

  for (let px = -3; px <= 3; px += 0.02) {
    const rhs = px * px * px + a * px + b
    if (rhs >= 0) {
      const py = Math.sqrt(rhs)
      points.push({ x: cx + px * scale, y: cy - py * scale })
      points.push({ x: cx + px * scale, y: cy + py * scale })
    }
  }

  const upper = points.filter(p => p.y <= cy).sort((a, b) => a.x - b.x)
  const lower = points.filter(p => p.y > cy).sort((a, b) => a.x - b.x)

  const toPath = pts =>
    pts.length > 1
      ? `M ${pts[0].x},${pts[0].y} ` +
        pts.slice(1).map(p => `L ${p.x},${p.y}`).join(" ")
      : ""

  const tx = 0.5
  const ty = Math.sqrt(tx * tx * tx + a * tx + b)
  const slope = (3 * tx * tx + a) / (2 * ty)
  const lineLen = 2.5

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`math-illustration ${className}`}
    >
      <line x1={0} y1={cy} x2={width} y2={cy} stroke="#e5e5e5" strokeWidth="0.5" />
      <line x1={cx} y1={0} x2={cx} y2={height} stroke="#e5e5e5" strokeWidth="0.5" />
      <path d={toPath(upper)} fill="none" stroke="#0a0a0a" strokeWidth="1.5">
        {animate && (
          <animate attributeName="stroke-dasharray" from="0,1000" to="500,0" dur="2s" fill="freeze" />
        )}
      </path>
      <path d={toPath(lower)} fill="none" stroke="#0a0a0a" strokeWidth="1.5">
        {animate && (
          <animate attributeName="stroke-dasharray" from="0,1000" to="500,0" dur="2s" fill="freeze" />
        )}
      </path>
      <line
        x1={cx + (tx - lineLen) * scale}
        y1={cy - (ty + slope * -lineLen) * scale}
        x2={cx + (tx + lineLen) * scale}
        y2={cy - (ty + slope * lineLen) * scale}
        stroke={accent}
        strokeWidth="1"
        opacity="0"
      >
        {animate && (
          <animate attributeName="opacity" from="0" to="0.7" dur="1s" begin="1.5s" fill="freeze" />
        )}
      </line>
      <circle cx={cx + tx * scale} cy={cy - ty * scale} r="4" fill={accent} opacity="0">
        {animate && <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.2s" fill="freeze" />}
      </circle>
      <circle cx={cx + tx * scale} cy={cy + ty * scale} r="3" fill="#a3a3a3" opacity="0">
        {animate && <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.4s" fill="freeze" />}
      </circle>
      <text x={width - 10} y={height - 10} textAnchor="end" fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">
        y² = x³ {a >= 0 ? "+" : "−"} {Math.abs(a)}x {b >= 0 ? "+" : "−"} {Math.abs(b)}
      </text>
    </svg>
  )
}

// --- Torus Projection (Algebraic Topology — T² = S¹ × S¹) ---
export const TorusProjection = ({
  width = 300,
  height = 300,
  accent = "#dc2626",
  animate = true,
  className = "",
}) => {
  const cx = width / 2
  const cy = height / 2
  const R = 70
  const r = 30
  const paths = []

  for (let i = 0; i < 12; i++) {
    const theta = (i / 12) * Math.PI * 2
    const ringPoints = []
    for (let j = 0; j <= 32; j++) {
      const phi = (j / 32) * Math.PI * 2
      const x3d = (R + r * Math.cos(phi)) * Math.cos(theta)
      const y3d = (R + r * Math.cos(phi)) * Math.sin(theta)
      const z3d = r * Math.sin(phi)
      const px = cx + x3d * 0.8 - y3d * 0.3
      const py = cy - z3d * 0.9 - y3d * 0.4
      ringPoints.push(`${px.toFixed(1)},${py.toFixed(1)}`)
    }
    paths.push({ d: `M ${ringPoints.join(" L ")}`, delay: i * 0.15 })
  }

  for (let j = 0; j < 16; j++) {
    const phi = (j / 16) * Math.PI * 2
    const crossPoints = []
    for (let i = 0; i <= 32; i++) {
      const theta = (i / 32) * Math.PI * 2
      const x3d = (R + r * Math.cos(phi)) * Math.cos(theta)
      const y3d = (R + r * Math.cos(phi)) * Math.sin(theta)
      const z3d = r * Math.sin(phi)
      const px = cx + x3d * 0.8 - y3d * 0.3
      const py = cy - z3d * 0.9 - y3d * 0.4
      crossPoints.push(`${px.toFixed(1)},${py.toFixed(1)}`)
    }
    paths.push({ d: `M ${crossPoints.join(" L ")}`, delay: 1.8 + j * 0.1, cross: true })
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`math-illustration ${className}`}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.cross ? "#d4d4d4" : "#0a0a0a"}
          strokeWidth={p.cross ? 0.3 : 0.6}
          opacity={0}
        >
          {animate && (
            <animate
              attributeName="opacity"
              from="0"
              to={p.cross ? "0.5" : "0.8"}
              dur="1.5s"
              begin={`${p.delay}s`}
              fill="freeze"
            />
          )}
        </path>
      ))}
      <ellipse
        cx={cx}
        cy={cy + 5}
        rx={R * 0.8}
        ry={12}
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0"
      >
        {animate && (
          <animate attributeName="opacity" from="0" to="0.8" dur="0.8s" begin="3.5s" fill="freeze" />
        )}
      </ellipse>
      <text x={width - 10} y={height - 10} textAnchor="end" fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">
        T² = S¹ × S¹
      </text>
    </svg>
  )
}

// --- Vector Field (Linear Algebra — eigenvectors) ---
export const VectorField = ({
  width = 300,
  height = 300,
  accent = "#2563eb",
  animate = true,
  className = "",
}) => {
  const cx = width / 2
  const cy = height / 2
  const a11 = 0.3, a12 = -0.8, a21 = 0.8, a22 = 0.3
  const arrows = []
  const step = 40

  for (let x = step; x < width; x += step) {
    for (let y = step; y < height; y += step) {
      const dx = x - cx
      const dy = y - cy
      const vx = a11 * dx + a12 * dy
      const vy = a21 * dx + a22 * dy
      const mag = Math.sqrt(vx * vx + vy * vy)
      if (mag > 2) {
        const norm = Math.min(mag, 20) / mag
        arrows.push({ x, y, vx: vx * norm, vy: vy * norm })
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`math-illustration ${className}`}
    >
      <defs>
        <marker id="qk-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#a3a3a3" />
        </marker>
        <marker id="qk-arrow-accent" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill={accent} />
        </marker>
      </defs>
      {arrows.map((a, i) => (
        <circle key={`d-${i}`} cx={a.x} cy={a.y} r="1" fill="#d4d4d4" />
      ))}
      {arrows.map((a, i) => (
        <line
          key={`a-${i}`}
          x1={a.x}
          y1={a.y}
          x2={a.x + a.vx}
          y2={a.y + a.vy}
          stroke="#a3a3a3"
          strokeWidth="0.8"
          markerEnd="url(#qk-arrow)"
          opacity="0"
        >
          {animate && (
            <animate attributeName="opacity" from="0" to="0.7" dur="0.3s" begin={`${0.5 + i * 0.03}s`} fill="freeze" />
          )}
        </line>
      ))}
      <line x1={cx - 80} y1={cy + 80} x2={cx + 80} y2={cy - 80} stroke={accent} strokeWidth="1.5" markerEnd="url(#qk-arrow-accent)" opacity="0">
        {animate && <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2.5s" fill="freeze" />}
      </line>
      <line x1={cx + 80} y1={cy + 80} x2={cx - 80} y2={cy - 80} stroke={accent} strokeWidth="1.5" markerEnd="url(#qk-arrow-accent)" opacity="0">
        {animate && <animate attributeName="opacity" from="0" to="1" dur="0.6s" begin="2.8s" fill="freeze" />}
      </line>
      <circle cx={cx} cy={cy} r="3" fill="#0a0a0a" />
      <text x={width - 10} y={height - 10} textAnchor="end" fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">
        Ax = λx
      </text>
    </svg>
  )
}

// --- Fiber Bundle (Algebraic Topology — π: E → B) ---
export const FiberBundle = ({
  width = 300,
  height = 300,
  accent = "#eab308",
  animate = true,
  className = "",
}) => {
  const fibers = []
  const baseY = height * 0.7
  const numFibers = 24

  for (let i = 0; i < numFibers; i++) {
    const t = i / numFibers
    const x = 30 + t * (width - 60)
    const baseOffset = Math.sin(t * Math.PI * 2) * 20
    const twist = Math.sin(t * Math.PI) * 30
    const fiberHeight = 60 + Math.cos(t * Math.PI * 3) * 15
    fibers.push({ x, baseY: baseY + baseOffset, topY: baseY + baseOffset - fiberHeight, twist, t })
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`math-illustration ${className}`}
    >
      <path
        d={`M ${fibers.map(f => `${(f.x + f.twist * 0.3).toFixed(1)},${((f.topY + f.baseY) / 2).toFixed(1)}`).join(" L ")}`}
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0"
      >
        {animate && <animate attributeName="opacity" from="0" to="0.8" dur="1s" begin="2s" fill="freeze" />}
      </path>
      {fibers.map((f, i) => (
        <g key={i}>
          <path
            d={`M ${f.x},${f.baseY} C ${f.x + f.twist * 0.5},${f.baseY - 20} ${f.x + f.twist},${f.topY + 20} ${f.x + f.twist * 0.3},${f.topY}`}
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="0.6"
            opacity="0"
          >
            {animate && <animate attributeName="opacity" from="0" to="0.6" dur="0.4s" begin={`${0.3 + i * 0.05}s`} fill="freeze" />}
          </path>
          <circle cx={f.x} cy={f.baseY} r="1.5" fill="#0a0a0a" opacity="0">
            {animate && <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${0.3 + i * 0.05}s`} fill="freeze" />}
          </circle>
        </g>
      ))}
      <path
        d={`M ${fibers.map(f => `${f.x},${f.baseY}`).join(" L ")}`}
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="1.5"
      />
      <text x={20} y={baseY + 25} fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">B (base)</text>
      <text x={20} y={fibers[0].topY - 10} fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">E (total)</text>
      <text x={width - 10} y={height - 10} textAnchor="end" fontSize="10" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3">π: E → B</text>
    </svg>
  )
}

// --- Network Diagram (Human + AI Agents) ---
export const NetworkDiagram = ({
  width = 400,
  height = 400,
  accent = "#dc2626",
  animate = true,
  className = "",
}) => {
  const cx = width / 2
  const cy = height / 2
  const humans = [
    { x: cx - 60, y: cy - 50, label: "MA" },
    { x: cx + 70, y: cy - 70, label: "MS" },
    { x: cx, y: cy + 60, label: "DW" },
  ]
  const agents = [
    { x: cx - 110, y: cy + 50, label: "DEV" },
    { x: cx + 120, y: cy + 10, label: "QA" },
    { x: cx - 30, y: cy + 120, label: "OPS" },
    { x: cx + 90, y: cy + 100, label: "DATA" },
  ]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`math-illustration ${className}`}
    >
      <ellipse cx={cx} cy={cy} rx={150} ry={120} fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
      <line x1={40} y1={height - 40} x2={width - 40} y2={40} stroke="#f5f5f5" strokeWidth="0.5" />
      <line x1={40} y1={40} x2={width - 40} y2={height - 40} stroke="#f5f5f5" strokeWidth="0.5" />

      {humans.map((h1, i) =>
        humans.slice(i + 1).map((h2, j) => (
          <line key={`hh-${i}-${j}`} x1={h1.x} y1={h1.y} x2={h2.x} y2={h2.y} stroke="#0a0a0a" strokeWidth="1" opacity="0">
            {animate && <animate attributeName="opacity" from="0" to="0.8" dur="0.5s" begin={`${0.5 + i * 0.2}s`} fill="freeze" />}
          </line>
        ))
      )}

      {agents.map((agent, i) => {
        const nearest = humans.reduce((best, h) => {
          const d = Math.hypot(h.x - agent.x, h.y - agent.y)
          return d < best.d ? { ...h, d } : best
        }, { d: Infinity })
        const midX = (nearest.x + agent.x) / 2 + (i % 2 ? 15 : -15)
        const midY = (nearest.y + agent.y) / 2 - 10
        return (
          <path
            key={`ha-${i}`}
            d={`M ${nearest.x},${nearest.y} Q ${midX},${midY} ${agent.x},${agent.y}`}
            fill="none"
            stroke="#a3a3a3"
            strokeWidth="0.75"
            strokeDasharray="4 4"
            opacity="0"
          >
            {animate && <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin={`${1.5 + i * 0.2}s`} fill="freeze" />}
          </path>
        )
      })}

      {humans.map((h, i) => (
        <g key={`h-${i}`}>
          <circle cx={h.x} cy={h.y} r="18" fill={i === 0 ? accent : "#0a0a0a"} opacity="0">
            {animate && <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${0.3 + i * 0.15}s`} fill="freeze" />}
          </circle>
          <text x={h.x} y={h.y + 4} textAnchor="middle" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500" fill="#ffffff" opacity="0">
            {h.label}
            {animate && <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${0.5 + i * 0.15}s`} fill="freeze" />}
          </text>
        </g>
      ))}

      {agents.map((agent, i) => (
        <g key={`ag-${i}`}>
          <circle cx={agent.x} cy={agent.y} r="14" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="3 3" opacity="0">
            {animate && (
              <>
                <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin={`${2 + i * 0.15}s`} fill="freeze" />
                <animate attributeName="r" values="14;16;14" dur={`${2.5 + i * 0.3}s`} begin={`${2.5 + i * 0.15}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
          <text x={agent.x} y={agent.y + 28} textAnchor="middle" fontSize="9" fontFamily="'JetBrains Mono', monospace" fill="#a3a3a3" opacity="0">
            {agent.label}
            {animate && <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${2.2 + i * 0.15}s`} fill="freeze" />}
          </text>
        </g>
      ))}
    </svg>
  )
}

// --- Geometric decorations for sections ---
export const KandinskyCircle = ({ size = 300, strokeColor = "#e5e5e5", className = "" }) => (
  <div className={`kandinsky-decor kandinsky-circle ${className}`}>
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 1} fill="none" stroke={strokeColor} strokeWidth="1" />
    </svg>
  </div>
)

export const KandinskyLines = ({ width = 200, height = 200, strokeColor = "#e5e5e5", className = "" }) => (
  <div className={`kandinsky-decor kandinsky-lines ${className}`}>
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1="0" y1={height} x2={width} y2="0" stroke={strokeColor} strokeWidth="0.5" />
      <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke={strokeColor} strokeWidth="0.5" />
      <line x1={width / 2} y1="0" x2={width / 2} y2={height} stroke={strokeColor} strokeWidth="0.5" />
    </svg>
  </div>
)
