import React, { useEffect, useState } from "react";
import styles from "./BassTheoryContent.module.css";
//import TheoryTab from "./TheoryTab";

import BassTheoryTableFifths from "./BassTheoryTableFifths";
//import { useLocation } from "react-router-dom";
import BassTheoryFretboard from "./BassTheoryFretboard";
import GroovyTab from "../general/GroovyTab";
import BassTheoryTableLink from "./BassTheoryTableLink";
import GroovyTools from "../groovytools/GroovyTools";
//import {useNavigate } from "react-router-dom";
interface TheoryProps {
  jsonfile: string;
  handleNavTheory: (key: string, context: string) => void;
  context: string;
  onSelectKey: React.Dispatch<React.SetStateAction<string>>;
  previousKey: string;
}

export type FretType = {
  fret_name: string;
  fret_locs: string;
  fret_id: string;
  fret_notes?: string;
  fret_rootszeroindex?: string;
};

export type TheoryType = {
  song: string;
  by: string;
  key: string;
  theorylink: string;
  tuning: string;
  notes?: string;
  relativelink: string;
  relativelinktext: string;
  chords: string;
  chordtones: string;
  drone?: string;
  textb4tab1?: string;
  tablefifths?: string;
  fretboard?: string;
  when?: string;
  formula?: string;
  idkey?: string;
  fret_displays?: FretType[];
  fret_name1?: string;
  fret_locs1?: string;
  fret_id1?: string;
  g1?: string;
  d1?: string;
  a1?: string;
  e1?: string;
  g2?: string;
  d2?: string;
  a2?: string;
  e2?: string;
  g3?: string;
  d3?: string;
  a3?: string;
  e3?: string;
  g4?: string;
  d4?: string;
  a4?: string;
  e4?: string;
  textb4tab2?: string;
  g5?: string;
  d5?: string;
  a5?: string;
  e5?: string;
  g6?: string;
  d6?: string;
  a6?: string;
  e6?: string;
  g7?: string;
  d7?: string;
  a7?: string;
  e7?: string;
  g8?: string;
  d8?: string;
  a8?: string;
  e8?: string;
  textb4tab3?: string;
  g9?: string;
  d9?: string;
  a9?: string;
  e9?: string;
  g10?: string;
  d10?: string;
  a10?: string;
  e10?: string;
  g11?: string;
  d11?: string;
  a11?: string;
  e11?: string;
  g12?: string;
  d12?: string;
  a12?: string;
  e12?: string;
  textb4tab4?: string;
  g13?: string;
  d13?: string;
  a13?: string;
  e13?: string;
  g14?: string;
  d14?: string;
  a14?: string;
  e14?: string;
  g15?: string;
  d15?: string;
  a15?: string;
  e15?: string;
  g16?: string;
  d16?: string;
  a16?: string;
  e16?: string;

  textb4tab5?: string;
  g17?: string;
  d17?: string;
  a17?: string;
  e17?: string;
  g18?: string;
  d18?: string;
  a18?: string;
  e18?: string;
  g19?: string;
  d19?: string;
  a19?: string;
  e19?: string;
  g20?: string;
  d20?: string;
  a20?: string;
  e20?: string;

  textb4tab6?: string;
  g21?: string;
  d21?: string;
  a21?: string;
  e21?: string;
  g22?: string;
  d22?: string;
  a22?: string;
  e22?: string;
  g23?: string;
  d23?: string;
  a23?: string;
  e23?: string;
  g24?: string;
  d24?: string;
  a24?: string;
  e24?: string;

  textb4tab7?: string;
  g25?: string;
  d25?: string;
  a25?: string;
  e25?: string;
  g26?: string;
  d26?: string;
  a26?: string;
  e26?: string;
  g27?: string;
  d27?: string;
  a27?: string;
  e27?: string;
  g28?: string;
  d28?: string;
  a28?: string;
  e28?: string;

  textb4tab8?: string;
  g29?: string;
  d29?: string;
  a29?: string;
  e29?: string;
  g30?: string;
  d30?: string;
  a30?: string;
  e30?: string;
  g31?: string;
  d31?: string;
  a31?: string;
  e31?: string;
  g32?: string;
  d32?: string;
  a32?: string;
  e32?: string;

  textb4tab9?: string;
  g33?: string;
  d33?: string;
  a33?: string;
  e33?: string;
  g34?: string;
  d34?: string;
  a34?: string;
  e34?: string;
  g35?: string;
  d35?: string;
  a35?: string;
  e35?: string;
  g36?: string;
  d36?: string;
  a36?: string;
  e36?: string;
};
// dronePlaying,
// toggleDronePlay,
// stopDronePlay,
function BassTheoryContent({
  jsonfile,
  handleNavTheory,
  context,
  onSelectKey,
  previousKey,
}: TheoryProps) {
  const [theoryJson, setTheoryJson] = useState<TheoryType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //

  //const [back, setBack] = useState("");
  //const [showBack, setShowBack] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const sentState = location.state;
  // console.log(`sentState ${sentState}`);
  // if (sentState != null) {
  //   if (sentState.selkey != undefined) {
  //     handleNavTheory(sentState.selkey, "C");
  //     location.state = null;
  //     //console.log(`sentState2 ${sentState}`);
  //   }
  // }

  useEffect(
    function () {
      async function fetchTheory() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(`./theory/${jsonfile}.json`);
          const data: TheoryType = await res.json();
          setTheoryJson(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchTheory();
    },
    [jsonfile]
  );

  function aka(jsong: string) {
    if (jsong.indexOf("Major") != -1) return "AKA: Ionian Mode";
    else {
      return "AKA: Aeolian Mode/Natural Minor Scale";
    }
  }

  // function handleBack() {
  //   //navigate(-1);
  //   setBack(jsonfile);
  // }

  //   function optionOne(jsong, chord) {

  //   }
  //if (error) return <div>Error loading, refresh {error}</div>;
  if (isLoading) {
    //console.log("Loading...");
    return null;
  }

  if (error) {
    console.log("There is an error %s", error);
    return null;
  }

  //<button onClick={handleBack}>back</button>
  //{back?.length > 0 ? <button onClick={handleBack}>back</button> : null}

  // dronePlaying={dronePlaying}
  // toggleDronePlay={toggleDronePlay}
  // stopDronePlay={stopDronePlay}

  return (
    <div>
      {theoryJson && !isLoading ? (
        <div>
          <p className={styles.p}>
            {theoryJson.song}{" "}
            <span className={styles.back}>
              {previousKey?.length > 0 ? (
                <a onClick={() => onSelectKey(previousKey)}>back</a>
              ) : null}
            </span>
          </p>

          {theoryJson.key ? (
            <>
              <p className={styles.p}>{aka(theoryJson.song)}</p>
              <p className={styles.p}>Key:{theoryJson.key}</p>
              <GroovyTools
                drone={
                  theoryJson.drone
                    ? theoryJson.drone
                    : "./audio/drones/drone_c.ogg"
                }
              />
            </>
          ) : theoryJson.tablefifths ? (
            <BassTheoryTableFifths />
          ) : theoryJson.fretboard ? (
            <BassTheoryFretboard theoryJson={theoryJson} context={context} />
          ) : null}

          {theoryJson.chords ? (
            <table className={styles.chord}>
              <caption>Chords</caption>
              <tbody>
                <tr>
                  {theoryJson.chords.split(",").map((chord, index) => (
                    <th key={`${index}${chord}`}>{index + 1}</th>
                  ))}
                </tr>
                <tr>
                  {theoryJson.chords.split(",").map((chord, index) => (
                    <td key={index} id={`chord${index + 1}`}>
                      {chord}
                    </td>
                  ))}
                </tr>
                <tr>
                  {theoryJson.chordtones.split(",").map((chordtone, index) => (
                    <td key={index} id={`chordtone${index + 1}`}>
                      {chordtone}
                    </td>
                  ))}
                </tr>
                <tr>
                  {theoryJson.chords.split(",").map((chord, index) => (
                    <td key={`${index}${chord}`} id={`optionone${index + 1}`}>
                      {theoryJson.song.indexOf("Major") != -1 ? (
                        index == 0 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Ionian
                          </BassTheoryTableLink>
                        ) : index == 1 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Dorian
                          </BassTheoryTableLink>
                        ) : index == 2 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Phrygian
                          </BassTheoryTableLink>
                        ) : index == 3 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Lydian
                          </BassTheoryTableLink>
                        ) : index == 4 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Mixolydian
                          </BassTheoryTableLink>
                        ) : index == 5 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Aeolian
                          </BassTheoryTableLink>
                        ) : index == 6 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                          >
                            Locrian
                          </BassTheoryTableLink>
                        ) : null
                      ) : index == 0 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Aeolian
                        </BassTheoryTableLink>
                      ) : index == 1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Locrian
                        </BassTheoryTableLink>
                      ) : index == 2 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Ionian
                        </BassTheoryTableLink>
                      ) : index == 3 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Dorian
                        </BassTheoryTableLink>
                      ) : index == 4 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Phrygian
                        </BassTheoryTableLink>
                      ) : index == 5 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Lydian
                        </BassTheoryTableLink>
                      ) : index == 6 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                        >
                          Mixolydian
                        </BassTheoryTableLink>
                      ) : null}
                    </td>
                  ))}
                </tr>
                <tr>
                  {theoryJson.chords.split(",").map((chord, index) => (
                    <td key={index} id={`optiontwo${index + 1}`}>
                      {chord.indexOf("dim") > -1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          specifyfile="fret_diminishedtriadarpeggios"
                        >
                          Diminished Triad
                        </BassTheoryTableLink>
                      ) : chord.indexOf("m") > -1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          specifyfile="fret_minortriadarpeggios"
                        >
                          Minor Triad
                        </BassTheoryTableLink>
                      ) : (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          specifyfile="fret_majortriadarpeggios"
                        >
                          Major Triad
                        </BassTheoryTableLink>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ) : null}

          {theoryJson.notes ? (
            <p className={styles.p}>
              Notes:{theoryJson.notes}
              <a onClick={() => handleNavTheory(theoryJson.relativelink, "C")}>
                {theoryJson.relativelinktext}
              </a>
            </p>
          ) : null}

          {theoryJson.textb4tab1 ? (
            <p className={styles.p}>{theoryJson.textb4tab1}</p>
          ) : null}

          {theoryJson.e1 ? (
            <GroovyTab json={theoryJson} rowBeginning={1} />
          ) : null}

          {theoryJson.textb4tab2 ? (
            <p className={styles.p}>{theoryJson.textb4tab2}</p>
          ) : null}

          {theoryJson.e5 ? (
            <GroovyTab json={theoryJson} rowBeginning={5} />
          ) : null}

          {theoryJson.textb4tab3 ? (
            <p className={styles.p}>{theoryJson.textb4tab3}</p>
          ) : null}

          {theoryJson.e9 ? (
            <GroovyTab json={theoryJson} rowBeginning={9} />
          ) : null}

          {theoryJson.textb4tab4 ? (
            <p className={styles.p}>{theoryJson.textb4tab4}</p>
          ) : null}

          {theoryJson.e13 ? (
            <GroovyTab json={theoryJson} rowBeginning={13} />
          ) : null}

          {theoryJson.textb4tab5 ? (
            <p className={styles.p}>{theoryJson.textb4tab5}</p>
          ) : null}

          {theoryJson.e17 ? (
            <GroovyTab json={theoryJson} rowBeginning={17} />
          ) : null}

          {theoryJson.textb4tab6 ? (
            <p className={styles.p}>{theoryJson.textb4tab6}</p>
          ) : null}

          {theoryJson.e21 ? (
            <GroovyTab json={theoryJson} rowBeginning={21} />
          ) : null}

          {theoryJson.textb4tab7 ? (
            <p className={styles.p}>{theoryJson.textb4tab7}</p>
          ) : null}

          {theoryJson.e25 ? (
            <GroovyTab json={theoryJson} rowBeginning={25} />
          ) : null}

          {theoryJson.textb4tab8 ? (
            <p className={styles.p}>{theoryJson.textb4tab8}</p>
          ) : null}

          {theoryJson.e29 ? (
            <GroovyTab json={theoryJson} rowBeginning={29} />
          ) : null}

          {theoryJson.textb4tab9 ? (
            <p className={styles.p}>{theoryJson.textb4tab9}</p>
          ) : null}

          {theoryJson.e33 ? (
            <GroovyTab json={theoryJson} rowBeginning={33} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default BassTheoryContent;
