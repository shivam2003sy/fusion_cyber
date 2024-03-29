"use client"

import React from "react"

export default function Button({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode
  className?: string
  [key: string]: any
}>) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}

