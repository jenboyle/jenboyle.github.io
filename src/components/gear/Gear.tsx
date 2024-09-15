import { Link } from "react-router-dom";
import GroovyArticle from "../general/GroovyArticle";
import GroovyHeader from "../general/GroovyHeader";
import styles from "./Gear.module.css";
import { allgear } from "./allgear";

export type GearItemArticleType = {
  article: string;
  image1: string;
  image2?: string;
  description: string;
  link?: string;
  linktext?: string;
};

export type GearItemType = {
  title: string;
  articles: GearItemArticleType[];
};

function Gear() {
  return allgear[0].gear.map((gearItem: GearItemType, index) => (
    <div key={`${gearItem.title}${index}`}>
      <GroovyHeader key={`gh${index}`}>{gearItem.title}</GroovyHeader>
      {gearItem.articles.map((articleItem, articleidx) => (
        <GroovyArticle
          customStyles={styles.overridegeneralarticle}
          key={`ga${articleidx}`}
        >
          <p key={`p${articleidx}`}>{articleItem.article}</p>
          {articleItem.image1 ? (
            <img
              key={`img1${articleidx}`}
              src={articleItem.image1}
              className={styles.boximg}
            ></img>
          ) : null}
          {articleItem.image2 ? (
            <img
              key={`img2${articleidx}`}
              src={articleItem.image2}
              className={styles.boximg}
            ></img>
          ) : null}

          <div key={`desc${articleidx}`} className={styles.div}>
            {articleItem.description}
          </div>
          {articleItem.link ? (
            <Link to={articleItem.link!}>{articleItem.linktext}</Link>
          ) : null}
        </GroovyArticle>
      ))}
    </div>
  ));
}
export default Gear;
