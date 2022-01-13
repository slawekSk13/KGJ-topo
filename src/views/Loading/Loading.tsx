import { useEffect, useState } from "react";
import "./Loading.css";

export const Loading = () => {
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    let timer = 0;
    const intervalId = setInterval(() => {
      timer++;
      let dotCount = timer % 4;
      const dots = '.'.repeat(dotCount);
      setLoadingDots(dots);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div className="loading">Trwa załadunek{loadingDots}</div>;
};
