import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import './css/App.css';

import ToDoItems from './components/ToDoItems'




function App() {

  const todoItems = [
    {
      name : 'Buy Milk',
      dueDate : '4/10/24'
    },

    {
      name : 'Go to College',
      dueDate : '4/10/24',
    },
    {
      name : 'Kunal',
      dueDate :  'current'
    }
  ]


  return (
        <div>
          <center className='todo-container'>
            <AppName/>
            <AddToDo/>
            <ToDoItems todoItems={todoItems}/>
           
          </center>

        </div>
   )
}


export default App
