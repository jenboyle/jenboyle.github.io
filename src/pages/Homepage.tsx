import { useState } from "react";
import { songs } from "../components/songs/songs";
import styles from "./Homepage.module.css";
import Song from "../components/songs/Song";
import SongSearch from "../components/songs/SongSearch";
import GroovyHeader from "../components/general/GroovyHeader";
function Homepage() {
  const [selectedSong, setSelectedSong] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");

  // const searchedSongs =
  // searchQuery.length > 0
  //   ? songs.filter((song) =>
  //       `${song.songs[0].songname}`
  //         .toLowerCase()
  //         .includes(searchQuery.toLowerCase())
  //     )
  //   : songs;

  let searchedSongs =
    searchQuery.length > 0
      ? songs.filter((song) =>
          `${song.songname} ${song.key}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : songs;

  if (searchedSongs.length == 0) {
    searchedSongs = songs;
  }

  //function showSong(song: string) {
  // function showSong() {
  //   //console.log(song);
  //   console.log("showing song" + songs[0].songs[0].jsonfile);
  //   //setSelectedSong({song.jsonfile})
  //   //setSelectedSong({song});
  //   setSelectedSong("tyemp");
  // }

  //onClick={showSong({song.jsonfile})}>
  //{songs[selectedSong].songs[selectedSong].jsonfile}{" "}

  //<div>song was selected {songs[0].songs[selectedSong].jsonfile}</div>

  // function handleSearchKeyPress({ text }) {
  //   setSelectedSong(-1);
  // }

  function handleSearchClick() {
    setSelectedSong(-1);
  }

  return (
    <>
      <GroovyHeader>My Transcriptions</GroovyHeader>
      <SongSearch onClick={handleSearchClick} onChange={setSearchQuery} />
      {selectedSong != -1 ? (
        <Song jsonfile={searchedSongs[selectedSong].jsonfile}></Song>
      ) : (
        <ul className={styles.list}>
          {searchedSongs.map((song, index) => (
            <li className={styles.li} key={index}>
              <a className={styles.a} onClick={() => setSelectedSong(index)}>
                {song.songname}
              </a>
              <div className={styles.div}>{song.key}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Homepage;
