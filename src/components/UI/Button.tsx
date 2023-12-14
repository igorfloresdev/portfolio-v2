import React, { ReactNode } from 'react'

interface ButtonProps {
  className?: string
  children?: ReactNode
}

export default function Button({ className, children }: ButtonProps) {
  return <button className={`uppercase btn ${className ? className : ''}`}>{children}</button>
}
