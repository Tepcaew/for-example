import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import StartScreen from "./components/startScreen/StartScreen";
import Programs from "./components/Programs/Programs";
import OneProgram from "./components/Programs/OneProgram";
import { useSelector } from "react-redux";
import MyPrograms from "./components/MyPrograms/MyPrograms";
import Lessons from "./components/Lessons/Lessons";
import OneLesson from "./components/Lessons/OneLesson";
import KartsTraining from "./components/pageInfo/OrderTraining/KartsTraining";
import WhyUsKarts from "./components/pageInfo/WhyUs/WhyUsKarts";
import OurProgramms from "./components/pageInfo/OurProgramms/OurProgramms";
import Consultation from "./components/pageInfo/Consultation/Consultation";
import Consul from "./components/Consul/Consul"

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
              <Route
                path="/lessons/:programId/:lessonId"
                element={<OneLesson />}
              />
                <Route path="/consults" element={<Consul />} />
            </>

            // роут для страницы консультаций - в этом компоненте через useSelector достаем консультации и выводим через мап
          ) : (
            <>
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mycourse" element={<Navigate to="/login" />} />
            </>
          )}
          <Route path="/" element={<StartScreen />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:categoryId" element={<Programs />} />
          <Route path="/program/:program" element={<OneProgram />} />
          <Route path="/karts" element={<KartsTraining />} />
          <Route path="/kart" element={<WhyUsKarts />} />
          <Route path="/pro" element={<OurProgramms />} />
          <Route path="/consult" element={<Consultation />} />
          <Route path="/program/:program" element={<OneProgram />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
