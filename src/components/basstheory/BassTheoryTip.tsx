import { useState } from "react";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./BassTheoryTip.module.css";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";

interface tipType {
  tip: string;
}
function BassTheoryTip({ tip }: Readonly<tipType>) {
  const [toggleTip, setToggleTip] = useState(false);

  function handleToggleTip() {
    setToggleTip(!toggleTip);
  }

  return (
    <>
      <p
        className={`${commonStyles.plainP} ${
          !toggleTip ? styles.tipclosed : ""
        }`}
        data-testid="bassTheoryTip"
        onClick={handleToggleTip}
      >
        {toggleTip ? (
          <span>
            <CloseFullscreenOutlinedIcon style={{ fontSize: 15 }} />
          </span>
        ) : null}
        {toggleTip ? `${tip}` : `💁‍♀️`}
      </p>
    </>
  );
}

export default BassTheoryTip;
