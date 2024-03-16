import AppName from "./components/AppName"


function App() {


  return (
        <div>
          <center className='todo-container'>
            <AppName/>

            <div class="container text-center">
              <div class="row">
                <div class="col-6">
                  <input type="text" placeholder='Enterr Todo here' />
                </div>
                <div class="col-4">
                  <input type='date'/>
                </div>
                <div class="col-2">
                 <button type="button" class="btn btn-success">Add</button>
                </div>
              </div>
            </div>
            <br/>

            <div class="container text-center">
              <div class="row">
                <div class="col-6">
                 Buy Milk
                </div>
                <div class="col-4">
                  4/10/2023
                </div>
                <div class="col-2">
                 <button type="button" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
            <br/>

            <div class="container text-center">
              <div class="row">
                <div class="col-6">
                 Go to College
                </div>
                <div class="col-4">
                  4/10/2023
                </div>
                <div class="col-2">
                 <button type="button" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>

            

          </center>

        </div>
   )
}


export default App
