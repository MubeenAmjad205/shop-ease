'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Users() {
    const [users, setUsers] = useState([]);

    // Fetch users data (replace with actual API or static data)
    useEffect(() => {
        const fetchUsers = async () => {
          let response = await axios.get('api/auth')
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    // Handle Edit and Delete Actions
    const handleEdit = (id) => {
        alert(`Edit user with ID: ${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            let response = await axios.delete(`api/auth/${id}`)
            if(response.status === 200){
                // alert("User deleted successfully");
                setUsers(users.filter((user) => user._id !== id));
                toast.success("User deleted successfully");
            }else{
                // alert("User not deleted");
                toast.error("User not deleted, Try again");
            }
            // console.log(response.data)



            // setUsers();
        }
    };

    return (
        <>
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-gray-700 flex flex-col items-center py-8">
           

            <h1 className="text-white text-3xl font-bold mb-8">Registered Users</h1>

            <div className="w-full max-w-7xl overflow-x-auto bg-white rounded-lg shadow-lg p-6">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-purple-500 text-white">
                            <th className="px-4 py-2 text-left">Sr.</th>
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i) => (
                            <tr key={i} className="border-t hover:bg-purple-100">
                                <td className="px-4 py-2">{i+1}</td>
                                <td className="px-4 py-2">{user._id}</td>
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2 space-x-5">
                                    {/* Edit Button */}
                                    <button
                                        onClick={() => handleEdit(user._id)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <ToastContainer/>
        </>

    );
}
