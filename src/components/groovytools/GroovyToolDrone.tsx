import styles from "./GroovyToolDrone.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useEffect, useRef, useState } from "react";
import { useTool } from "../../context/ToolContext";
import { allDrones } from "./allDrones";

// dronePlaying: boolean;
// toggleDronePlay(): void;
// stopDronePlay(): void;
interface GroovyToolsProps {
  drone: string;
}
// dronePlaying = false,
// toggleDronePlay,
// stopDronePlay,
function GroovyToolDrone({
  drone = "./audio/drones/drone_c.mp3",
}: GroovyToolsProps) {
  const [audio, setAudio] = useState(new Audio(drone));
  const [audiotwo, setAudioTwo] = useState(new Audio(drone));
  const droneRef = useRef<HTMLSpanElement>(null);
  const { dronePlaying, toggleDronePlaying } = useTool();
  //const { dronePlaying, toggleDronePlaying, setAudio } = useTool();
  //setAudio(new Audio(drone));

  //const [dronePlaying, setDronePlaying] = useState(false);
  //const droneRef = useRef<HTMLSpanElement>();

  // const droneName = drone
  //   .substring(drone.indexOf("_") + 1, drone.indexOf(".mp3"))
  //   .replace("sharp", "#");

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        //console.log("click");
        //console.log(droneRef.current);
        //console.log(droneRef.current?.contains(e.target));
        if (
          droneRef.current &&
          e.target instanceof HTMLElement &&
          !droneRef.current?.contains(e.target)
        ) {
          if (dronePlaying) {
            toggleDronePlaying();
          }
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    },
    [dronePlaying, toggleDronePlaying]
  );

  //  }, [dronePlaying, audio, stopDronePlay]);

  useEffect(() => {
    if (dronePlaying) {
      audio.loop = true;
      //audio.setAttribute("type", "audio/ogg");
      audio.setAttribute("type", "audio/mp3");
      audio.play();
      audiotwo.loop = true;
      //audiotwo.setAttribute("type", "audio/ogg");
      audiotwo.setAttribute("type", "audio/mp3");

      setTimeout(() => {
        audiotwo.play();
      }, 500);
    } else {
      audio.pause();
      audiotwo.pause();
    }
  }, [dronePlaying, audio, audiotwo]);

  //   function handleClickOutside(event) {

  //   }

  //const [audio] = useState(new Audio("./audio/drones/E.wav"));
  //const [audio] = useState(new Audio("./audio/drones/drone_g.mp3"));

  //   function handleDrone() {
  //     toggleDronePlay();
  //   }
  // {/*<audio controls src="./audio/drones/E.wav"></audio>*/}
  //  {/*<audio controls src="./audio/drones/E.wav" loop></audio>*/}

  //onClick={handleDrone}

  function handleDroneSelect(e: React.FormEvent<HTMLSelectElement>) {
    audio.pause();
    audiotwo.pause();
    setAudio(new Audio((e.target as HTMLSelectElement).value));
    setAudioTwo(new Audio((e.target as HTMLSelectElement).value));
  }

  return (
    <div className={styles.tool}>
      <select
        name="droneSelect"
        className={styles.select}
        onChange={handleDroneSelect}
        defaultValue={drone}
      >
        {allDrones.map((droneEle) => (
          <option key={droneEle.key} value={droneEle.drone}>
            {droneEle.key}
          </option>
        ))}
      </select>
      <span ref={droneRef} className={styles.play} onClick={toggleDronePlaying}>
        {dronePlaying ? <PauseCircleIcon /> : <PlayCircleOutlineIcon />}
      </span>
    </div>
  );
}

export default GroovyToolDrone;
