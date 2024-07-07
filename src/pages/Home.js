import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="p-4">
        <h1>Home page</h1>
        <Link className="btn btn-dark" to="/posts">Posts</Link>
        </div>
    )
}

export default Home;