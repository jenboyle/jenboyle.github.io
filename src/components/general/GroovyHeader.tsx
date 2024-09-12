import GroovyArticle from "./GroovyArticle";
import styles from "./GroovyHeader.module.css";

type GroovyHeaderProps = {
  children: React.ReactNode;
};
function GroovyHeader({ children }: GroovyHeaderProps) {
  return (
    <GroovyArticle customStyles={styles.overridegeneralarticle}>
      {children}
    </GroovyArticle>
  );
}

export default GroovyHeader;
