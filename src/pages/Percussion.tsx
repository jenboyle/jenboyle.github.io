import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";
import styles from "./Percussion.module.css";

function Percussion() {
  return (
    <div>
      <GroovyHeader>My percussion</GroovyHeader>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Cabasa</p>
        <img src="./percussion/cabasa.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Claves</p>
        <img src="./percussion/claves.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Cowbell</p>
        <img src="./percussion/cowbell.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Frog</p>
        <img src="./percussion/frog.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Guiro</p>
        <img src="./percussion/guiro.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Rainsticks</p>
        <img src="./percussion/rainstick.jpg" className={styles.boximg}></img>
        <img src="./percussion/rainstick2.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Shakers: </p>
        <p>Finger Shot, Wood Shaker, Egg Shaker</p>
        <img src="./percussion/fingershot.jpg" className={styles.boximg}></img>
        <img
          src="./percussion/meinlwoodshaker.jpg"
          className={styles.boximg}
        ></img>
        <img src="./percussion/egg.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>More shakers: </p>
        <p>Chick-Itas, Octagonal Aluminium, Proton</p>
        <img src="./percussion/chickitas.jpg" className={styles.boximg}></img>
        <img src="./percussion/oct.jpg" className={styles.boximg}></img>
        <img src="./percussion/proton.jpg" className={styles.boximg}></img>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Tambourine</p>
        <img src="./percussion/tambourine.jpg" className={styles.boximg}></img>
      </GroovyArticle>

      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Thunder Drum</p>
        <img src="./percussion/thunderer.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Triangle</p>
        <img src="./percussion/triangle.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Wave Drum</p>
        <img src="./percussion/wavedrum.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Wrist Bells</p>
        <img src="./percussion/wristbells.jpg" className={styles.boximg}></img>
      </GroovyArticle>
    </div>
  );
}
export default Percussion;
