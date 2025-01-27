import { useContext } from "react"
import { MyContext } from "./MyContext";

const ChildComponent = () => {
    const {count, setCount} = useContext(MyContext);

    return <>
        <p>Count : {count}</p>
        <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
    </>
}

export default ChildComponent;