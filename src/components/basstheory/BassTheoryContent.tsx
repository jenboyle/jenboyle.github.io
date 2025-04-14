import React, { useEffect, useState } from "react";
import styles from "./BassTheoryContent.module.css";
//import TheoryTab from "./TheoryTab";

import BassTheoryTableFifths from "./BassTheoryTableFifths";
//import { useLocation } from "react-router-dom";
import BassTheoryFretboard from "./BassTheoryFretboard";
import BassTheoryTableLink from "./BassTheoryTableLink";
import GroovyTools from "../groovytools/GroovyTools";
import BassChord from "./BassChord";
import { HashLink } from "react-router-hash-link";
import GroovyTabV2 from "../general/GroovyTabV2";
import { GroovyTabTableType } from "../songs/Song";
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
  drone: string;
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
  tab?: GroovyTabTableType[];

  chord1?: string;
  chord1out?: string;
  chord1e?: string;
  chord1a?: string;
  chord1d?: string;
  chord1g?: string;

  chord2?: string;
  chord2out?: string;
  chord2e?: string;
  chord2a?: string;
  chord2d?: string;
  chord2g?: string;

  chord3?: string;
  chord3out?: string;
  chord3e?: string;
  chord3a?: string;
  chord3d?: string;
  chord3g?: string;

  chord4?: string;
  chord4out?: string;
  chord4e?: string;
  chord4a?: string;
  chord4d?: string;
  chord4g?: string;

  chord5?: string;
  chord5out?: string;
  chord5e?: string;
  chord5a?: string;
  chord5d?: string;
  chord5g?: string;

  chord6?: string;
  chord6out?: string;
  chord6e?: string;
  chord6a?: string;
  chord6d?: string;
  chord6g?: string;

  chord7?: string;
  chord7out?: string;
  chord7e?: string;
  chord7a?: string;
  chord7d?: string;
  chord7g?: string;

  chord8?: string;
  chord8out?: string;
  chord8e?: string;
  chord8a?: string;
  chord8d?: string;
  chord8g?: string;
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
                key={theoryJson.drone}
                drone={
                  theoryJson.drone
                    ? theoryJson.drone
                    : "./audio/drones/drone_c.mp3"
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
              <tbody>
                <tr>
                  <th>Chord</th>
                  <th>Tones</th>
                  <th>Mode</th>
                  <th>Triad</th>
                </tr>

                {theoryJson.chords.split(",").map((chord, index) => (
                  <tr key={index}>
                    <td id={`chord${index + 1}`}>
                      <span className={styles.item}>
                        <HashLink to="/#chordsection">{chord}</HashLink>
                        <img
                          className={styles.quicklook}
                          src={`./theory/shapes/${index + 1}.png`}
                        ></img>
                      </span>
                    </td>

                    <td>{theoryJson.chordtones.split(",")[index]}</td>

                    <td key={`${index}${chord}`} id={`optionone${index + 1}`}>
                      {theoryJson.song.indexOf("Major") != -1 ? (
                        index == 0 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/ionian.png"
                          >
                            Ionian
                          </BassTheoryTableLink>
                        ) : index == 1 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/dorian.png"
                          >
                            Dorian
                          </BassTheoryTableLink>
                        ) : index == 2 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/phr.png"
                          >
                            Phrygian
                          </BassTheoryTableLink>
                        ) : index == 3 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/lydian.png"
                          >
                            Lydian
                          </BassTheoryTableLink>
                        ) : index == 4 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/mixolydian.png"
                          >
                            Mixolydian
                          </BassTheoryTableLink>
                        ) : index == 5 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/aeolian.png"
                          >
                            Aeolian
                          </BassTheoryTableLink>
                        ) : index == 6 ? (
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            hoverimg="./theory/shapes/locrian.png"
                          >
                            Locrian
                          </BassTheoryTableLink>
                        ) : null
                      ) : index == 0 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/aeolian.png"
                        >
                          Aeolian
                        </BassTheoryTableLink>
                      ) : index == 1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/locrian.png"
                        >
                          Locrian
                        </BassTheoryTableLink>
                      ) : index == 2 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/ionian.png"
                        >
                          Ionian
                        </BassTheoryTableLink>
                      ) : index == 3 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/dorian.png"
                        >
                          Dorian
                        </BassTheoryTableLink>
                      ) : index == 4 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/phr.png"
                        >
                          Phrygian
                        </BassTheoryTableLink>
                      ) : index == 5 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/lydian.png"
                        >
                          Lydian
                        </BassTheoryTableLink>
                      ) : index == 6 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          hoverimg="./theory/shapes/mixolydian.png"
                        >
                          Mixolydian
                        </BassTheoryTableLink>
                      ) : null}
                    </td>

                    <td key={index} id={`optiontwo${index + 1}`}>
                      {chord.indexOf("dim") > -1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          specifyfile="fret_diminishedtriadarpeggios"
                          hoverimg="./theory/shapes/dim.png"
                        >
                          Diminished
                        </BassTheoryTableLink>
                      ) : chord.indexOf("m") > -1 ? (
                        <BassTheoryTableLink
                          handleNavTheory={handleNavTheory}
                          chord={chord}
                          specifyfile="fret_minortriadarpeggios"
                          hoverimg="./theory/shapes/minortriad.png"
                        >
                          Minor
                        </BassTheoryTableLink>
                      ) : (
                        <>
                          <BassTheoryTableLink
                            handleNavTheory={handleNavTheory}
                            chord={chord}
                            specifyfile="fret_majortriadarpeggios"
                            hoverimg="./theory/shapes/majortriad.png"
                          >
                            Major
                          </BassTheoryTableLink>
                          {theoryJson.song.indexOf("Major") != -1 &&
                          index == 4 ? (
                            <>
                              <span>, </span>
                              <BassTheoryTableLink
                                handleNavTheory={handleNavTheory}
                                chord={chord}
                                specifyfile="fret_dominant7arpeggios"
                                hoverimg="./theory/shapes/dom7.png"
                              >
                                Dom7
                              </BassTheoryTableLink>
                            </>
                          ) : theoryJson.song.indexOf("Minor") != -1 &&
                            index == 6 ? (
                            <>
                              <span>, </span>
                              <BassTheoryTableLink
                                handleNavTheory={handleNavTheory}
                                chord={chord}
                                specifyfile="fret_dominant7arpeggios"
                                hoverimg="./theory/shapes/dom7.png"
                              >
                                Dom7
                              </BassTheoryTableLink>
                            </>
                          ) : null}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
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

          {theoryJson.tab ? <GroovyTabV2 tab={theoryJson.tab} /> : null}

          <div id="chordsection" className={styles.chordsectiondiv} />
          <p className={styles.p}>Bass Chords</p>
          {theoryJson.chord1 ? (
            <>
              <div className={styles.chorddiv}>
                {theoryJson.chord1 ? (
                  <BassChord
                    chord={theoryJson.chord1}
                    chordout={
                      theoryJson.chord1out ? theoryJson.chord1out : "no"
                    }
                    chorde={theoryJson.chord1e!}
                    chorda={theoryJson.chord1a!}
                    chordd={theoryJson.chord1d!}
                    chordg={theoryJson.chord1g!}
                  />
                ) : null}
                {theoryJson.chord2 ? (
                  <BassChord
                    chord={theoryJson.chord2}
                    chordout={
                      theoryJson.chord2out ? theoryJson.chord2out : "no"
                    }
                    chorde={theoryJson.chord2e!}
                    chorda={theoryJson.chord2a!}
                    chordd={theoryJson.chord2d!}
                    chordg={theoryJson.chord2g!}
                  />
                ) : null}
                {theoryJson.chord3 ? (
                  <BassChord
                    chord={theoryJson.chord3}
                    chordout={
                      theoryJson.chord3out ? theoryJson.chord3out : "no"
                    }
                    chorde={theoryJson.chord3e!}
                    chorda={theoryJson.chord3a!}
                    chordd={theoryJson.chord3d!}
                    chordg={theoryJson.chord3g!}
                  />
                ) : null}
              </div>
              <div className={styles.chorddiv}>
                {theoryJson.chord4 ? (
                  <BassChord
                    chord={theoryJson.chord4}
                    chordout={
                      theoryJson.chord4out ? theoryJson.chord4out : "no"
                    }
                    chorde={theoryJson.chord4e!}
                    chorda={theoryJson.chord4a!}
                    chordd={theoryJson.chord4d!}
                    chordg={theoryJson.chord4g!}
                  />
                ) : null}
                {theoryJson.chord5 ? (
                  <BassChord
                    chord={theoryJson.chord5}
                    chordout={
                      theoryJson.chord5out ? theoryJson.chord5out : "no"
                    }
                    chorde={theoryJson.chord5e!}
                    chorda={theoryJson.chord5a!}
                    chordd={theoryJson.chord5d!}
                    chordg={theoryJson.chord5g!}
                  />
                ) : null}
                {theoryJson.chord6 ? (
                  <BassChord
                    chord={theoryJson.chord6}
                    chordout={
                      theoryJson.chord6out ? theoryJson.chord6out : "no"
                    }
                    chorde={theoryJson.chord6e!}
                    chorda={theoryJson.chord6a!}
                    chordd={theoryJson.chord6d!}
                    chordg={theoryJson.chord6g!}
                  />
                ) : null}
              </div>
              <div className={styles.chorddiv}>
                {theoryJson.chord7 ? (
                  <BassChord
                    chord={theoryJson.chord7}
                    chordout={
                      theoryJson.chord7out ? theoryJson.chord7out : "no"
                    }
                    chorde={theoryJson.chord7e!}
                    chorda={theoryJson.chord7a!}
                    chordd={theoryJson.chord7d!}
                    chordg={theoryJson.chord7g!}
                  />
                ) : null}
                {theoryJson.chord8 ? (
                  <BassChord
                    chord={theoryJson.chord8}
                    chordout={
                      theoryJson.chord8out ? theoryJson.chord8out : "no"
                    }
                    chorde={theoryJson.chord8e!}
                    chorda={theoryJson.chord8a!}
                    chordd={theoryJson.chord8d!}
                    chordg={theoryJson.chord8g!}
                  />
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default BassTheoryContent;
