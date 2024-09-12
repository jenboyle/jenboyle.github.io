import GroovyHeader from "../components/general/GroovyHeader";
import JamGuitarStrum from "../components/jam/JamGuitarStrum";
import JamKey from "../components/jam/JamKey";
import JamProgression from "../components/jam/JamProgression";
import JamSpice from "../components/jam/JamSpice";

function JamTime() {
  return (
    <>
      <GroovyHeader>Jam Time</GroovyHeader>
      <JamKey />
      <JamGuitarStrum />
      <JamProgression />
      <JamSpice />
    </>
  );
}
export default JamTime;
