import { Inter } from 'next/font/google'
import List from '../components/List'

const inter = Inter({ subsets: ['latin'] })

// async function addItem(name) {
//   console.log(name)
//   fetch("/api/addItem", {
//     method: "POST",
//     body: JSON.stringify({
//       name: name
//     })
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data)
//   }).catch((error) => {
//     console.log(error);
//   });
// }



async function addItem(name) {
  const res = await fetch("/api/addItem", {
    method: "POST",
    body: JSON.stringify({
      name: name
    })
  });

  const data = await res.json();
  return data;
}

export default function Home() {
  const add = function(event) {
    event.preventDefault();
    addItem(event.target[0].value).then(
      (data) => console.log(data)
    );
  }

  return (
    <main className={`flex min-h-screen flex-col items-center px-4 py-24 ${inter.className}`}>
      <h1 className="text-2xl font-bold mb-4">List Thing</h1>
      <List />
      <form id="form" action="" onSubmit={add}>
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
