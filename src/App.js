// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);

//   const handleAddTask = () => {
//     if (!input.trim()) return;
//     if (editId !== null) {
//       setTasks(tasks.map((task, i) => (i === editId ? input : task)));
//       setEditId(null);
//     } else {
//       setTasks([...tasks, input]);
//     }
//     setInput("");
//   };

//   const handleEdit = (index) => {
//     setInput(tasks[index]);
//     setEditId(index);
//   };

//   const handleDelete = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const handleClearAll = () => {
//     if (window.confirm("Are you sure you want to delete all tasks?")) {
//       setTasks([]);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>📝 React To-Do App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter task..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleAddTask}>{editId !== null ? "Update" : "Add"}</button>
//       </div>

//       {tasks.length > 0 && (
//         <ul className="task-list">
//           {tasks.map((task, index) => (
//             <li key={index}>
//               <span>{task}</span>
//               <div className="btns">
//                 <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
//                 <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {tasks.length > 0 && (
//         <button className="clear-all" onClick={handleClearAll}>
//           Delete All
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;







import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (!input.trim()) return;
    if (editId !== null) {
      setTasks(tasks.map((task, i) => (i === editId ? input : task)));
      setEditId(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditId(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>📝 React To-Do App</h1>
      </header>

      <main>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddTask}>
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>

        {tasks.length > 0 && (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <div className="btns">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {tasks.length > 0 && (
          <button className="clear-all" onClick={handleClearAll}>
            Delete All
          </button>
        )}
      </main>

      <footer>
        <p>Developed by Abdul Rehman © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
