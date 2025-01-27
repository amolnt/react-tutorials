import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const ReduxCounter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return <>
        <p>Count : {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>    
    </>
}

export default ReduxCounter;