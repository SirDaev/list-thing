'use client';
export default function List({items = []}) {

  return (
    <ul className="flex flex-col space-y-4 w-full max-w-md">
      {items.map((item) => {
        return (
          <li key={item.id} className="text-md border-2 border-slate-500">
            <button className="w-full text-left p-2">{`[${item.quantity}] ${item.name}`}</button>
          </li>
        )
      })}
    </ul>
  )
}
