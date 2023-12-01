import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/SignUp/Login';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import ResetPassword from './Components/SignUp/ResetPassword';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Components/SignUp/RequireAuth';

function App() {

  return (
    <div className='app_container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='resetpassword' element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
