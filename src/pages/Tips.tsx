import GroovyArticle from "../components/general/GroovyArticle";
import GroovyTipFretboard from "../components/general/GroovyTipFretboard";
import styles from "./Tips.module.css";

function Tips() {
  return (
    <>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Chords - Pattern</p>
        <div>A pattern to find chords</div>
        <div>Take C Major. </div>
        <div>
          Major Chords in C Major Pattern: C (on 8th fret), F, G (Root, 4th,
          5th)
          <GroovyTipFretboard />
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
          <GroovyTipFretboard />
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
          <GroovyTipFretboard />
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
        <p>Drones</p>
        <div>Play over a drone when you practice scales. </div>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Practice Plan - Beginner</p>
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
        <p>Practice Plan - Intermediate</p>
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

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Solo</p>
        <div>Think of telling a story. </div>
      </GroovyArticle>
    </>
  );
}
export default Tips;

{
  /* 
  
  <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <div className={styles.hovers}>
          <GroovyTipFretboard />
          <img
            src="./images/theory/chords/circle.png"
            className={styles.cnewloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.thirdloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.fifthloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.octaveloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.sixloc}
          ></img>
          <img
            src="./images/theory/chords/circle.png"
            className={styles.sevenloc}
          ></img>
        </div>
      </GroovyArticle>
  
  <img
            src="./images/theory/chords/circle.png"
            className={styles.thirdloc}
          ></img> 
          //<img
// src="./images/theory/chords/circle.png"
// className={styles.sixloc}
// ></img>
// <img
// src="./images/theory/chords/circle.png"
// className={styles.sevenloc}
// ></img>
// <img
// src="./images/theory/chords/circle.png"
// className={styles.octaveloc}
// ></img>
          
          */
}
