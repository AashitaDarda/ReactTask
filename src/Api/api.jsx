import React, { useState } from "react";

const Api = () =>{
    const[users, setUsers] = useState([])

    const fetchData = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            return response.json()
        }) 
        .then(data => {
            setUsers(data)
        })
        
    }
    return(
        <>
            <div className="text-center apiInfo" >
                <h1 className="my-5 py-5 text-center ">Fetching and Displaying data through Api</h1>
                <hr />
                <button className="btn btn-outline-warning btn-lg" onClick={fetchData}>Display Users</button> <br /><br />
                <br />
                <table style={{border: '1px solid aliceblue',borderCollapse: 'collapse', width: "100%", height:"100%"}} >
                    <thead>
                        <h5 className="text-center">Displaying the data which is fetched by Api</h5>
                    </thead>
                    <tr>
                        <th className="text-center" style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse',height:'50px'}}>Id</th>
                        <th className="text-center" style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}}>Name</th>
                        <th className="text-center" style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}}>Email</th>
                        <th className="text-center" style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}}>City</th>
                        <th className="text-center" style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}}>Phone Number</th>

                    </tr>
                    {users.length > 0 &&(
                        <tbody>
                                {users.map(user => (
                                    <>
                                        <tr>
                                            <td style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse', height:'50px'}} className="text-center" key={user.id}>{user.id}</td>
                                            <td style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}} className="text-center" >{user.name}</td>
                                            <td style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}} className="text-center" >{user.email}</td>
                                            <td style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}} className="text-center" >{user.address.city}</td>
                                            <td style={{borderBottom: '1px solid aliceblue',borderCollapse: 'collapse'}} className="text-center" >{user.phone}</td>
                                        </tr>

                                    </>
                                
                                ))}
                        </tbody>
                        
                    )}
                    <tfoot>
                        <h5 className="text-secondary text-center">All data is shown successfully</h5>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Api