import { useState } from "react";
import Count from "./Count";

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
            <Count />
            <p>Count : {count}</p>
            <button type="button" onClick={() => setCount(prevState => prevState+1)}>Increment</button>
            <button type="button" onClick={() => setCount(prevState => prevState-1)}>Decrement</button>
        </div>
    );
}

export default ReactMemo;