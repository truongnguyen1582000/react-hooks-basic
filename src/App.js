import React, { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || [] // if localStorage dont have todo_list : set todoList= []
  );

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1, // current page
    _limit: 10, // limit item
    totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fecthPostList() {
      try {
        const paramsString = queryString.stringify(filters); // convert object filter to params
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPagination(pagination);
        setPostList(data);
      } catch (error) {
        alert(error.message);
      }
    }

    fecthPostList();
  }, [filters]);

  function handleTodoClick(todo) {
    // after receive todo from subclass
    const index = todoList.findIndex((x) => todo.title == x.title); // find the todo index in todoList
    const newTodoList = [...todoList]; // immutibility
    newTodoList.splice(index, 1); // delete 1 item at index
    setTodoList(newTodoList); //set state
    localStorage.setItem("todo_list", JSON.stringify(newTodoList));
  }

  function handleTodoFormSubmit(formValues) {
    // after receive fromValues from subclass
    console.log(formValues);
    const newTodoList = [...todoList];
    newTodoList.push(formValues);
    setTodoList(newTodoList);
    localStorage.setItem("todo_list", JSON.stringify(newTodoList));
  }

  function handlePageChang(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    console.log("New filters: ", newFilters);

    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="app">
      <h1>Hello World</h1>
      <div className="app-sub">
        <h2>Test SCSS</h2>
      </div>
      <MagicBox />
      <Clock />
      <ColorBox></ColorBox>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChang} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
    </div>
  );
}

export default App;
