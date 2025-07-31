import Link from 'next/link'

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Welcome to the Meals Page!
      </h1>
      <p>
        <Link href='../'>Home</Link>
      </p>
    </main>
  )
}
