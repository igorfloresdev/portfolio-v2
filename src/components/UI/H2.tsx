import React, { ReactNode } from 'react'

interface H2Props {
  children?: ReactNode
  className?: string
}

export default function H2({ children, className }: H2Props) {
  return <h2 className={`text-2xl font-bold ${className ? className : ''}`}>{children}</h2>
}
