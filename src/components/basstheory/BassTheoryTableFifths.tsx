import styles from "./BassTheoryTableFifths.module.css";

function BassTheoryTableFifths() {
  return (
    <div>
      <img className={styles.img} src="./images/theory/circlefifths2.png" />
      <p className={styles.p}>Table of Fifths</p>
      <table className={styles.fifthstable}>
        <caption>Sharps Side</caption>
        <tbody>
          <tr>
            <th className={`${styles.fifthstablecenttd} ${styles.thkey}`}>
              Key
            </th>
            <th className={`${styles.fifthstablecenttd} ${styles.thamount}`}>
              Amount of Sharps
            </th>
            <th className={`${styles.fifthstablecenttd} ${styles.thlist}`}>
              Sharps
            </th>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>C/Am</td>
            <td />
            <td />
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>G/Em</td>
            <td className={styles.fifthstablecenttd}>1#</td>
            <td className={styles.fifthstablelefttd}>F#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>D/Bm</td>
            <td className={styles.fifthstablecenttd}>2#</td>
            <td className={styles.fifthstablelefttd}>F#, C#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>A/F#m</td>
            <td className={styles.fifthstablecenttd}>3#</td>
            <td className={styles.fifthstablelefttd}>F#, C#, G#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>E/C#m</td>
            <td className={styles.fifthstablecenttd}>4#</td>
            <td className={styles.fifthstablelefttd}>F#, C#, G#, D#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>B/G#m</td>
            <td className={styles.fifthstablecenttd}>5#</td>
            <td className={styles.fifthstablelefttd}>F#, C#, G#, D#, A#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>F#/D#m</td>
            <td className={styles.fifthstablecenttd}>6#</td>
            <td className={styles.fifthstablelefttd}>F#, C#, G#, D#, A#, E#</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>C#/A#m</td>
            <td className={styles.fifthstablecenttd}>7#</td>
            <td className={styles.fifthstablelefttd}>
              F#, C#, G#, D#, A#, E#, B#
            </td>
          </tr>
        </tbody>
      </table>
      <table className={styles.fifthstable}>
        <caption>Flats Side</caption>
        <tbody>
          <tr>
            <th className={`${styles.fifthstablecenttd} ${styles.thkey}`}>
              Key
            </th>
            <th className={`${styles.fifthstablecenttd} ${styles.thamount}`}>
              Amount of Flats
            </th>
            <th className={`${styles.fifthstablecenttd} ${styles.thlist}`}>
              Flats
            </th>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>C/Am</td>
            <td />
            <td />
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>F/Dm</td>
            <td className={styles.fifthstablecenttd}>1b</td>
            <td className={styles.fifthstablelefttd}>Bb</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Bb/Gm</td>
            <td className={styles.fifthstablecenttd}>2b</td>
            <td className={styles.fifthstablelefttd}>Bb, Eb</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Eb/Cm</td>
            <td className={styles.fifthstablecenttd}>3b</td>
            <td className={styles.fifthstablelefttd}>Bb, Eb, Ab</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Ab/Fm</td>
            <td className={styles.fifthstablecenttd}>4b</td>
            <td className={styles.fifthstablelefttd}>Bb, Eb, Ab, Db</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Db/Bbm</td>
            <td className={styles.fifthstablecenttd}>5b</td>
            <td className={styles.fifthstablelefttd}>Bb, Eb, Ab, Db, Gb</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Gb/Ebm</td>
            <td className={styles.fifthstablecenttd}>6b</td>
            <td className={styles.fifthstablelefttd}>Bb, Eb, Ab, Db, Gb, Cb</td>
          </tr>
          <tr>
            <td className={styles.fifthstablecenttd}>Cb/Abm</td>
            <td className={styles.fifthstablecenttd}>7b</td>
            <td className={styles.fifthstablelefttd}>
              Bb, Eb, Ab, Db, Gb, Cb Fb
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.p}>Order of Sharps: F C G D A E B</p>
      <p className={styles.p}>Order of Flats: B E A D G C F</p>
    </div>
  );
}

export default BassTheoryTableFifths;
