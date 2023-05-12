import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
  const id = parseInt(request.query.id);

  switch (request.method) {
    case 'GET':
      const items = await client.sql`SELECT * FROM items WHERE id=${id};`;
      response.status(200).json(items.rows[0])
      break
    case 'DELETE':
     await client.sql`DELETE FROM items WHERE id=${id};`;
      response.status(200).json({message: `Item ${id} deleted.`})
      break
    default:
      response.setHeader('Allow', ['GET','DELETE'])
      response.status(405).end(`Method ${method} Not Allowed`)
  }
}
