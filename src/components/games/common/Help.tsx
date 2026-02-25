import styles from "./Help.module.css";

interface HelpProps {
  handleHelp: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function Help({ handleHelp, children }: Readonly<HelpProps>) {
  return (
    <button className={styles.help} onClick={handleHelp} type="button">
      {children}
    </button>
  );
}

export default Help;
