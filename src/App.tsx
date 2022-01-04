
import { Menu } from "./components/Menu/Menu";

import { Old } from "./views/Old";

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <main className="main" id='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<Old />} />
        </Routes>
      </main>
    </HashRouter>
  );
};
