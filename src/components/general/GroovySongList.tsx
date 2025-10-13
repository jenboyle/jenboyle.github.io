import { Link } from "react-router-dom";
import styles from "./GroovySongList.module.css";
import commonStyles from "../general/GroovyStyles.module.css";

type song = {
  jsonfile: string;
  songtype: string;
  songname: string;
  key: string;
  link?: string;
};

interface GroovySongListProps {
  searchedSongs: song[];
  onSelectSong: React.Dispatch<React.SetStateAction<number>>;
}

function GroovySongList({
  searchedSongs,
  onSelectSong,
}: Readonly<GroovySongListProps>) {
  return (
    <ul className={styles.list}>
      {searchedSongs.map((song, index) => (
        <li className={styles.li} key={index}>
          <button
            className={`${styles.btnReset} ${commonStyles.hover}`}
            onClick={() => onSelectSong(index)}
            type="button"
          >
            {song.songname}
          </button>
          <div className={styles.div}>
            {song.link ? (
              <Link
                className={`${styles.a} ${commonStyles.hover}`}
                to={`/?jamkey=${song.link}`}
                state={{ selkey: song.link }}
              >
                {song.key}
              </Link>
            ) : (
              song.key
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GroovySongList;
