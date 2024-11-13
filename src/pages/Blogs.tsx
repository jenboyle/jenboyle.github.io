import Blog from "../components/blogs/Blog";
import { useState } from "react";
import PreviewBlogs from "../components/blogs/PreviewBlogs";
import GroovyButton from "../components/general/GroovyButton";

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
          <GroovyButton handleClick={handleBack}>Back</GroovyButton>
        </>
      )}
    </>
  );
}
export default Blogs;
