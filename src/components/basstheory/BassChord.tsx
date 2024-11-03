import styles from "./BassChord.module.css";

interface BassChordProps {
  chord: string;
  chordout: string;
  chorde: string;
  chorda: string;
  chordd: string;
  chordg: string;
}
function BassChord({
  chord,
  chordout,
  chorde,
  chorda,
  chordd,
  chordg,
}: BassChordProps) {
  //justify-content: space-between;
  // flex-direction: column;
  // flex: 1 1 0%;
  return (
    <div className={styles.div}>
      <table className={styles.chordtable}>
        <caption>{chord}</caption>
        <tbody>
          <tr>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
          </tr>
          <tr>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
          </tr>
          <tr>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
          </tr>
          <tr>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
            <td className={styles.chordtd}></td>
          </tr>
        </tbody>
      </table>
      <img
        src={`./images/theory/chords/${chordout}.png`}
        className={`${styles.numfret} ${styles.leftOffsetnumfret}`}
      ></img>

      <img
        src={`${
          chorde == "x"
            ? "./images/theory/chords/mute.png"
            : chorde == "0"
            ? "./images/theory/chords/open.png"
            : "./images/theory/chords/circle.png"
        }`}
        className={`${styles.e} ${
          chorde == "x" || chorde == "0" ? styles.fret0 : ""
        } ${chorde == "1" ? styles.fret1 : ""} ${
          chorde == "2" ? styles.fret2 : ""
        } ${chorde == "3" ? styles.fret3 : ""} ${
          chorde == "4" ? styles.fret4 : ""
        } ${styles.leftOffsete}`}
      ></img>
      <img
        src={`${
          chorda == "x"
            ? "./images/theory/chords/mute.png"
            : chorda == "0"
            ? "./images/theory/chords/open.png"
            : "./images/theory/chords/circle.png"
        }`}
        className={`${styles.a} ${
          chorda == "x" || chorda == "0" ? styles.fret0 : ""
        } ${chorda == "1" ? styles.fret1 : ""} ${
          chorda == "2" ? styles.fret2 : ""
        } ${chorda == "3" ? styles.fret3 : ""} ${
          chorda == "4" ? styles.fret4 : ""
        } ${styles.leftOffseta}`}
      ></img>
      <img
        src={`${
          chordd == "x"
            ? "./images/theory/chords/mute.png"
            : chordd == "0"
            ? "./images/theory/chords/open.png"
            : "./images/theory/chords/circle.png"
        }`}
        className={`${styles.d} ${
          chordd == "x" || chordd == "0" ? styles.fret0 : ""
        } ${chordd == "1" ? styles.fret1 : ""} ${
          chordd == "2" ? styles.fret2 : ""
        } ${chordd == "3" ? styles.fret3 : ""} ${
          chordd == "4" ? styles.fret4 : ""
        } ${styles.leftOffsetd}`}
      ></img>
      <img
        src={`${
          chordg == "x"
            ? "./images/theory/chords/mute.png"
            : chordg == "0"
            ? "./images/theory/chords/open.png"
            : "./images/theory/chords/circle.png"
        }`}
        className={`${styles.g} ${
          chordg == "x" || chordg == "0" ? styles.fret0 : ""
        } ${chordg == "1" ? styles.fret1 : ""} ${
          chordg == "2" ? styles.fret2 : ""
        } ${chordg == "3" ? styles.fret3 : ""} ${
          chordg == "4" ? styles.fret4 : ""
        } ${styles.leftOffsetg}`}
      ></img>
    </div>
  );
}

export default BassChord;
