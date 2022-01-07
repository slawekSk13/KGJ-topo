import { HashRouter, Route, Routes } from "react-router-dom";

import { Menu } from "./views/Menu/Menu";
import { Old } from "./views/Old";
import { Home } from "./views/Home";
import { Login } from "./views/Login";

import { Main } from "./components/Main/Main";

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<Old />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
    </HashRouter>
  );
};
