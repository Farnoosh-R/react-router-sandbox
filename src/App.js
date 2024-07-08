import React, { useState } from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import IndexPosts from "./pages/posts/Index";
import ShowPosts from "./pages/posts/Show";
import Header from "./components/Header";
import NotFound from "./pages/NotFount";

function App() {

const [login, setLogin] = useState(true);

  return (
    <BrowserRouter basename="webprog">
    <Header />
    <button onClick={() => setLogin(!login)}>{login ? 'logout' : 'login'}</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={login ? <IndexPosts /> : <Navigate to="/"/>} />
        <Route path="/posts/:id" element={<ShowPosts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
