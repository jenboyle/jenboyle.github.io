import { useState } from "react";
import GroovyArticle from "../general/GroovyArticle";
import GroovyHeader from "../general/GroovyHeader";
import { pedalcreationpreviews, pedalcreations } from "./pedalcreations";
import styles from "./PedalCreationPreview.module.css";

function PedalCreationPreview() {
  const [creationSelected, setCreationSelected] = useState(-1);

  function handleBack() {
    setCreationSelected(-1);
  }

  return (
    <>
      {creationSelected != -1 ? (
        <>
          <GroovyArticle customStyles={styles.overridebigheader}>
            {pedalcreations[creationSelected!].title}
          </GroovyArticle>
          {pedalcreations[creationSelected!].articles.map(
            (article, articleid) => (
              <GroovyArticle key={articleid}>
                <GroovyHeader key={`head${articleid}`}>
                  {article.text}
                </GroovyHeader>
                {article.images.map((image, imageid) => (
                  <img
                    className={styles.boximg}
                    key={imageid}
                    src={image.image}
                  ></img>
                ))}
                {article.description ? (
                  <div className={styles.description}>
                    {article.description}
                  </div>
                ) : null}
                {pedalcreations[creationSelected!].articles.length ==
                articleid + 1 ? (
                  <div>
                    <a className={styles.a} onClick={handleBack}>
                      Back
                    </a>
                  </div>
                ) : null}
              </GroovyArticle>
            )
          )}
        </>
      ) : (
        <>
          {pedalcreationpreviews.map((pedal, pedalid) => (
            <>
              <GroovyHeader key={pedalid}>
                Pedal Creation - {pedal.title}
              </GroovyHeader>
              <img
                className={styles.boximg}
                key={`img${pedalid}`}
                src={pedal.previewimage}
              ></img>
              <GroovyArticle key={`art${pedalid}`}>
                {pedal.previewtext}
                <div>
                  <a
                    key={`but${pedalid}`}
                    className={styles.a}
                    onClick={() => setCreationSelected(pedal.pedalid)}
                  >
                    See More
                  </a>
                </div>
              </GroovyArticle>
            </>
          ))}
        </>
      )}
    </>
  );
}
export default PedalCreationPreview;
