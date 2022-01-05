import "./CustomLink.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const CustomLink = ({
  to,
  children,
}: {
  to: string;
  children: string;
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={to}
      className={match ? "link link__active" : "link link__not-active"}
    >
      {children}
    </Link>
  );
};
