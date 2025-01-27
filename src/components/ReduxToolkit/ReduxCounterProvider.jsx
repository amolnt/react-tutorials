import { Provider } from "react-redux";
import store from "./store";
import ReduxCounter from "./ReduxCounter";

const ReduxCounterProvider = () => {
    return <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
        <Provider store={store}>
            <ReduxCounter />
        </Provider>
    </div>
}

export default ReduxCounterProvider;