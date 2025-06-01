import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen text-white">
        {/* 背景图层 */}
        <div className="bg-[--bg-hero] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* 内容区块 */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* 联系表单 + 星空 */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
