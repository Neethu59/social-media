
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter,Routes,Route} from"react-router-dom";
// import Toolbar from './pages/Toolbar/Toolbar';
import Sidebar from './pages/Sidebar/Sidebar';
import Toolbar from './pages/Toolbar/Toolbar';
import Middlebar from './pages/Middlebar/Middlebar';
import Rightsidebar from './pages/Rightsidebar/Rightsidebar';
import Home from './component/Home';
function App() {
  return (
    <BrowserRouter>
     <Routes>
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/"element={<Home/>}/>
      {/* <Routes path="/"element={<Sidebar/>}/> */}
      {/* <Routes path="/"element={<Middlebar/>}/> */}
      {/* <Routes path="/"element={<Rightsidebar/>}/> */}
  </Routes>
   </BrowserRouter>
    
  );
}

export default App;
