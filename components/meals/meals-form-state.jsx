'use client'

import { useFormState } from 'react-dom'

export default function MealsFormStatusButton() {
  const { pending } = useFormState()

  return <button>{pending ? 'Sharing Meal...' : 'Share Meal'}</button>
}
