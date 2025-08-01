import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating a delay for demonstration purposes
  return db.prepare('SELECT * FROM meals').all() // <== Getting all rows from the meals table
}
