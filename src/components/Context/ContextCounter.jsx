import { MyProvider } from "./MyContext"
import ChildComponent from "./ChildComponent"

const ContextCounter = () => {
    return <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
        <MyProvider>
            <ChildComponent />
        </MyProvider>
    </div>
}

export default ContextCounter;