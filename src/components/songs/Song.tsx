import { useEffect, useState } from "react";
import styles from "./Song.module.css";
import GroovyTab from "../general/GroovyTab";

// export type SongObject = {
//   transcription: SongType;
// };

export type SongType = {
  song: string;
  by: string;
  key: string;
  theorylink: string;
  tuning: string;
  textb4tab1?: string;
  g1: string;
  d1: string;
  a1: string;
  e1: string;
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
};

interface SongProps {
  jsonfile: string;
}
//const [songJson, setSongJson] = useState<SongType[]>([]);
//const data: SongType[] = await res.json();
function Song({ jsonfile }: SongProps) {
  const [songJson, setSongJson] = useState<SongType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchSong() {
        try {
          setIsLoading(true);
          const res = await fetch(`./songs/${jsonfile}.json`);
          //const data: SongObject = await res.json();
          const data: SongType = await res.json();
          setSongJson(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchSong();
    },
    [jsonfile]
  );

  // const song = fetch(`./songs/${jsonfile}.json`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // console.log("in here");

  //<p>{`${songJson} - ${songJson.by}`}</p>
  //{songJson ? <div>blah{songJson.by}</div> : <div>nah</div>}

  //<div className={styles.div}>Song was clicked</div>

  //   <div>
  //   {Array.from(songJson).map((songitem, index) => (
  //     <div>{songitem.song}</div>
  //   ))}
  // </div>

  // <div>
  //   {Object.keys(songJson).map((songitem, index) => (
  //     <>
  //       <div>{songJson[songitem]}</div>
  //       {songitem === "song" ? <div>{songJson[songitem]}</div> : null}
  //       {songitem === "by" ? (
  //         <div>{`by ${songJson[songitem]}`}</div>
  //       ) : null}
  //     </>
  //   ))}
  // </div>

  // <article>
  //   {JSON.stringify(songJson).indexOf("song") != -1 ? (
  //     <p>{`${songJson!.song} - ${songJson.by}`}</p>
  //   ) : null}
  //   {songJson.key ? <p>{`Key: - ${songJson.key}`}</p> : null}
  //   {songJson.tuning ? <p>{`Tuning: - ${songJson.tuning}`}</p> : null}
  // </article>

  //<td>{songJson.transcription[`e${1 + 0}`]}|</td>
  return (
    <>
      {isLoading ? <div>Loading...</div> : null}
      {error ? <div>Error</div> : null}

      {songJson ? (
        <article>
          <p>{`${songJson.song} - ${songJson.by}`}</p>
          {songJson.key ? <p>{`Key: - ${songJson.key}`}</p> : null}
          {songJson.tuning ? <p>{`Tuning: - ${songJson.tuning}`}</p> : null}
          {songJson.g1 ? (
            <>
              {songJson.textb4tab1 ? (
                <div className={styles.leftdiv}>{songJson.textb4tab1}</div>
              ) : null}
              <GroovyTab json={songJson} rowBeginning={1} />
              {songJson.textb4tab2 ? (
                <div className={styles.leftdiv}>{songJson.textb4tab2}</div>
              ) : null}
              <GroovyTab json={songJson} rowBeginning={5} />
              {songJson.textb4tab3 ? (
                <div className={styles.leftdiv}>{songJson.textb4tab3}</div>
              ) : null}
              <GroovyTab json={songJson} rowBeginning={9} />
              {songJson.textb4tab4 ? (
                <div className={styles.leftdiv}>{songJson.textb4tab4}</div>
              ) : null}
              <GroovyTab json={songJson} rowBeginning={13} />
              {songJson.textb4tab5 ? (
                <div className={styles.leftdiv}>{songJson.textb4tab5}</div>
              ) : null}
              <GroovyTab json={songJson} rowBeginning={17} />
            </>
          ) : null}
        </article>
      ) : null}
    </>
  );
}
export default Song;
