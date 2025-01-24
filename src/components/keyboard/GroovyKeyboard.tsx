import { useState } from "react";
import GroovyArticle from "../general/GroovyArticle";
import GroovyButton from "../general/GroovyButton";
import { keyboardList } from "./keyboards";
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
        Keyboard Intervals for 25 keys keyboard
        <GroovyButton handleClick={showDD}>
          {keyboardList.map((kb) =>
            kb.displaykey === selKeyboard ? kb.displaykey : null
          )}
        </GroovyButton>
      </GroovyArticle>

      {showKeyboardOptions ? (
        <div className={styles.overlay}>
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
        <div>
          <img src={`./images/theory/keys/${selKeyImage}`}></img>
        </div>
      </GroovyArticle>
    </>
  );
}

export default GroovyKeyboard;
