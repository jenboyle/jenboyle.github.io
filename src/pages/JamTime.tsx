//import { useState } from "react";
import GroovyTools from "../components/groovytools/GroovyTools";
import JamGuitarStrum from "../components/jam/JamGuitarStrum";
import JamKey from "../components/jam/JamKey";
import JamProgression from "../components/jam/JamProgression";
import JamSpice from "../components/jam/JamSpice";
import commonStyles from "../components/general/GroovyStyles.module.css";

function JamTime() {
  //const [seldrone, setSeldrone] = useState("./audio/drones/drone_c.mp3");
  //<GroovyTools key={seldrone} drone={seldrone} />
  return (
    <>
      <div className={commonStyles.bot30}>
        <GroovyTools
          key="./audio/drones/drone_c.mp3"
          drone="./audio/drones/drone_c.mp3"
        />
      </div>
      <JamKey />
      <JamGuitarStrum />
      <JamProgression />
      <JamSpice />
    </>
  );
}
export default JamTime;
