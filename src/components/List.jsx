import { useState } from 'react';

export default function List() {
  const [items,setItems] = useState([
    "Bananas",
    "Fresh Thyme Peanut Butter",
    "Spam Singles"
  ])

  return (
    <ul className="flex flex-col space-y-4 w-full max-w-md">
      {items.map((item, index) => {
        return (
          <li key={index} className="text-md border-2 border-slate-500">
            <button className="w-full text-left p-2">{item}</button>
          </li>
        )
      })}
    </ul>
  )
}
