import type React from "react"

interface RotatingBorderProps {
  children: React.ReactNode
  className?: string
  // Border customization
  borderWidth?: number
  borderColor?: string
  borderOpacity?: number
  rotationSpeed?: number
  // Border highlight customization
  highlightPercentage?: number
  highlightStartDegree?: number
  // Shape customization
  borderRadius?: string
  // Additional styling
  containerClassName?: string
  contentClassName?: string
}

export default function RotatingBorder({
  children,
  className = "",
  borderWidth = 1,
  borderColor = "#FFFF00",
  borderOpacity = 100,
  rotationSpeed = 2,
  highlightPercentage = 50,
  highlightStartDegree = 90,
  borderRadius = "rounded-lg",
  containerClassName = "",
  contentClassName = "",
}: RotatingBorderProps) {
  // Create the conic gradient with customizable highlight
  // const conicGradient = `bg-[conic-gradient(from_${highlightStartDegree}deg_at_50%_50%,${borderColor}_0%,transparent_${highlightPercentage}%,${borderColor}_100%)]`

  // Create the conic gradient with customizable highlight, non-tailwind
  const conicGradient = `conic-gradient(from ${highlightStartDegree}deg at 50% 50%, ${borderColor} 0%, transparent ${highlightPercentage}%, ${borderColor} 100%)`

  // Fallback background for browsers that might not support conic gradients
  const fallbackBackground = `linear-gradient(${highlightStartDegree}deg, ${borderColor}, transparent)`

  return (
    <div
      className={`relative inline-flex ${borderRadius} ${className}`}
      style={{
        padding: `${borderWidth}px`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* <div className={`absolute inset-[-1000%] ${conicGradient}`} style={animationStyle}></div> */}
      {/* <div className={`relative h-full w-full ${borderRadius} ${contentClassName}`}>{children}</div> */}
      <div
        className="absolute"
        style={{
          inset: "-1000%", // Equivalent to inset-[-1000%]
          background: conicGradient,
          backgroundImage: conicGradient,
          // Create animation style with customizable speed
          animation: `spin ${rotationSpeed}s linear infinite`,
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <div
        className={`${borderRadius}`}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  )
}

