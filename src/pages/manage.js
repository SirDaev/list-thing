import { useEffect,useState } from 'react';
import Link from 'next/link';
import MainEL from '../components/MainEL'
import List from '../components/List'

export default function Manage() {
  const [listItems,setListItems] = useState([]);

  useEffect(() => {
    const myAbortController = new AbortController();

    fetch("/api/items", {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setListItems(data);
    });

    return () => {
      myAbortController.abort();
    };
  },[]);

  function addListItem(event) {
    event.preventDefault();

    fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({
        name: event.target[0].value
      })
    })
    .then(res => res.json())
    .then(() => 
      fetch("/api/items", {
        method: "GET"
      })
    )
    .then(res => res.json())
    .then(data => {
      setListItems(data);
    });
  }

  return (
    <MainEL>
      <h1 className="text-2xl font-bold mb-4">Manage List Items</h1>
      <List items={listItems} showAll showStatus />
      <Link href="/" className="mt-auto">Home</Link>
    </MainEL>
  )
}
