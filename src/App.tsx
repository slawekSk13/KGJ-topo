import { HashRouter, Route, Routes } from "react-router-dom";

import { Menu } from "./views/Menu/Menu";
import { Old } from "./views/Old";
import { Home } from "./views/Home";
import { Login } from "./views/Login";

import { Main } from "./components/Main/Main";
import { Profile } from "./views/Profile";
import { Loading } from "./views/Loading/Loading";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "./state/context";
import { ResetPassword } from "./views/ResetPassword";

export const App = observer(() => {
  const {loading} = useContext(StateContext);
  return (
    <HashRouter>
      <Menu />
      <Main>
        {loading.getLoading() ? <Loading /> : <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<Old />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes> }
      </Main>
    </HashRouter>
  );
});
