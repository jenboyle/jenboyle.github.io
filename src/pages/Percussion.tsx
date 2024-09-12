import GroovyArticle from "../components/general/GroovyArticle";
import GroovyHeader from "../components/general/GroovyHeader";
import styles from "./Percussion.module.css";

function Percussion() {
  return (
    <div>
      <GroovyHeader>My percussion</GroovyHeader>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Finger Shot</p>
        <img
          src="./percussion/fingershot.jpg"
          width="150px"
          height="102px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Wood Shaker</p>
        <img
          src="./percussion/meinlwoodshaker.jpg"
          width="140px"
          height="116px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Egg Shaker</p>
        <img
          src="./percussion/egg.jpg"
          width="100px"
          height="94px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Chick-Itas</p>
        <img
          src="./percussion/chickitas.jpg"
          width="118px"
          height="72px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Octagonal Aluminium</p>
        <img
          src="./percussion/oct.jpg"
          width="150px"
          height="113px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Proton</p>
        <img
          src="./percussion/proton.jpg"
          width="150px"
          height="108px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Frog</p>
        <img
          src="./percussion/frog.jpg"
          width="150px"
          height="114px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Tambourine</p>
        <img
          src="./percussion/tambourine.jpg"
          width="150px"
          height="134px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Rainstick</p>
        <img
          src="./percussion/rainstick.jpg"
          width="150px"
          height="135px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Rainstick</p>
        <img
          src="./percussion/rainstick2.jpg"
          width="75px"
          height="221px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Cabasa</p>
        <img
          src="./percussion/cabasa.jpg"
          width="125px"
          height="100px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Claves</p>
        <img
          src="./percussion/claves.jpg"
          width="75px"
          height="150px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Cowbell</p>
        <img
          src="./percussion/cowbell.jpg"
          width="100px"
          height="160px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Guiro</p>
        <img
          src="./percussion/guiro.jpg"
          width="100px"
          height="100px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Thunder Drum</p>
        <img src="./percussion/thunderer.jpg" className={styles.boximg}></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Triangle</p>
        <img
          src="./percussion/triangle.jpg"
          width="140px"
          height="116px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Wave Drum</p>
        <img
          src="./percussion/wavedrum.jpg"
          width="100px"
          height="100px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <p>Wrist Bells</p>
        <img
          src="./percussion/wristbells.jpg"
          width="140px"
          height="115px"
          className={styles.boximg}
        ></img>
      </GroovyArticle>
    </div>
  );
}
export default Percussion;
