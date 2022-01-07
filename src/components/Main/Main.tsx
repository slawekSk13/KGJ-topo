import "./Main.css";
import { IMainProps } from "./MainTypes";
export const Main = ({ children }: IMainProps) => (
  <main className="main" id="main">
    {children}
  </main>
);
