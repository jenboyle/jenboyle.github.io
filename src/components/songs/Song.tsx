import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroovyTabV2 from "../general/GroovyTabV2";
import styles from "./Song.module.css";

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
  context?: string;
  tuning: string;
  tab?: GroovyTabTableType[];
  drum?: string;
  video?: string;
  insta?: string;
};

interface SongProps {
  jsonfile: string;
}

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

  // allows unmute but more errors in console
  //header:
  //<meta https-equiv="Content-Security-Policy" content="default-src *;" />
  // src={`https://www.tiktok.com/player/v1/${songJson.video}?loop=1`}
  //               className={styles.iframe}
  //               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay;"

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
                {songJson.theorylink && songJson.context ? (
                  <Link
                    to={`/?jamkey=${songJson.theorylink}&jamkeycontext=${songJson.context}`}
                    state={{ selkey: songJson.theorylink }}
                  >
                    {songJson.key}
                  </Link>
                ) : songJson.theorylink ? (
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
                src={`https://www.tiktok.com/embed/${songJson.video}?loop=1`}
                className={styles.iframe}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay;"
              ></iframe>
            </div>
          ) : null}

          {songJson.insta ? (
            <div className={styles.icont}>
              <iframe
                src={`https://www.instagram.com/p/${songJson.insta}/embed`}
                className={styles.iframe}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; autoplay;"
              ></iframe>
            </div>
          ) : null}
        </article>
      ) : null}
    </>
  );
}
export default Song;
