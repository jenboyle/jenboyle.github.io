import styles from "./BassTheoryTableLink.module.css";
interface BassTheoryTableLinkProps {
  handleNavTheory: (key: string, context: string) => void;
  chord: string;
  children: React.ReactNode;
  specifyfile?: string;
  hoverimg?: string;
}

function BassTheoryTableLink({
  handleNavTheory,
  chord,
  specifyfile = "",
  hoverimg = "./theory/shapes/ionian.png",
  children,
}: BassTheoryTableLinkProps) {
  return specifyfile.length > 0 ? (
    <span className={styles.item}>
      <a onClick={() => handleNavTheory(specifyfile, chord)}>{children}</a>
      <img className={styles.quicklook} src={hoverimg}></img>
    </span>
  ) : (
    <span className={styles.item}>
      <a
        onClick={() => handleNavTheory(`fret_${children}`.toLowerCase(), chord)}
      >
        {children}
      </a>
      <img className={styles.quicklook} src={hoverimg}></img>
    </span>
  );
}

export default BassTheoryTableLink;
