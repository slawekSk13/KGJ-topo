import "./Menu.css";
import { CustomLink } from "../../components/CustomLink/CustomLink";
import { TooltipText } from "../../components/TooltipText/TooltipText";
import { MenuWrapper } from "../../components/MenuWrapper/MenuWrapper";
import { ESide } from "../../components/MenuWrapper/MenuWrapperTypes";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";

export const Menu = observer(() => {
  const { loggedUser } = useContext(StateContext);
  const loginLink = (
    <>
      <CustomLink to="/login">Zaloguj</CustomLink>
      <TooltipText
        className="tooltip-text__right"
        text="Zacznij rozmowę pozdrowieniami od wspólnych znajomych"
      />
    </>
  );
  const logoutLink = (
    <>
      <CustomLink to="/login">Wyloguj</CustomLink>
      <TooltipText
        className="tooltip-text__right"
        text="Zamknij za sobą drzwi"
      />
    </>
  );
  const profileLink = (
    <li>
      <CustomLink to="/profile">Profil</CustomLink>
      <TooltipText
        className="tooltip-text__right"
        text="Jak cię widzą, tak cię piszą"
      />
    </li>
  );
  return (
    <MenuWrapper side={ESide.LEFT}>
      <>
        <ul className="menu-list">
          <li>
            <ul>
              <li>
                <CustomLink to="/">Nowy</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Masz coś nowego?"
                />
              </li>
              <li>
                <CustomLink to="/old">Przeglądaj</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Sprawdź, czy jest coś nowego"
                />
              </li>
                {loggedUser.getUser() && profileLink}
              {/* <li>
                <CustomLink to="/stats">Statystyki</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Komu zgina się najlepiej w tym tygodniu?"
                />
              </li> */}
            </ul>
          </li>
          <li>{loggedUser.getUser() ? logoutLink : loginLink}</li>
        </ul>
      </>
    </MenuWrapper>
  );
});
