import React from 'react'
import { GlitchText } from './glitch-text'

const GlitchDemo = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl mb-8">
        <GlitchText glitchIntensity="high" glitchSpeed="fast" data-text="GLITCH TEXT DEMO">
          GLITCH TEXT DEMO
        </GlitchText>
      </h1>
      
      <div className="space-y-4">
        <p className="text-xl">
          <GlitchText glitchIntensity="low" glitchSpeed="slow" data-text="Low Intensity, Slow Speed">
            Low Intensity, Slow Speed
          </GlitchText>
        </p>
        
        <p className="text-xl">
          <GlitchText glitchIntensity="medium" glitchSpeed="normal" data-text="Medium Intensity, Normal Speed">
            Medium Intensity, Normal Speed
          </GlitchText>
        </p>
        
        <p className="text-xl">
          <GlitchText glitchIntensity="high" glitchSpeed="fast" data-text="High Intensity, Fast Speed">
            High Intensity, Fast Speed
          </GlitchText>
        </p>
      </div>
    </div>
  )
}

export default GlitchDemo

