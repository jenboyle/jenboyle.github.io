import GroovyArticle from "../general/GroovyArticle";
import GroovyHeader from "../general/GroovyHeader";
import styles from "./Gear.module.css";
import { allgear } from "./allgear";

function Gear() {
  return allgear[0].gear.map((gearItem, index) => (
    <div key={index}>
      <GroovyHeader>{gearItem.title}</GroovyHeader>
      {gearItem.articles.map((articleItem, articleidx) => (
        <>
          <GroovyArticle
            customStyles={styles.overridegeneralarticle}
            key={articleidx}
          >
            <p key={articleidx}>{articleItem.article}</p>
            {articleItem.image1 ? (
              <img src={articleItem.image1} className={styles.boximg}></img>
            ) : null}
            {articleItem.image2 ? (
              <img src={articleItem.image2} className={styles.boximg}></img>
            ) : null}

            <div className={styles.div}>{articleItem.description}</div>
          </GroovyArticle>
        </>
      ))}
    </div>
  ));
}
export default Gear;
