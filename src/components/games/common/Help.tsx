import styles from "./Help.module.css";

interface HelpProps {
  handleHelp: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

function Help({ handleHelp, children }: HelpProps) {
  return (
    <div className={styles.help} onClick={handleHelp}>
      {children}
    </div>
  );
}

export default Help;
