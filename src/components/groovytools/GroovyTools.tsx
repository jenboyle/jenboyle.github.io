import GroovyToolDrone from "./GroovyToolDrone";
import styles from "./GroovyTools.module.css";

interface GroovyToolsProps {
  drone: string;
}

// dronePlaying: boolean;
// toggleDronePlay(): void;
// stopDronePlay(): void;

// dronePlaying,
// toggleDronePlay,
// stopDronePlay,

// dronePlaying={dronePlaying}
// toggleDronePlay={toggleDronePlay}
// stopDronePlay={stopDronePlay}

function GroovyTools({
  drone = "./audio/drones/drone_c.mp3",
}: Readonly<GroovyToolsProps>) {
  return (
    <div className={styles.toolbar}>
      <GroovyToolDrone drone={drone} />
    </div>
  );
}
export default GroovyTools;
