import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/SignUp/Login';
import Header from './Components/Header/Header';

function App() {

  return (
    <div className='app_container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
