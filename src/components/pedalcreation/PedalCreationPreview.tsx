import { useState } from "react";
import GroovyArticle from "../general/GroovyArticle";
import GroovyButton from "../general/GroovyButton";
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
          <GroovyHeader>{pedalcreations[creationSelected!].title}</GroovyHeader>
          {pedalcreations[creationSelected!].articles.map(
            (article, articleid) => (
              <>
                <GroovyArticle key={articleid}>{article.text}</GroovyArticle>
                {article.images.map((image, imageid) => (
                  <img
                    className={styles.boximg}
                    key={imageid}
                    src={image.image}
                  ></img>
                ))}
              </>
            )
          )}
          <GroovyButton handleClick={handleBack}>Back</GroovyButton>
        </>
      ) : (
        <>
          {pedalcreationpreviews.map((pedal, pedalid) => (
            <>
              <GroovyHeader key={pedalid}>{pedal.title}</GroovyHeader>
              <img
                className={styles.boximg}
                key={`img${pedalid}`}
                src={pedal.previewimage}
              ></img>
              <GroovyArticle key={`art${pedalid}`}>
                {pedal.previewtext}
              </GroovyArticle>
              <GroovyButton
                key={`but${pedalid}`}
                handleClick={() => setCreationSelected(pedal.pedalid)}
              >
                See More
              </GroovyButton>
            </>
          ))}
        </>
      )}
    </>
  );
}
export default PedalCreationPreview;