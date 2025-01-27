import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT" : 
            return {...state, count : state.count + 1};
        case "DECREMENT" : 
            return {...state, count : state.count -1}
        default :
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        count : 0
    })

    return <div style={{ paddingTop: "15%", paddingLeft: "5%" }}>
        <p>Count : {state?.count}</p>
        <button onClick={() => dispatch({type : "INCREMENT"})}>Increemnt</button>
        <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
    </div>
}

export default CounterReducer;