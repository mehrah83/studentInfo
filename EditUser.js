import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
const EditUser = () => {
  let navigate = useNavigate();
  let {id} = useParams();
    const [info, setInfo] = useState({
      name: "",
      class: "",
      email: ""
    });

    const handleOnChange = (event) => {
     setInfo({...info,[event.target.name] :[event.target.value]});
    }

    const handleOnSubmit = async (event) => {
      event.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`, info);
      navigate("/");
    }

    const loadUser = async () => {
     const result = await axios.get(`http://localhost:3003/users/${id}`);
     setInfo(result.data);
    }

    useEffect(() => {
        loadUser();
      }, [])  
  return (
    <>
      <div className="container my-4 border shadow">
        <h1 className="text-center my-4">Edit A User</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3 w-75 mx-auto">
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleOnChange}
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3 w-75 mx-auto">
            <input
              type="text"
              name="class"
              value={info.class}
              onChange={handleOnChange}
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Class"
              required
            />
          </div>
          <div className="mb-3 w-75 mx-auto">
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleOnChange}
              className="form-control text-center"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark w-75 mb-4"
            style={{marginLeft:"140px"}}
          >
            Update User
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;

