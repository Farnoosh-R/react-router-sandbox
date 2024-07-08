import React from "react";
import { useParams } from "react-router-dom";

const ShowPosts = () => {

    const {id} = useParams();

    return(
        <h1>Show Posts page : {id}</h1>
    )
}

export default ShowPosts;