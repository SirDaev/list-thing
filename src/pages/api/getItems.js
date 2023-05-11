import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
  const items = await client.sql`SELECT * FROM Items;`;
  return response.status(200).json({items: items.rows});
}