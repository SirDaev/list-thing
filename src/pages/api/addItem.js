import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const body = JSON.parse(request.body);
  const name = body.name;
  const client = await db.connect();
 
  try {
    await client.sql`INSERT INTO Items (Name) VALUES (${name});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const items = await client.sql`SELECT * FROM Items;`;
  return response.status(200).json({items: items.rows});
}