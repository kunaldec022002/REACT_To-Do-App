import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import AddToDoItem from "./components/AddToDoItem";
import AddToDoItem2 from "./components/AddToDoItem2";
import './css/App.css';



function App() {


  return (
        <div>
          <center className='todo-container'>
            <AppName/>
            <AddToDo/>

            <div className="items-container">

              <AddToDoItem/>
              <AddToDoItem2/>

            </div>
           
          </center>

        </div>
   )
}


export default App
