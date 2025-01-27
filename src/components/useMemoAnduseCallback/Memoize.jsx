import { useCallback, useEffect, useMemo, useState } from "react";
import MemoizeChild from "./MemoizeChild";

const initialItems = new Array(50).fill(0).map((_, i) => {
  return {
    id : i,
    isSelected : i === 49
  }
})

const MemoizeCounter = () => {
  const [count, setCount] = useState(0);
  const [items, seItems] = useState(initialItems);
  // const [selectedItem, setSelectedItem] = useEffect(0);

  // console.log(items)
  
  const addAmount = useCallback((amount) => {
      setCount(prevState => prevState + amount)
  }, [])

  let selectedItem = useMemo(() => {
    return items.find(item => item.id == count);
  }, [items, count])  
  // console.log(selectedItem)

  return (
    <div style={{ paddingTop: "15%", paddingLeft: "5%" }}>
      
      <p>Selectd Item : {selectedItem?.id}</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>

      <MemoizeChild addAmount={addAmount}/>
    </div>
  );
};

export default MemoizeCounter;
