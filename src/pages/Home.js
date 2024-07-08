import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();
const redirectToPosts = () => {
    navigate('/posts');
}
    return(
        <div className="p-4">
        <h1>Home page</h1>
        <Link className="btn btn-dark" to="/posts">Posts</Link>
        <button onClick={redirectToPosts}>posts</button>
        </div>
    )
}

export default Home;