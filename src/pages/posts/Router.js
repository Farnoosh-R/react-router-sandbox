import { Route, Routes, Navigate } from "react-router-dom";
import IndexPosts from "./Index";
import ShowPosts from "./Show";
import CreatePosts from "./Create";

const RouterPosts = () => {

    return(
        <Routes>
            {/*<Route path="/posts" element={login ? <IndexPosts /> : <Navigate to="/"/>} />*/}
            <Route path="/" element={<IndexPosts />} />
            <Route path="/create" element={<CreatePosts />} />
            <Route path="/:id" element={<ShowPosts />} />
        </Routes>
    )
}

export default RouterPosts;