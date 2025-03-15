import GroovyArticle from "../components/general/GroovyArticle";
import styles from "./GroovyDesigns.module.css";

function GroovyDesigns() {
  return (
    <>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Bass Embellishment Cube</p>
        <img src="./designs/basscube1_1.png" className={styles.boximg}></img>
        <img src="./designs/basscube1_2.png" className={styles.boximg}></img>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Dice Relatives</p>
        <img
          src="./designs/dice_relatives1_1.png"
          className={styles.boximg}
        ></img>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Percussion Design 1</p>
        <img src="./designs/percussion1_2.png" className={styles.boximg}></img>
        <img src="./designs/percussion1_1.png" className={styles.boximg}></img>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Percussion Design 2</p>

        <img src="./designs/percussion2_1.png" className={styles.boximg}></img>
        <img src="./designs/percussion2_2.png" className={styles.boximg}></img>
        <img src="./designs/percussion2_3.png" className={styles.boximg}></img>
      </GroovyArticle>
      <p>Reflect with engraved sunflower picture taken from my garden. </p>
      <p>Should have put join on the bottom side. </p>
      <p>Although intended equal noise, two were quieter.</p>
    </>
  );
}
export default GroovyDesigns;
