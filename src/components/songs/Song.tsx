import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroovyTabV2 from "../general/GroovyTabV2";
import styles from "./Song.module.css";

// export type SongObject = {
//   transcription: SongType;
// };

export type EType = {
  e: string;
};

export type AType = {
  a: string;
};

export type DType = {
  d: string;
};

export type GType = {
  g: string;
};

export type GroovyTabV2Type = {
  g: GType[];
  d: DType[];
  a: AType[];
  e: EType[];
  text?: string;
};

export type GroovyTabTableType = {
  tableid: string;
  table: GroovyTabV2Type[];
};

export type SongType = {
  song: string;
  by: string;
  key: string;
  theorylink: string;
  tuning: string;
  tab?: GroovyTabTableType[];
  drum?: string;
  video?: string;
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
          {songJson.key ? (
            <>
              <p>
                Key -{" "}
                {songJson.theorylink ? (
                  <Link
                    to={`/?jamkey=${songJson.theorylink}`}
                    state={{ selkey: songJson.theorylink }}
                  >
                    {songJson.key}
                  </Link>
                ) : (
                  songJson.key
                )}
              </p>
            </>
          ) : null}
          {songJson.tuning ? <p>{`Tuning - ${songJson.tuning}`}</p> : null}

          {songJson.drum ? <p>{`Drum - ${songJson.drum}`}</p> : null}

          {songJson.tab ? <GroovyTabV2 tab={songJson.tab} /> : null}

          {songJson.video ? (
            <div className={styles.icont}>
              <iframe
                src={`https://www.tiktok.com/embed/${songJson.video}`}
                className={styles.iframe}
              ></iframe>
            </div>
          ) : null}
        </article>
      ) : null}
    </>
  );
}
export default Song;
