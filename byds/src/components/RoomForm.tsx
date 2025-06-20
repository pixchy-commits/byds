// src/components/RoomForm.tsx
'use client'

import { ReactNode, FormEvent } from 'react'

type RoomFormProps = {
  title: string
  onSubmit: (e: FormEvent) => void
  footer?: ReactNode
  children: ReactNode
}

export default function RoomForm({ title, onSubmit, children, footer }: RoomFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
      <button type="submit" className="w-full py-3 bg-black text-white rounded">
        {title}
      </button>
      {footer && <div className="text-center mt-2">{footer}</div>}
    </form>
  )
}
