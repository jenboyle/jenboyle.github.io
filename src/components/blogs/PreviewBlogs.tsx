import { blogs } from "./blogs";
import GroovyArticle from "../general/GroovyArticle";
import styles from "./PreviewBlogs.module.css";

interface BlogProps {
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function PreviewBlogs({ handleClick }: BlogProps) {
  return blogs.map((blog) => (
    <article className={styles.article} key={blog.jsonfile}>
      <p className={styles.date}>{blog.date}</p>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        {blog.blogtitle}
      </GroovyArticle>

      {blog.blogimage ? <img src={blog.blogimage}></img> : null}

      <p className={styles.blogpreview}>{blog.blogpreview}</p>
      <a className={styles.a} id={blog.jsonfile} onClick={handleClick}>
        Read More
      </a>
    </article>
  ));
}

export default PreviewBlogs;
