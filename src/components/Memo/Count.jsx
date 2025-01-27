import React from "react";

const Count = () => {
    console.log("redered");
    return <>
        <h1>Hellow Count Component</h1>
    </>
}

export default React.memo(Count);