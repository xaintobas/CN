import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Connect from "./pages/Connect";
import AllTrainings from "./pages/AllTrainings";
import ITSupport from "./pages/ITSupport";
import TechSolutions from "./pages/TechSolutions";
import CorporateTraining from "./pages/CorporateTraining";
import Consulting from "./pages/Consulting";
import CourseDetail from "./pages/CourseDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/services/all-trainings" element={<AllTrainings />} />
        <Route path="/services/it-support" element={<ITSupport />} />
        <Route path="/services/tech-solutions" element={<TechSolutions />} />
        <Route
          path="/services/consulting-and-procurement"
          element={<Consulting />}
        />
        <Route
          path="/services/corporate-training"
          element={<CorporateTraining />}
        />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Connect from "./pages/Connect";
// import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Career from "./pages/Career";
// import AllTrainings from "./pages/AllTrainings";
// import ITSupport from "./pages/ITSupport";
// import TechSolutions from "./pages/TechSolutions";
// import CorporateTraining from "./pages/CorporateTraining";
// import Consulting from "./pages/Consulting";
// import CourseDetail from "./pages/CourseDetail";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/connect" element={<Connect />} />
//         <Route path="/services/all-trainings" element={<AllTrainings />} />
//         <Route path="/services/it-support" element={<ITSupport />} />
//         <Route path="/services/tech-solutions" element={<TechSolutions />} />
//         <Route
//           path="/services/consulting-and-procurement"
//           element={<Consulting />}
//         />
//         <Route
//           path="/services/corporate-training"
//           element={<CorporateTraining />}
//         />
//         <Route path="/courses/:id" element={<CourseDetail />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
