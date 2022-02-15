import React, { useState } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import Background from "./Background";
import "./App.css";

const useLocalStorage = (item, value) => {
  let todosItem;

  if(!localStorage.getItem(item)){
    localStorage.setItem(item,JSON.stringify(value));
    todosItem = [];
  }else{
    todosItem = JSON.parse(localStorage.getItem(item));
  }

  const [items, setItems] = useState(todosItem);

  const saveItem = (newItems) =>{
    localStorage.setItem(item, JSON.stringify(newItems))
    setItems(newItems)
  }

  return [items,saveItem]
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage("TODOS_V1",[])
  const [search, setSearch] = useState("");

  const total = todos.length;
  const finish = todos.filter(todo => todo.complete).length;

  let searchList = []

  if(search.length == 0){
    searchList = todos;
  }else{
    searchList = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
  }

  const completeTodo = (index) => {
    const newList = [...todos]
    newList[index].complete = !newList[index].complete
    saveTodos(newList)
  }

  const saveTodo = (todo) => {
    const newList = [...todos]
    newList.push({
      complete:false,
      text : todo,
    })
    saveTodos(newList)
  }

  return (
    <div className="container">
      <Background />
      <div className="content">
        <div className="left">
          <CreateTodoButton save={saveTodo}/>
        </div>
        <div className="right">
          <TodoCounter total={total} finish={finish}/>
          <TodoSearch search={search} setSearch={setSearch} />
          <TodoList>
            {searchList.map((todo, index) => (
              <TodoItem key={index} todo={todo} index={index + 1} onComplete={() => completeTodo(index)}/>
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
