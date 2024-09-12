import { useState } from "react";
import styles from "./BassTheoryFretboard.module.css";
import { TheoryType } from "./BassTheoryContent";

interface BassTheoryFretboardProps {
  theoryJson: TheoryType;
  context: string;
}

//export const keys: <K extends string>(r: Record<K, any>) => K[] = Object.keys.bind(Object);

function BassTheoryFretboard({
  theoryJson,
  context,
}: BassTheoryFretboardProps) {
  const [buttonText, setButtonText] = useState("");
  const [showOption, setShowOption] = useState(false);
  const [fretLocs, setFretLocs] = useState(
    theoryJson.fret_displays![0].fret_locs
  );

  //type Allkeys = keyof typeof theoryJson;
  //type mykeys = Extract<keyof typeof theoryJson, `fret_name${number}`>;

  //   console.log(
  //     `Jen in component fretname: ${theoryJson.fret_name1} buttontext: ${buttonText} fretlocs: ${theoryJson.fret_locs1} fretlocsvar: ${fretLocs} `
  //   );

  let key = "";
  if (context == "") {
    key = `c${theoryJson.idkey}`;
  } else {
    key = `${context}${theoryJson.idkey}`;
  }

  console.log(`finalcontext ${key}`);

  console.log(`context ${context}`);
  console.log(`idkey ${theoryJson.idkey}`);
  console.log(`together ${context}${theoryJson.idkey}`);

  //if fretLocs.length == -1 ? setFretLocs(theoryJson.fret_locs1) : <div></div>}

  //   useEffect(
  //     function () {
  //       console.log(`Jen in effect ${buttonText}`);
  //       setButtonText(buttonText);
  //     },
  //     [buttonText]
  //   );
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
    //alert(e);
    console.log("in handle selection:::");
    console.log((e.target as HTMLLIElement).textContent);
    console.log((e.target as HTMLLIElement).id);
    console.log((e.target as HTMLLIElement).getAttribute("value"));
    setButtonText((e.target as HTMLLIElement).textContent!);
    setFretLocs((e.target as HTMLLIElement).getAttribute("value")!);
  }
  //{buttonText === "" ? theoryJson.fret_name1 : buttonText}
  return (
    <>
      {theoryJson.when ? <p className={styles.p}>{theoryJson.when}</p> : null}
      {theoryJson.formula ? (
        <p className={styles.p}>Formula: {theoryJson.formula}</p>
      ) : null}
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
          ></input>
          <>
            <ul>
              {theoryJson.fret_displays!.map((fret_display) => (
                <li
                  key={fret_display.fret_id}
                  id={fret_display.fret_id}
                  value={fret_display.fret_locs}
                  onClick={handleSelection}
                >
                  {fret_display.fret_name}
                </li>
              ))}
            </ul>
          </>
        </div>
      </div>

      <img
        src="/images/theory/fretboarddos.jpg"
        className={styles.fretboard}
      ></img>

      {
        <div>
          {fretLocs} {fretLocs!.length} {fretLocs!.match(/,/g)!.length}
        </div>
      }

      {fretLocs!.split(",").map((fretLoc, index) => (
        <img
          key={index}
          src={
            index == 0
              ? "/images/theory/diamond3.png"
              : "/images/theory/diamond1.png"
          }
          className={`${styles.alllocs} ${styles[fretLoc]} ${
            fretLocs!.match(/,/g)!.length == 7
              ? index == 0
                ? styles.leftOffset
                : index == 1
                ? styles.leftOffsetOne
                : index == 2
                ? styles.leftOffsetTwo
                : index == 3
                ? styles.leftOffsetThree
                : index == 4
                ? styles.leftOffsetFour
                : index == 5
                ? styles.leftOffsetFive
                : index == 6
                ? styles.leftOffsetSix
                : index == 7
                ? styles.leftOffsetSeven
                : ""
              : fretLocs!.match(/,/g)!.length == 3
              ? index == 0
                ? styles.leftOffsetTwo
                : index == 1
                ? styles.leftOffsetThree
                : index == 2
                ? styles.leftOffsetFour
                : index == 3
                ? styles.leftOffsetFive
                : ""
              : fretLocs!.match(/,/g)!.length == 5
              ? index == 0
                ? styles.leftOffsetOne
                : index == 1
                ? styles.leftOffsetTwo
                : index == 2
                ? styles.leftOffsetThree
                : index == 3
                ? styles.leftOffsetFour
                : index == 4
                ? styles.leftOffsetFive
                : index == 5
                ? styles.leftOffsetSix
                : ""
              : fretLocs!.match(/,/g)!.length == 6
              ? index == 0
                ? styles.leftOffsetHalfOne
                : index == 1
                ? styles.leftOffsetHalfTwo
                : index == 2
                ? styles.leftOffsetHalfThree
                : index == 3
                ? styles.leftOffsetHalfFour
                : index == 4
                ? styles.leftOffsetHalfFive
                : index == 5
                ? styles.leftOffsetHalfSix
                : index == 6
                ? styles.leftOffsetHalfSeven
                : ""
              : ""
          }`}
        ></img>
      ))}
    </>
  );
}

export default BassTheoryFretboard;
