import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
const ViewUser = () => {
  let {id} = useParams();
    const [info, setInfo] = useState({
      name: "",
      class: "",
      email: "",
      phone: ""
    });

    const loadUser = async () => {
     const result = await axios.get(`http://localhost:3003/users/${id}`);
     setInfo(result.data);
    }

    useEffect(() => {
        loadUser();
      }, [])  
  return (
    <>
      <div className="container py-4">
        <Link to="/" className="btn btn-success"> Back To Home</Link>
        <h1 className="text-center">User Id: {id}</h1>
        <ul className="list-group w-75">
         <li className="list-group-item">Student Name: {info.name}</li>
         <li className="list-group-item">Standard: {info.class}</li>
         <li className="list-group-item">Email id: {info.email}</li>
         <li className="list-group-item">Contact No: {info.phone}</li>
        </ul>
      </div>
    </>
  );
};

export default ViewUser;


