import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InteractiveHotspot = ({ position, size, question, answer, tooltipPosition = 'top' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipPositions = {
    top: 'bottom-full mb-4 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-4 left-1/2 -translate-x-1/2',
    left: 'right-full mr-4 top-1/2 -translate-y-1/2',
    right: 'left-full ml-4 top-1/2 -translate-y-1/2'
  };

  return (
    <div
      className="absolute cursor-pointer group transition-transform hover:scale-110 z-20"
      style={{
        ...position,
        width: size.width,
        height: size.height
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Invisible hotspot with subtle hover indicator */}
      <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-30 bg-[hsl(var(--miffy-yellow))] transition-opacity duration-300 animate-pulse"></div>

      {/* Tooltip with Q&A */}
      {showTooltip && (
        <Card className={`absolute ${tooltipPositions[tooltipPosition]} w-72 tooltip-card shadow-2xl border-2 z-50 bg-[hsl(var(--card))]/95 backdrop-blur-sm`}>
          <CardContent className="p-5">
            <div className="space-y-3">
              <p className="text-base font-semibold text-foreground" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {question}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export const MiffyScene = () => {
  const hotspots = [
    {
      // Top left Miffy (white with blue shirt)
      position: { top: '28%', left: '12%' },
      size: { width: '80px', height: '100px' },
      question: 'Where is Eva from?',
      answer: 'Purgatory (and from your dreams)',
      tooltipPosition: 'bottom'
    },
    {
      // Top right Miffy (white)
      position: { top: '15%', right: '8%' },
      size: { width: '90px', height: '110px' },
      question: 'What\'s does Eva\'s jobs?',
      answer: 'artist for different ysws | under nda | racecar staff/org/artist | clubs support onboarding review staff | scouts staff/org/artist | realityware review staff/artist | hackathon org | I.M.P.A.C.T head of activities',
      tooltipPosition: 'bottom'
    },
    {
      // Bottom left Miffy (blue shirt)
      position: { bottom: '15%', left: '15%' },
      size: { width: '85px', height: '105px' },
      question: 'What\'s Eva\'s credits for everything?',
      answer: 'you',
      tooltipPosition: 'top'
    },
    {
      // Bottom right Miffy
      position: { bottom: '12%', right: '12%' },
      size: { width: '75px', height: '95px' },
      question: 'What makes Eva happy?',
      answer: 'MIFFY, coffee, sleep, guitar, photography, fencing, drawing, running, games (nintendo based), pottery, clarinet, bassoon, marian, looking fine, cars/motorcycles, music, you',
      tooltipPosition: 'top'
    },
    {
      // Left coffee cup (blue outlined)
      position: { top: '18%', left: '20%' },
      size: { width: '70px', height: '90px' },
      question: 'What\'s Eva\'s favorite quote?',
      answer: '"if you sleep through life, they can never run after you"',
      tooltipPosition: 'right'
    },
    {
      // Right coffee cup (blue with beans text)
      position: { top: '52%', right: '15%' },
      size: { width: '75px', height: '95px' },
      question: 'What\'s Eva\'s mission?',
      answer: 'to eat and sleep my way through life',
      tooltipPosition: 'left'
    },
    {
      // ID Card center - my's photo area
      position: { top: '38%', left: '40%' },
      size: { width: '180px', height: '220px' },
      question: 'Who is Eva?',
      answer: 'why are you asking (im a spirtual being you poor humans cant even think to understand',
      tooltipPosition: 'bottom'
    },
    {
      // Right side of ID (text area)
      position: { top: '42%', right: '28%' },
      size: { width: '150px', height: '180px' },
      question: 'Eva\'s favorite hobby?',
      answer: 'drinking lattes',
      tooltipPosition: 'left'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full cover background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_d80cf960-0b87-4544-8cfa-f557342f00f7/artifacts/zfh2qcke_image.png)',
          backgroundSize: 'cover'
        }}
      >
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]/5"></div>
      </div>

      {/* Interactive hotspots */}
      {hotspots.map((hotspot, index) => (
        <InteractiveHotspot
          key={index}
          position={hotspot.position}
          size={hotspot.size}
          question={hotspot.question}
          answer={hotspot.answer}
          tooltipPosition={hotspot.tooltipPosition}
        />
      ))}

      {/* Bottom hint text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-[hsl(var(--card))]/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[hsl(var(--border))]">
          <p className="text-sm text-foreground text-center font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            hover over the miffies & coffee cups to learn more about eva! ✨
          </p>
        </div>
      </div>
    </div>
  );
};
