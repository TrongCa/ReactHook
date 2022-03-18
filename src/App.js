import React, {useState } from 'react';
import './App.scss';
import Hero from './components/Hero'
// import Pagination from './components/ColorBox/Pagination';
// import queryString from 'query-string'
// import PostList from './components/ColorBox/PostList';
// import PostFilterForm from './components/PostFilterForm';
// import Clock from './components/Clock';
// import BetterClock from './components/BetterClock';
// import MagicBox from './MagicBox';
// import TodoForm from './components/ColorBox/TodoForm';
// import TodoList from './components/ColorBox/TodoList';

function App() {
  // const [todoList, setTodoList] = useState([
  //   {id:1,
  //   title:'AMD',
  //   },
  //   {id:2,
  //   title:'FLC',
  //   },
  //   {id:3,
  //   title:'MBB',
  //   },
  // ]);
  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows:1,
  // });

  // const [filters, setFilters] = useState({
  //   _limit:10,
  //   _page:1,
  // })

  // useEffect(()=>{
  //   async function fetchPostList(){
  //     try {
  //     const paramsString = queryString.stringify(filters);
  //     const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //     const response = await fetch(requestUrl);
  //     const responseJSON = await response.json();
  //     const { pagination} = responseJSON
      // const  data  = responseJSON;
      // const  pagination   = responseJSON;
      // console.log('aa',pagination);
  //     setPostList(responseJSON);
  //     setPagination(pagination);
  //     } catch (error) {
  //       console.log('Loi', error.message);
  //     }
      
  //   }
  //   fetchPostList();
  // }, [filters]);


  // useEffect(()=>{
  //   console.log('TODO list effect');
  // });

  // function handlePageChange(newPage) {
  //   console.log('New page: ', newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // function handleTodoClick(todo){
  //   console.log(todo);

  //   const index = todoList.findIndex(x=>x.id ===todo.id);
  //   if(index<0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues){
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  // function handleFilterChange(newFilters){
  //   console.log('new filters:', newFilters);
  //   setFilters({
  //     ...filters,
  //     _page:1,
  //     title_like:newFilters.searchTerm,
  //   });
  // }
  
  // const [showClock, setShowClock] = useState(true);
  const [count, setCount]= useState(0);

  const handleHeroClick=()=>{}
  return ( 
  
    <div className="app">
     <h1>Welcome to React Hooks!</h1>

       {/* <MagicBox/> 
     {showClock && <Clock/>}
      <BetterClock/> */}
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Increase</button> 
      <Hero name = "Heellllooooo" onClick={handleHeroClick}/>
    </div>
   
    // <TodoForm onSubmit={handleTodoFormSubmit}/>
      // <TodoList
      // todos={todoList}
      // onTodoClick={handleTodoClick}/> 
      // <PostFilterForm
      // onSubmit={handleFilterChange}
      // />
      // <PostList
      // posts={postList}
      // />
      // <Pagination
      // pagination={pagination}
      // onPageChange = {handlePageChange}/> 

  
  );
}

export default App;
