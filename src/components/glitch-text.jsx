import React from 'react'
import { cn } from '../lib/utils'

const GlitchText = React.forwardRef(({ 
  className, 
  children, 
  glitchIntensity = 'medium',
  glitchSpeed = 'normal',
  ...props 
}, ref) => {
  const intensityClasses = {
    low: 'glitch-low',
    medium: 'glitch-medium', 
    high: 'glitch-high'
  }

  const speedClasses = {
    slow: 'glitch-slow',
    normal: 'glitch-normal',
    fast: 'glitch-fast'
  }

  return (
    <span
      ref={ref}
      className={cn(
        'glitch-text',
        intensityClasses[glitchIntensity],
        speedClasses[glitchSpeed],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})

GlitchText.displayName = 'GlitchText'

export { GlitchText }
