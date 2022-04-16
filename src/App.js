import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {AllRoutes} from "./AllRoutes"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
