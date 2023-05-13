import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();

  switch (request.method) {
    case 'GET':
      const items = await client.sql`SELECT * FROM items ORDER BY id;`;
      response.status(200).json(items.rows)
      break
    case 'POST':
      try {
        const body = JSON.parse(request.body);
        const name = body.name;
        await client.sql`INSERT INTO items (Name) VALUES (${name});`;
        response.status(200).json({message: `${name} added.`})
      } catch (error) {
        response.status(500).json({error})
      }
      break
    default:
      response.setHeader('Allow', ['GET','POST'])
      response.status(405).end(`Method ${request.method} Not Allowed`)
  }
}
