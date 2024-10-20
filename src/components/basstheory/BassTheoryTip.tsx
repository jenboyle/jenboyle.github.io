import { useState } from "react";
import styles from "./BassTheoryTip.module.css";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";

interface tipType {
  tip: string;
}
function BassTheoryTip({ tip }: tipType) {
  const [toggleTip, setToggleTip] = useState(false);

  function handleToggleTip() {
    setToggleTip(!toggleTip);
  }

  return (
    <>
      <p
        className={`${styles.tip} ${!toggleTip ? styles.tipclosed : ""}`}
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
