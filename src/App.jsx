import "./index.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import blogData from "./data/blog";

function App() {
  return (
    <div>
      <Header title="My Personal Blog" />
      <main><BlogList posts={blogData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;