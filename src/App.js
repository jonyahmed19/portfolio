import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./containers/Home.pages";
import Contact from "./containers/Contact.pages";
import Works from "./containers/Works.pages";
import Blog from "./containers/Blog.pages";
import Single from "./containers/Single.pages";
import NotFound from "./containers/NotFound.pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Single />} />
        <Route path="/works/:workId" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
