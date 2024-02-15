import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  let navigate = useNavigate();
  let [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      let res = await axios.get(API_URL);
      console.log(res.data);
      if (res.status === 200) {
        // toast.success("blog fetched successfully");
        setBlogs(res.data);
      }
    } catch (error) {}
  };
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Blog deleted successfully");
        getBlogs();
      }
    } catch (error) {}
  };

  const toggleBlog = async (e) => {
    try {
      e.status = !e.status;
      console.log(e);
      let res = await axios.put(`${API_URL}/${e.id}`, e);
      if (res.status === 200) {
        toast.success("Blog Status Changed!");
        getBlogs();
      }
    } catch (error) {}
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="container-fluid">
      <TopBar />

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>image</th>
              <th>Description</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          {blogs.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>e{e.title}</td>
                <td>
                  <img
                    src={e.image}
                    alt={e.title}
                    style={{ width: "50px" }}
                  ></img>
                </td>
                <td>
                  <div
                    style={{
                      width: "300px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {e.description}
                  </div>
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      defaultChecked={e.status}
                      onChange={() => toggleBlog(e)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => navigate(`/edit/${e.id}`)}
                  >
                    edit
                  </Button>
                  &nbsp;
                  <Button variant="danger" onClick={() => handleDelete(e.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
