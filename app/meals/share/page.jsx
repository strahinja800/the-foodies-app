import Link from 'next/link'

export default function ShareMealsPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Share Your Meals with the Community!
      </h1>
      <button>Share a Meal</button>
      <p>
        <Link href='../'>Back to all Meals</Link>
      </p>
    </main>
  )
}
