import React, { useState, useEffect }  from 'react';


const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/users?UserName=sam80')
            .then(res => res.json())
            .then(
                (data) => {
                    console.log("data-----",data)
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    console.log("error-----",error)
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.userName}
                    </li>
                ))}
            </ul>
        );
    }
}
export default Home;