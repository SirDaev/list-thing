import { Inter } from 'next/font/google'
import List from '../components/List'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function addListItem(event) {
    event.preventDefault();

    fetch("/api/addItem", {
      method: "POST",
      body: JSON.stringify({
        name: event.target[0].value
      })
    })
    .then(res => res.json())
    .then(() => 
      fetch("/api/getItems", {
        method: "GET"
      })
    )
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <main className={`flex min-h-screen flex-col items-center px-4 py-24 ${inter.className}`}>
      <h1 className="text-2xl font-bold mb-4">List Thing</h1>
      <List />
      <form id="form" action="" onSubmit={addListItem}>
        <div>
          <label>
            Add Item: 
            <input type="text" placeholder="item name" className="px-3 py-1 ml-2 mt-2 border-2"/>
          </label>
        </div>
        <div>
          <button type="submit" className="mt-2 mb-7 px-5 py-1 border-2">Submit</button>
        </div>
      </form>
    </main>
  )
}
