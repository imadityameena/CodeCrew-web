import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Body from "./components/Body"



function App() {
 

  return (
    <BrowserRouter basename="/">

      <Routes>
        <Route path="/" element = {<Body/>}>
        <Route path="/login" element = {<Login/>}/>
        <Route path="profile" element = {<Profile/>}/>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
