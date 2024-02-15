import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import { toast } from "react-toastify";
import { API_URL } from "../App";
import axios from "axios";
import BlogCard from "./common/BlogCard";

function Home() {
  let [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      let res = await axios.get(API_URL);
      console.log(res.data);
      if (res.status === 200) {
        // toast.success("blog fetched successfully");
        setBlogs(res.data.filter((e) => e.status));
      }
    } catch (error) {}
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="container-fluid">
      <TopBar />
      <div className="homeWrapper">
        {blogs.map((e, i) => {
          return (
            <BlogCard
              title={e.title}
              image={e.image}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
