import { useEffect, useState } from "react";
import commonStyles from "../general/GroovyStyles.module.css";
import styles from "./BassTheoryFretboard.module.css";
import { TheoryType } from "./BassTheoryContent";
import BassTheoryTip from "./BassTheoryTip";
import GroovyTools from "../groovytools/GroovyTools";

interface BassTheoryFretboardProps {
  theoryJson: TheoryType;
  context: string;
}

//export const keys: <K extends string>(r: Record<K, any>) => K[] = Object.keys.bind(Object);

function BassTheoryFretboard({
  theoryJson,
  context,
}: Readonly<BassTheoryFretboardProps>) {
  const [buttonText, setButtonText] = useState("");
  const [showOption, setShowOption] = useState(false);
  const [fretLocs, setFretLocs] = useState(
    theoryJson.fret_displays![0].fret_locs
  );
  const [fretDrone, setFretDrone] = useState(
    theoryJson.fret_displays![0].drone
  );
  const [searchQuery, setSearchQuery] = useState("");

  //type Allkeys = keyof typeof theoryJson;
  //type mykeys = Extract<keyof typeof theoryJson, `fret_name${number}`>;

  //   console.log(
  //     `Jen in component fretname: ${theoryJson.fret_name1} buttontext: ${buttonText} fretlocs: ${theoryJson.fret_locs1} fretlocsvar: ${fretLocs} `
  //   );

  // console.log(`context ${context}`);
  // console.log(`idkey ${theoryJson.idkey}`);
  // console.log(`together ${context}${theoryJson.idkey}`);

  // theoryJson.fret_displays!.map((fd) => (
  //   fd.fret_id === `${context}${theoryJson.idkey}` ?
  //   {setButtonText({fd.fret_name});
  //   setFretLocs({fd.fret_locs});
  //    } : null
  // ));

  //if fretLocs.length == -1 ? setFretLocs(theoryJson.fret_locs1) : <div></div>}

  // {theoryJson.song === "Ionian" && (
  //   <BassTheoryTip tip="Continue the pattern on the Octave" />
  // )}

  useEffect(
    function () {
      let initial = "";
      if (context == "") {
        initial = `c${theoryJson.idkey}`;
      } else {
        initial = `${context}${theoryJson.idkey}`;
      }

      //console.log(`Jen in effect ${initial}`);
      //console.log(`Jen in effect ${context}`);
      //console.log(`Jen in effect ${theoryJson}`);

      //console.log(`finalcontext ${initial}`);

      for (let i = 0; i < theoryJson.fret_displays!.length; i++) {
        if (initial === theoryJson.fret_displays![i].fret_id) {
          // console.log("matched");
          setButtonText(theoryJson.fret_displays![i].fret_name);
          setFretLocs(theoryJson.fret_displays![i].fret_locs);
          setFretDrone(theoryJson.fret_displays![i].drone);
          // if (theoryJson.fret_displays![i].fret_rootszeroindex != undefined) {
          //   //fret_rootszeroindex
          //   console.log(theoryJson.fret_displays![i].fret_rootszeroindex);
          // }
        }
      }

      //theoryJson.fret_displays![0].fret_locs
      //setButtonText(buttonText);
      //set the initial context
      //   initial === fret_display.fret_id
      //     ? fret_display.fret_locs

      //theoryJson.fret_displays!.

      // theoryJson.fret_displays!.map((fd) => (
      //   fd.fret_id === initial ? {
      //   setButtonText(fd.fret_name);
      //   setFretLocs(fd.fret_locs);
      //   }
      // ));
    },
    [context, theoryJson]
  );

  const searchedFretDisplays =
    searchQuery.length > 0
      ? theoryJson.fret_displays!.filter((fretd) =>
          fretd.fret_name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : theoryJson.fret_displays;

  //[theoryJson.fret_name1, buttonText]
  function handleClick() {
    setShowOption(!showOption);
  }

  //   function initialState() {
  //     setFretLocs(theoryJson.fret_name1);
  //     return <div></div>;
  //   }

  function handleSelection(e: React.MouseEvent<HTMLLIElement>) {
    setShowOption(false);

    const data = (e.target as HTMLLIElement).getAttribute("value")!.split("+");

    //alert(e);
    //console.log("in handle selection:::");
    //console.log((e.target as HTMLLIElement).textContent);
    //console.log((e.target as HTMLLIElement).id);
    //console.log((e.target as HTMLLIElement).getAttribute("value"));
    setButtonText((e.target as HTMLLIElement).textContent!);
    //setFretLocs((e.target as HTMLLIElement).getAttribute("value")!);
    setFretLocs(data[0]);
    setFretDrone(data[1]);
  }
  //{buttonText === "" ? theoryJson.fret_name1 : buttonText}

  // defaultValue={
  //   initial === fret_display.fret_id
  //     ? fret_display.fret_locs
  //     : undefined
  // }

  // {
  //   <div>
  //     {fretLocs} {fretLocs!.length} {fretLocs!.match(/,/g)!.length}
  //   </div>
  // }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      {theoryJson.when ? (
        <p className={commonStyles.p}>{theoryJson.when}</p>
      ) : null}
      {theoryJson.formula ? (
        <p className={commonStyles.p}>Formula: {theoryJson.formula}</p>
      ) : null}
      <GroovyTools key={fretDrone} drone={fretDrone} />
      <div className={styles.dropdowntheory}>
        <button
          id="pentbutton"
          className={styles.dropbtntheory}
          onClick={handleClick}
        >
          {buttonText === ""
            ? theoryJson.fret_displays![0].fret_name
            : buttonText}
        </button>
        <div
          id="myDropdowntheory"
          className={`${styles.dropdowncontenttheory} ${
            showOption == false ? styles.hide : ""
          }`}
        >
          <input
            id="myInputtheory"
            type="text"
            placeholder="Search..."
            className={styles.myInputtheory}
            onChange={handleSearch}
          ></input>
          <>
            <ul>
              {searchedFretDisplays!.map((fret_display) => (
                <li
                  key={fret_display.fret_id}
                  id={fret_display.fret_id}
                  value={`${fret_display.fret_locs}+${fret_display.drone}`}
                  onClick={handleSelection}
                >
                  {fret_display.fret_name}
                </li>
              ))}
            </ul>
          </>
        </div>
      </div>

      <div className={styles.fretboardContainer}>
        <img
          src="/images/theory/fretboarddos.jpg"
          className={styles.fretboard}
          alt="Bass Fretboard"
        ></img>

        {fretLocs!.split(",").map((fretLoc, index) => (
          <img
            key={index}
            src={
              theoryJson.song != "Major Pentatonic"
                ? index == 0 || index == fretLocs!.split(",").length - 1
                  ? "/images/theory/diamond3.png"
                  : "/images/theory/diamond1.png"
                : "/images/theory/diamond1.png"
            }
            className={`${styles.pic} ${styles[fretLoc]}
`}
          ></img>
        ))}
      </div>

      <BassTheoryTip tip="Continue the pattern on the Octave" />
    </>
  );
}

export default BassTheoryFretboard;
