import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function AllUsers() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:5724/admin/fetch-users',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const result = await response.data;
                setUsers(result);
            } catch (err) {
                console.log(err);
            }
        }

        if (token) {
            getUsers();
        } else {
            alert('Please login as Admin to view all users');
            navigate('/login');

        }
    }, [token, navigate]);

    return (
        <>
            <Sidebar />
            <h1>All Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope="col">Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.address}</td>
                                <td>{user.pincode}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
