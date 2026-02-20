import { useState } from "react";

export function useBassTheoryTip() {
  const [toggleTip, setToggleTip] = useState(false);

  function handleToggleTip() {
    setToggleTip(!toggleTip);
  }

  return {
    toggleTip,
    setToggleTip,
    handleToggleTip,
  };
}
