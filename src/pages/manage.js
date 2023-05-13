import { useEffect,useState } from 'react';
import Link from 'next/link';
import MainEL from '../components/MainEL'
import List from '../components/List'
import Modal from '../components/Modal'
import EditForm from '../components/EditForm'

export default function Manage() {
  const [listItems,setListItems] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [currentItem,setCurrentItem] = useState({
    id: -1,
    image: null,
    name: "",
    quantity: 0,
    active: false
  });

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

  function edit(id) {
    setCurrentItem(listItems.filter(item => item.id === id)[0]);
    setModalOpen(true);
  }

  function editListItem(event) {
    event.preventDefault();

    const id = event.target[2].value;

    fetch("/api/items/"+id, {
      method: "PATCH",
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
      <List
        items={listItems}
        edit={edit}
        showAll
        showStatus
      />
      <Link href="/" className="mt-auto">Home</Link>
      <Modal show={modalOpen} setShow={setModalOpen}>
        <EditForm item={currentItem} setItem={setCurrentItem} submit={editListItem} />
        <button onClick={() => {}} className="mt-2 mb-7 px-5 py-1 border-2 bg-red-100">Delete</button>
      </Modal>
    </MainEL>
  )
}
