import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header title="My Personal Blog" />
      <BlogList posts={blogData} />
      <Footer />
    </div>
  );
}

export default App;