/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

const ToolContext = createContext({
  dronePlaying: false,
  toggleDronePlaying: () => {},
});

type childProps = {
  children: ReactNode;
};

function ToolProvider({ children }: Readonly<childProps>) {
  const [dronePlaying, setDronePlaying] = useState(false);
  //const [audio, setAudio] = useState(new Audio("./audio/drones/drone_c.mp3"));

  //   useEffect(() => {
  //     //if (audio != undefined) {
  //     if (dronePlaying) {
  //       audio.loop = true;
  //       audio.play();
  //     } else {
  //       audio.pause();
  //     }
  //     //}
  //   }, [dronePlaying, audio]);

  function toggleDronePlaying() {
    setDronePlaying(() => !dronePlaying);
  }
  //value={{ dronePlaying, toggleDronePlaying, setAudio }}
  return (
    <ToolContext.Provider value={{ dronePlaying, toggleDronePlaying }}>
      {children}
    </ToolContext.Provider>
  );
}

function useTool() {
  const context = useContext(ToolContext);

  if (context === undefined)
    throw new Error("ToolContext used outside of ToolContext Provider");
  return context;
}

export { ToolProvider, useTool };
