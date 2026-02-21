import { Link } from "react-router-dom";
import GroovyArticle from "../general/GroovyArticle";
import GroovyHeader from "../general/GroovyHeader";
import styles from "./Gear.module.css";
import { allgear } from "./allgear";

export type GearItemArticleType = {
  id: string;
  article: string;
  image1: string;
  image2?: string;
  imagealt: string;
  description: string;
  link?: string;
  linktext?: string;
};

export type GearItemType = {
  id: string;
  title: string;
  articles: GearItemArticleType[];
};

function Gear() {
  return allgear[0].gear.map((gearItem: GearItemType) => (
    <div key={`${gearItem.title}${gearItem.id}`}>
      <GroovyHeader key={`gh${gearItem.id}`}>{gearItem.title}</GroovyHeader>
      {gearItem.articles.map((articleItem) => (
        <GroovyArticle
          customStyles={styles.overridegeneralarticle}
          key={`ga${articleItem.id}`}
        >
          <p key={`p${articleItem.id}`}>{articleItem.article}</p>
          {articleItem.image1 ? (
            <img
              key={`img1${articleItem.id}`}
              src={articleItem.image1}
              className={styles.boximg}
              alt={articleItem.imagealt}
            ></img>
          ) : null}
          {articleItem.image2 ? (
            <img
              key={`img2${articleItem.id}`}
              src={articleItem.image2}
              className={styles.boximg}
              alt={articleItem.imagealt}
            ></img>
          ) : null}

          <div key={`desc${articleItem.id}`} className={styles.div}>
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
