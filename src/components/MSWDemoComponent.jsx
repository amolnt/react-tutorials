import React,{ useEffect, useState } from "react";

const SWRDemoComponent = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(response => setUsers(response))
            .catch(error => setError("Error fetching users"))
    }, [])

    return <div style={{    paddingTop: "15%", paddingLeft: "5%"}}>
        <h1>Users Lists</h1>
        {error && <p>{error}</p>}
        <ol>
        {
                users.map((user,index) => (
                    <li key={index}>{user.name}</li>
                ))
        }
        </ol>
    </div>
}

export default SWRDemoComponent;