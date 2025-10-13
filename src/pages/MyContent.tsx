import { useState } from "react";
import { songs } from "../components/songs/mysongs";
import Song from "../components/songs/Song";
import SongSearch from "../components/songs/SongSearch";
import GroovySongList from "../components/general/GroovySongList";

function MyContent() {
  const [selectedSong, setSelectedSong] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");

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
      <SongSearch onClick={handleSearchClick} onChange={setSearchQuery} />
      {selectedSong != -1 ? (
        <Song jsonfile={searchedSongs[selectedSong].jsonfile}></Song>
      ) : (
        <GroovySongList
          searchedSongs={searchedSongs}
          onSelectSong={setSelectedSong}
        />
      )}
    </>
  );
}
export default MyContent;
