import { getFromFirebase } from "../utilities/firebase";
import { HoldsMap } from "../components/HoldsMap/HoldsMap";
import { useEffect, useState } from "react";
import { Problem } from "../state";

export const Old = () => {
  const [boulders, setBoulders] = useState<Problem[]>([new Problem()]);
  const [count, setCount] = useState(0);

  const loadData = async () => {
    const oldBoulders = await getFromFirebase();
    setBoulders(oldBoulders);
  };

  const handleCountIncrease = () => {
    setCount((prev) => {
      if (prev < boulders.length - 1) {
        return prev + 1;
      } else return 0;
    });
  };

  const handleCountDecrease = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else return boulders.length - 1;
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1 className='boulder-name'>
        <span className='clickable' onClick={handleCountDecrease}>{"<<"} </span>
        {`${boulders[count].name} - ${boulders[count].grade}`}
        <span className='clickable' onClick={handleCountIncrease}> {">>"}</span>
      </h1>
      <h3 className='boulder-author'>{boulders[count].author}</h3>
      <HoldsMap boulder={boulders[count]} />
    </>
  );
};
