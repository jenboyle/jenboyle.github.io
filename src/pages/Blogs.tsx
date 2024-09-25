import Blog from "../components/blogs/Blog";
import { useState } from "react";
import GroovyHeader from "../components/general/GroovyHeader";
import PreviewBlogs from "../components/blogs/PreviewBlogs";

function Blogs() {
  const [blogSelected, setBlogSelected] = useState("");

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setBlogSelected((e.target as HTMLAnchorElement).id);
    console.log(blogSelected);
  }

  function handleBack() {
    setBlogSelected("");
  }

  return (
    <>
      {blogSelected === "" ? (
        <PreviewBlogs handleClick={handleClick} />
      ) : (
        <>
          <Blog jsonfile={blogSelected}></Blog>
          <button onClick={handleBack}>Back</button>
        </>
      )}
    </>
  );
}
export default Blogs;
