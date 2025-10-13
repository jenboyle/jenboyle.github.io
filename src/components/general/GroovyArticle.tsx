import * as React from "react";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./GroovyArticle.module.css";
type GroovyArticleProps = {
  children: React.ReactNode;
  customStyles?: string;
};
function GroovyArticle({
  children,
  customStyles,
}: Readonly<GroovyArticleProps>) {
  return (
    <article
      className={`${styles.article} ${commonStyles.p} ${customStyles || ""}`}
    >
      {children}
    </article>
  );
}

export default GroovyArticle;
