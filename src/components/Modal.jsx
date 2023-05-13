export default function Modal({
  children,
  setShow,
  show
}) {

  return (
    <div
      id="overlay" className={`fixed inset-0 bg-gray-700 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center ${show ? '' : 'hidden'}`}>
      <dialog className="block relative w-96 h-96 bg-slate-200">
        <button
          className="absolute top-0 right-0 bg-blue-900 text-slate-100 p-2"
          onClick={() => setShow(false)}>Close</button>
          {children}
      </dialog>
    </div>
  )
}
