import  Login  from "./components/Login";
import  Home  from "./components/Home";
import  Solicitudes  from "./components/Solicitudes";
import  ProtectedRoute  from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useState } from 'react'

function App() {

  const [isAllowed, setIsAllowed] = useState(true)

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
  }

window.addEventListener('blur', () => {
  document.title = '¡No te vayas! ¡Vuelve! 😱'
})

window.addEventListener('focus', () => {
  document.title = 'Dimitri Lagares Portafolio'})

  return (
    <>
    <div>
      <BrowserRouter >
        <Routes>
        <Route element={<ProtectedRoute  isAllowed={isAllowed}/>}>
          <Route path="/solicitudes" element={<Solicitudes/>} />
          </Route>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<Navigate to={'/'}/>}/>
          <Route path='/inicio-sesion' element={<Login childToParentData={functionToGetchildData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
