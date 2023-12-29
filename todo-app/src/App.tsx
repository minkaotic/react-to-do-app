import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoItem } from './components/ToDoItem'
import { useState } from 'react'

function App() {
  const startingList = [
    { id: 1, order: 1, text: "render to do list", completed: true, important: true },
    { id: 2, order: 2, text: "enable adding more items", completed: false, important: true },
    { id: 3, order: 3, text: "ability to remove item", completed: true, important: true },
    { id: 4, order: 4, text: "ability to reorder list", completed: false, important: false },
    { id: 5, order: 5, text: "allow editing list item", completed: false, important: false },
    { id: 6, order: 6, text: "fix strikethrough bug when cancelling delete", completed: false, important: false },
  ]

  const [list, setList] = useState(startingList);

  function handleDelete(id: number) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>To Do List</h1>
      <hr></hr>
      <span>Add new item</span>
      <hr></hr>
      {list.map((listItem) =>
        <ToDoItem
          key={listItem.id.toString()}
          id={listItem.id}
          text={listItem.text}
          completed={listItem.completed}
          important={listItem.important}
          handleDelete={handleDelete} />
      )}

      <hr></hr>
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
