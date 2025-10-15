import Blog from "../components/blogs/Blog";
import { useEffect, useState } from "react";
import PreviewBlogs from "../components/blogs/PreviewBlogs";
import GroovyButton from "../components/general/GroovyButton";
import styles from "./Blogs.module.css";

function Blogs() {
  const [blogSelected, setBlogSelected] = useState("");

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setBlogSelected((e.target as HTMLAnchorElement).id);
    // console.log(blogSelected);
  }

  function handleBack() {
    setBlogSelected("");
  }

  useEffect(() => {
    if (blogSelected !== "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [blogSelected]);

  return (
    <>
      {blogSelected === "" ? (
        <PreviewBlogs handleClick={handleClick} />
      ) : (
        <div className="blogContainer">
          <Blog
            jsonfile={blogSelected}
            handleBack={() => setBlogSelected("")}
          ></Blog>
        </div>
      )}
    </>
  );
}
export default Blogs;
