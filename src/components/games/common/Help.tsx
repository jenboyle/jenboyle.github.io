import styles from "./Help.module.css";

interface HelpProps {
  handleHelp: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Help({ handleHelp }: HelpProps) {
  return (
    <div className={styles.help} onClick={handleHelp}>
      🤔
    </div>
  );
}

export default Help;
