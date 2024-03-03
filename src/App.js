import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
//components
import Header  from './components/Header'
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router Dom Sample</h1>
     
     <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
