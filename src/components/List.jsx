export default function List({items = []}) {
console.log('render list')
  return (
    <ul className="flex flex-col space-y-4 w-full max-w-md">
      {items.map((item, index) => {
        return (
          <li key={item.id} className="text-md border-2 border-slate-500">
            <button className="w-full text-left p-2">{`[${item.quantity}] ${item.name}`}</button>
          </li>
        )
      })}
    </ul>
  )
}
