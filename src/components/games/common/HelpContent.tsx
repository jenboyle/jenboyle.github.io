import styles from "./HelpContent.module.css";
type HelpContentProps = {
  children: string | JSX.Element | JSX.Element[] | null;
};
function HelpContent({ children }: HelpContentProps) {
  return <div className={styles.helpcontent}>{children}</div>;
}

export default HelpContent;
