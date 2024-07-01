import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import View from './Frontend/View'
import Edit from './Frontend/Edit'
import Create from './Frontend/Create'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/Create'element={<Create/>}></Route>
        <Route path='/Edit/:id'element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
