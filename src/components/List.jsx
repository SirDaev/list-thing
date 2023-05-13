'use client';

export default function List({
  edit,
  items = [],
  showAll = false,
  showStatus = false
}) {

  return (
    <ul className="flex flex-col space-y-4 w-full max-w-md">
      {items.map((item) => {
        if(showAll || (!showAll && item.active)) {
          return (
            <ListItem key={item.id} item={item} showStatus={showStatus} edit={edit} />
          )
        }

        return null;
      })}
    </ul>
  )
}

function ListItem({
  edit,
  item,
  showStatus
}) {

  function extraClasses() {
    if(showStatus) {
      return item.active ? "border-r-[20px] border-r-green-600" : "border-r-[20px] border-r-neutral-500"
    }

    return "";
  }

  return (
    <li
      className={`text-md border-2 border-slate-800 ${extraClasses()}`}
      onClick={() => edit(item.id)}
    >
      <button className="w-full text-left p-2">{`[${item.quantity}] ${item.name}`}</button>
    </li>
  )
}
