import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchTodos } from './redux/slices/todo';


function App() {

const dispatch = useAppDispatch();
const storeState = useAppSelector( state => state.todo);
const data:any = storeState.data;
console.table(data ?? "---");


if(storeState.isLoading){
  return <h1>Loading....</h1>
}


  return (
    <div className="App">
   
   {!storeState.isError &&  (<>
   
    <h1>Hello Redux Thunk</h1>
    <button onClick={  e => dispatch(fetchTodos()) }>Fetch Todos</button>
   
   
    {
          data && data.map((e:any)=> (
          
          <li key={e.id}>{e.title}</li>
          
          ) ) 
        }
        

   </>)}
    
     
        </div>
  );
}

export default App;
