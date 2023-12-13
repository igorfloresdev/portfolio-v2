import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src: string
  alt: string
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className='avatar'>
      <div className='w-36 rounded-full cursor-pointer ring ring-primary ring-offset-base-100 ring-offset-2'>
        <Image fill src={src} alt={alt} />
      </div>
    </div>
  )
}
