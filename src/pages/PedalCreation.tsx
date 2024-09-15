import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";
import styles from "./PedalCreation.module.css";
function PedalCreation() {
  return (
    <>
      <GroovyHeader>Pedal Creation</GroovyHeader>
      <GroovyArticle>First Pedal - Holes are drilled</GroovyArticle>
      <img
        className={styles.boximg}
        src="./images/pedals/pedaldrilled.png"
      ></img>
    </>
  );
}

export default PedalCreation;
