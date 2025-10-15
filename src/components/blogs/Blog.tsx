import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import GroovyArticle from "../general/GroovyArticle";
import GroovyButton from "../general/GroovyButton";

export type BlogObject = {
  blog: BlogType;
};

type Blogpara = {
  para: string;
};

export type BlogType = {
  date: string;
  h1: string;
  paras: Blogpara[];
  img?: string;
};

interface BlogProps {
  jsonfile: string;
  handleBack: () => void;
}

function Blog({ jsonfile, handleBack }: BlogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [blogJson, setBlogJson] = useState<BlogObject>();
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchBlog() {
        try {
          setIsLoading(true);
          const res = await fetch(`./blogs/${jsonfile}.json`);
          const data: BlogObject = await res.json();
          setBlogJson(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchBlog();
    },
    [jsonfile]
  );

  // console.log(blogJson);

  return (
    <>
      {isLoading ? <div>Loading...</div> : null}
      {error !== "" ? (
        <div>Something went wrong fetching blog, try reload</div>
      ) : null}
      {blogJson ? (
        <article>
          <p className={styles.date}>{blogJson.blog.date}</p>
          <GroovyArticle customStyles={styles.overridegeneralarticle}>
            {blogJson.blog.h1}
          </GroovyArticle>

          <p>
            {blogJson.blog.img ? <img src={blogJson.blog.img}></img> : null}
          </p>

          {blogJson.blog.paras.map((blog, index) => (
            <p key={index}>{blog.para}</p>
          ))}

          <GroovyButton handleClick={handleBack}>Back</GroovyButton>
        </article>
      ) : null}
    </>
  );
}

export default Blog;
