import styles from "./GroovyToolDrone.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useEffect, useRef, useState } from "react";
import { useTool } from "../../context/ToolContext";

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
  const [audio] = useState(new Audio(drone));
  const [audiotwo] = useState(new Audio(drone));
  const droneRef = useRef<HTMLSpanElement>(null);
  const { dronePlaying, toggleDronePlaying } = useTool();
  //const { dronePlaying, toggleDronePlaying, setAudio } = useTool();
  //setAudio(new Audio(drone));

  //const [dronePlaying, setDronePlaying] = useState(false);
  //const droneRef = useRef<HTMLSpanElement>();

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
      audio.setAttribute("type", "audio/ogg");
      audio.play();
      audiotwo.loop = true;
      audiotwo.setAttribute("type", "audio/ogg");

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

  return (
    <div className={styles.tool}>
      Drone
      <span ref={droneRef} className={styles.play} onClick={toggleDronePlaying}>
        {dronePlaying ? <PauseCircleIcon /> : <PlayCircleOutlineIcon />}
      </span>
    </div>
  );
}

export default GroovyToolDrone;
