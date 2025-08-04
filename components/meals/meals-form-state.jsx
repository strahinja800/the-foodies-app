'use client'

import { useFormStatus } from 'react-dom'

export default function MealsFormStatusButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending}>
      {pending ? 'Sharing Meal...' : 'Share Meal'}
    </button>
  )
}
