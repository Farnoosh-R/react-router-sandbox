import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ShowPosts = () => {

    const {id} = useParams();
    const query = new URLSearchParams(useLocation().search);
    console.log(query.get('name'));

    return(
        <div>
        <h1>Show Posts page : {id}</h1>
        <h1>Show Posts page : {query.get('name')}</h1>
        </div>
    )
}

export default ShowPosts;