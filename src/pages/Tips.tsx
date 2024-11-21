import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";
import styles from "./Tips.module.css";

function Tips() {
  return (
    <>
      <GroovyHeader>Bass Tips</GroovyHeader>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Pattern to find chords</p>
        <div>Take C Major. </div>
        <div>
          Major Chords in C Major Pattern: C (on 8th fret), F, G (Root, 4th,
          5th)
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
          <img
            src="./images/theory/chords/circle.png"
            className={styles.gloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.floc}
          ></img>
          <img
            src="./images/theory/chords/circleroot.png"
            className={styles.cloc}
          ></img>
        </div>
        <div>
          Minor Chords in C Major Pattern: Down 3 frets repeat pattern: Am, Dm,
          Em (6th, 2nd, 3rd)
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
          <img
            src="./images/theory/chords/circle.png"
            className={styles.aloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.dloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.eloc}
          ></img>
          <img
            src="./images/theory/chords/circlerootblur.png"
            className={styles.clocblur}
          ></img>
        </div>
        <div>
          Diminished Chord in C Major Pattern: Down 1 fret from root: Bdim (7th)
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
          <img
            src="./images/theory/chords/circle.png"
            className={styles.bloc}
          ></img>
          <img
            src="./images/theory/chords/circlerootblur.png"
            className={styles.clocblur2}
          ></img>
        </div>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Solo</p>
        <div>Think of telling a story. </div>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Beginner</p>
        <div>Make a practice plan of goals and log progress. </div>
        <div>Practice Ideas:</div>
        <ul>
          <li>Bass Chords</li>
          <li>Circle of Fifths</li>
          <li>Ear Training</li>
          <li>Equipment Learning: Pedals, DAW, Audio Interface etc</li>
          <li>Fretboard Learning</li>
          <li>Improvisation</li>
          <li>Intervals</li>
          <li>Modes</li>
          <li>Movable shapes</li>
          <li>New Songs</li>
          <li>Scales</li>
          <li>Slap</li>
          <li>Solo practice over backing tracks</li>
          <li>Technique</li>
          <li>Transcribing</li>
          <li>Warm Ups with Chromatic and String Crossing Exercises</li>
        </ul>
        <div></div>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Intermediate</p>
        <div>
          Let's return to learning big time and learn more theory and good
          techniques
        </div>
        <div>Transcribing Tip: Use a tuner to check your transcriptions</div>
        <div>
          Octaves Tip: Some songs good for octave practice: Leonard Cohen -
          Everybody Knows and Blondie - Atomic
        </div>
      </GroovyArticle>
    </>
  );
}
export default Tips;
