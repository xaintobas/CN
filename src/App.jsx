import Header from "./components/Header";
import Footer from "./components/Footer";

import Connect from "./pages/Connect";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import WhatWeDo from "./pages/WhatWeDo";
import WhoWeAre from "./pages/WhoWeAre";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
