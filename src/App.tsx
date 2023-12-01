import { Navigate, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import SignIn from './components/Sign/SignIn'
import SignUp from './components/Sign/SignUp'
import StartScreen from "./components/startScreen/StartScreen";

function App() {
  return (
    <>
    <div>
      <Header/>
      <StartScreen/>
      <Footer/>
    </div>
    </>
  )
}

export default App
