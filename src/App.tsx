import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import StartScreen from "./components/startScreen/StartScreen";
import Programs from "./components/Programs/Programs";
import OneProgram from "./components/Programs/OneProgram";
import KartsTraining from "./components/pageInfo/OrderTraining/kartsTraining";
import WhyUsKarts from "./components/pageInfo/WhyUs/WhyUsKarts";
import OurProgramms from "./components/pageInfo/OurProgramms/OurProgramms";
import Consultation from "./components/pageInfo/Consultation/Consultation";

function App() {
  return (
    <>
      <div>
        <Header />
        
        
        <Routes>

          <Route path="/" element={<StartScreen />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:categoryId" element={<Programs />} />
          <Route path="/program/:id" element={<OneProgram />} />
          <Route path="/karts" element={<KartsTraining />} />
          <Route path="/kart" element={<WhyUsKarts />} />
          <Route path="/pro" element={<OurProgramms />} />
          <Route path="/consult" element={<Consultation />} />

          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
