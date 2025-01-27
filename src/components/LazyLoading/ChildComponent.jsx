const ChildComponent = () => {
    if(Math.random() > 0.5) {
        throw new Error("Error");
    }
    return <>
        <h1>Child Component</h1>
    </>
}

export default ChildComponent;