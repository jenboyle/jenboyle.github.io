import styles from "./GroovyTipFretboard.module.css";

function GroovyTipFretboard() {
  return (
    <table className={styles.frettable}>
      <tbody>
        <tr className={styles.frettr}>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
        </tr>
        <tr className={styles.frettr}>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
        </tr>
        <tr className={styles.frettr}>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
          <td className={styles.frettd}></td>
        </tr>
      </tbody>
    </table>
  );
}

export default GroovyTipFretboard;
