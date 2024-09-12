import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";
import styles from "./Tips.module.css";

function Tips() {
  return (
    <>
      <GroovyHeader>Bass Tips</GroovyHeader>

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
