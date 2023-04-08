import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// ===================== Styles ====================================
import './App.css'; 
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = '' element={<Home/>}/>
          <Route path = '/register' element={<Register/>}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/products' element={<Products/>}/>

        </Routes>
      </Router>  
    
    </>

  );
}

export default App;
