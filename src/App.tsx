import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import StartScreen from "./components/startScreen/StartScreen";
import Programs from "./components/Programs/Programs";
import OneProgram from "./components/Programs/OneProgram";
import { useSelector } from "react-redux";
import MyPrograms from "./components/MyPrograms/MyPrograms";
import Lessons from "./components/Lessons/Lessons";
import OneLesson from "./components/Lessons/OneLesson";
import AboutUs from "./components/aboutUs/aboutUs";

function App() {
  const token = useSelector((state) => state.application.token);

  return (
    <>
      <div>
        <Header />
        <Routes>
          {token ? (
            <>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/signup" element={<Navigate to="/" />} />
              <Route path="/mycourse" element={<MyPrograms />} />
              <Route path="/mycourse/:programId" element={<Lessons />} />
              <Route path="/lessons/:program/:id" element={<OneLesson/>} />
            </>
          ) : (
            <>
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mycourse" element={<Navigate to="/login" />} />
            </>
          )}
          <Route path="/" element={<StartScreen />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:categoryId" element={<Programs />} />
          <Route path="/program/:program" element={<OneProgram />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
