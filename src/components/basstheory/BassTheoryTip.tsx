import styles from "./BassTheoryTip.module.css";
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";
import { useBassTheoryTip } from "./useBassTheoryTip";

interface TipType {
  tip: string;
}
function BassTheoryTip({ tip }: Readonly<TipType>) {
  const { toggleTip, handleToggleTip } = useBassTheoryTip();

  return (
    <button
      className={`${!toggleTip ? styles.tipclosed : ""}`}
      data-testid="bassTheoryTip"
      onClick={handleToggleTip}
    >
      {toggleTip ? (
        <span>
          <CloseFullscreenOutlinedIcon style={{ fontSize: 15 }} />
        </span>
      ) : null}
      {toggleTip ? `${tip}` : `💁‍♀️`}
    </button>
  );
}

export default BassTheoryTip;
