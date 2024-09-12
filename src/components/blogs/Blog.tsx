import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import GroovyArticle from "../general/GroovyArticle";

export type BlogObject = {
  blog: BlogType;
};

export type BlogType = {
  date: string;
  h1: string;
  para1: string;
  para2: string;
  para3: string;
  para4?: string;
  para5?: string;
  img?: string;
};

interface BlogProps {
  jsonfile: string;
}

function Blog({ jsonfile }: BlogProps) {
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

  console.log(blogJson);

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
          <p>{blogJson.blog.para1}</p>
          <p>{blogJson.blog.para2}</p>
          <p>{blogJson.blog.para3}</p>
          {blogJson.blog.para4 ? <p>{blogJson.blog.para4}</p> : null}
          {blogJson.blog.para5 ? <p>{blogJson.blog.para5}</p> : null}
        </article>
      ) : null}
    </>
  );
}

export default Blog;
