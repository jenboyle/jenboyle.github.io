import { useState } from "react";
import GroovyArticle from "../general/GroovyArticle";
import GroovyButton from "../general/GroovyButton";
import { keyboardList } from "./keyboards";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./GroovyKeyboard.module.css";

function GroovyKeyboard() {
  const [selKeyboard, setSelKeyboard] = useState("C");
  const [selKeyImage, setSelKeyImage] = useState("keyboard_c.png");
  const [showKeyboardOptions, setShowKeyboardOptions] = useState(false);

  function showDD() {
    setShowKeyboardOptions(!showKeyboardOptions);
  }

  function handleKeyboard(selKey: string, selKeyImg: string) {
    setSelKeyboard(selKey);
    setSelKeyImage(selKeyImg);
    showDD();
  }

  return (
    <>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        <GroovyButton handleClick={showDD}>
          {keyboardList.map((kb) =>
            kb.displaykey === selKeyboard ? kb.displaykey : null
          )}
        </GroovyButton>
      </GroovyArticle>

      {showKeyboardOptions ? (
        <div className={commonStyles.overlay}>
          <ul className={styles.ul}>
            {keyboardList.map((kb) => (
              <li
                key={kb.displaykey}
                className={`${styles.li} ${
                  selKeyboard === kb.displaykey ? styles.active : ""
                }`}
                onClick={() => handleKeyboard(kb.displaykey, kb.keyimage)}
              >
                {kb.displaykey}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        Key of {selKeyboard}
      </GroovyArticle>
      <GroovyArticle customStyles={styles.overridegeneralarticle}>
        Keyboard Intervals for 25 keys keyboard
        <div>
          <img src={`./images/theory/keys/${selKeyImage}`} width="95%"></img>
        </div>
      </GroovyArticle>

      {keyboardList.map((kb) =>
        kb.displaykey === selKeyboard ? (
          kb.pentatonic ? (
            <GroovyArticle
              key={kb.displaykey}
              customStyles={styles.overridegeneralarticle}
            >
              {`${kb.displaykey} Pentatonic (Right hand fingerings)`}

              <div>
                <img
                  src={`./images/theory/keys/${kb.pentatonic}`}
                  width="95%"
                ></img>
              </div>
            </GroovyArticle>
          ) : null
        ) : null
      )}
    </>
  );
}

export default GroovyKeyboard;
