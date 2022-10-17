import "./css/main.css";
import DisplayTodo from "./components/DisplayTodo";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <Todos />
        <DisplayTodo />
    </div>
  );
}

export default App;
