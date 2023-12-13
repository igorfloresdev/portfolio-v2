import Image from 'next/image'
import React from 'react'
import LightBulb from './light-bulb.svg'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className ? className : ''}`}>
      <h1 className='text-3xl uppercase font-bold'>igorfloresdev</h1>
      <Image className='w-12 -mt-2' src={LightBulb} alt='Lampada acesa amarela' />
    </div>
  )
}
