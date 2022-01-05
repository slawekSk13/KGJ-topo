
import { Menu } from "./components/Menu/Menu";

import { Old } from "./views/Old";

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Main } from "./components/Main/Main";

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<Old />} />
        </Routes>
      </Main>
    </HashRouter>
  );
};
