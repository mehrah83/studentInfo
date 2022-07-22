import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
     setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);


  const deleteUser = async (id) => {
   await axios.delete(`http://localhost:3003/users/${id}`);
   loadUsers();
  }
  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead className=" table-dark">
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Student Name</th>
                <th scope="col">Standard</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((currelem) => {
                  return ( 
                    <>
                    <tr>
                  <th scope="row">{currelem.id}</th>
                   <td>{currelem.name}</td> 
                   <td>{currelem.class}</td>
                   <td>{currelem.email}</td>
                   <td>
                    <Link to={`/viewUser/${currelem.id}`} className="btn btn-primary mx-2">View</Link>
                    <Link to={`/editUser/${currelem.id}`} className="btn btn-dark mx-2">Edit</Link>
                    <Link to="" className="btn btn-danger mx-2" onClick={() => deleteUser(currelem.id)}>Delete</Link>
                   </td>
                   </tr>
                   </>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
