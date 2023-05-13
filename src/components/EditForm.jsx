export default function EditForm({ item,setItem,submit }) {

  return (
    <form id="editForm" action="" onSubmit={submit}>
      <div>
        <label>
          <input
            name="name"
            id="nameId"
            type="text"
            placeholder="item name"
            value={item === undefined ? "" : item.name}
            className="px-3 py-1 ml-2 mt-2 border-2"
            onChange={(e) => setItem({...item,name: e.target.value})}
          />
        </label>
      </div>
      <div>
        <label>
          <textarea className="bg-slate-100 p-2 w-full" defaultValue="Item description goes here."></textarea>
        </label>
      </div>
      <div>
        <input type="text" className="hidden" value={item.id} onChange={() => {}} />
      </div>
      <div>
        <button type="submit" className="mt-2 mb-7 px-5 py-1 border-2 bg-green-100">Submit</button>
      </div>
    </form>
  )
}