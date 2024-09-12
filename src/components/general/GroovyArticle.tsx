import * as React from "react";
import styles from "./GroovyArticle.module.css";
type GroovyArticleProps = {
  children: React.ReactNode;
  customStyles?: string;
};
function GroovyArticle({ children, customStyles }: GroovyArticleProps) {
  return (
    <article
      className={`${styles.article} ${customStyles ? customStyles : ""}`}
    >
      {children}
    </article>
  );
}

export default GroovyArticle;
