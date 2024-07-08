import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import IndexPosts from "./pages/posts/Index";
import ShowPosts from "./pages/posts/Show";
import Header from "./components/Header";
import NotFound from "./pages/NotFount";

function App() {
  return (
    <BrowserRouter basename="webprog">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<IndexPosts />} />
        <Route path="/posts/:id" element={<ShowPosts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
