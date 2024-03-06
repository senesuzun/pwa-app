import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap'
export default function Users() {

    const [data, setData] = useState([])
    const [mode, setMode] = useState('online');
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                setData(result)
                localStorage.setItem("users", JSON.stringify(result))
            })
        }).catch(err => {
            setMode('offline')
            let collection = localStorage.getItem('users');
            setData(JSON.parse(collection))
        })
    }, [])


    const [permission, setPermission] = useState(
        "Notification" in window ? Notification.permission : "default"
      );
    async function requestPermission() {
        if ("Notification" in window) {
          const permission = await Notification.requestPermission();
          console.log(permission);
          setPermission(permission);
        }
      }
      async function sendNotification() {
        if ("Notification" in window && permission === "granted") {
          new Notification("Welcome on site");
          console.log("Notification sent");
        }
      }




    return (
        <div>
         <div className="flex flex-col gap-4">
        {permission !== "granted" && (
          <button
            className="bg-orange-400 px-6 py-3 rounded-lg font-medium font-mono"
            onClick={requestPermission}
          >
            Ask for permission
          </button>
        )}

        <button
          className="bg-blue-400 px-6 py-3 rounded-lg font-medium font-mono"
          onClick={sendNotification}
        >
          Notify me
        </button>
      </div>
            <div>
                {
                    mode === 'offline' ?
                        <div class="alert alert-warning" role="alert">
                            you are in offline mode or some issue with connection
                        </div>
                        : null
                }
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
        </div>
    );

}




