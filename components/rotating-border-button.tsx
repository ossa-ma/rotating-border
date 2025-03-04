import type React from "react"

interface RotatingBorderButtonProps {
  children: React.ReactNode
  className?: string
  // Button customization
  buttonSize?: "sm" | "md" | "lg" | "xl"
  buttonColor?: string
  textColor?: string
  // Border customization
  borderWidth?: number
  borderColor?: string
  borderOpacity?: number
  rotationSpeed?: number
  // Border highlight customization
  highlightPercentage?: number
  highlightStartDegree?: number
}

export default function RotatingBorderButton({
  children,
  className = "",
  buttonSize = "md",
  buttonColor = "bg-slate-950",
  textColor = "text-white",
  borderWidth = 1,
  borderColor = "#FFFF00",
  borderOpacity = 100,
  rotationSpeed = 2,
  highlightPercentage = 50,
  highlightStartDegree = 90,
}: RotatingBorderButtonProps) {
  // Calculate button size classes
  const sizeClasses = {
    sm: "h-8 text-xs",
    md: "h-12 text-sm",
    lg: "h-16 text-base",
    xl: "h-20 text-lg",
  }[buttonSize]

  // Calculate border width
  const paddingSize = `p-[${borderWidth}px]`

  // Create the conic gradient with customizable highlight
  const conicGradient = `bg-[conic-gradient(from_${highlightStartDegree}deg_at_50%_50%,${borderColor}_0%,transparent_${highlightPercentage}%,${borderColor}_100%)]`

  // Create animation style with customizable speed
  const animationStyle = {
    animation: `spin ${rotationSpeed}s linear infinite`,
  }

  return (
    <button className={`relative inline-flex overflow-hidden rounded-full ${paddingSize} ${sizeClasses} ${className}`}>
      <span className={`absolute inset-[-1000%] ${conicGradient}`} style={animationStyle}></span>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${buttonColor} ${textColor} px-3 py-1 font-medium backdrop-blur-3xl`}
      >
        {children}
      </span>
    </button>
  )
}

