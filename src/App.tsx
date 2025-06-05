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
      <div className="relative z-0 bg-primary min-h-screen text-white overflow-hidden">
        {/* ✅ 背景图层 - 整页背景，z-[-10] 保证最底 */}
        <div className="absolute inset-0 z-[-10] bg-[url('src/assets/herobg.png')] bg-cover bg-no-repeat bg-center" />

        {/* ✅ 内容区块 - 顶部导航 & Hero */}
        <Navbar />
        <Hero />

        {/* ✅ 页面内容（About、Experience、Tech...） */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* ✅ 联系区块 + 星空 */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
