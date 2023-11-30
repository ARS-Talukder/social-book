import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/SignUp/Login';

function App() {

  return (
    <div>
      <h2 className='text-4xl font-bold'>Shadhin</h2>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
