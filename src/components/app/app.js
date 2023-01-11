import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink drisnia", importrant: false, id: 1 },
    { label: "Make React App", importrant: true, id: 2 },
    { label: "Have a lunch", importrant: false, id: 3 },
    { label: "Shit with ass", importrant: false, id: 4 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
