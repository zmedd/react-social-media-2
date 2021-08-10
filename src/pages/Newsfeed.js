import React, { useEffect, useState } from "react";
import { useSession } from "../hooks";
import { useHistory } from "react-router-dom";
import { api } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Post, Layout } from "../components";

export const Newsfeed = () => {
  const [posts, setPosts] = useState([]);

  const { loading, loggedIn } = useSession();
  const history = useHistory();

  useEffect(() => {
    !loading && !loggedIn && history.push("/login");
  }, [loading, loggedIn, history]);

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const { data, status } = await api.getPosts();

      status === 200 ? setPosts(data) : toast.error("Could not get posts");
    };
    getAllPosts();
  }, []);

  return (
    <div>
      <Header handleLogOut={handleLogOut} />
      <ToastContainer />
      <Layout>
        {posts.length > 0 &&
          posts.map((post, index) => <Post key={index} data={post} />)}
      </Layout>
    </div>
  );
};
