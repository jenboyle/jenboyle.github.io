import { Link } from "react-router-dom";
import GroovyArticle from "../components/general/GroovyArticle";
import { useState } from "react";
import { songs } from "../components/songs/improvisationsongs";
import SongSearch from "../components/songs/SongSearch";
import Song from "../components/songs/Song";
import styles from "./Improvisation.module.css";
import GroovySongList from "../components/general/GroovySongList";

function Improvisation() {
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

  function handleSearchClick() {
    setSelectedSong(-1);
  }

  return (
    <>
      <GroovyArticle>
        Improvising on bass is hard. I find there are a lot of factors to think
        of, e.g drum 🥁, guitar chords 🎸, chord progressions <em>I VI V IV</em>
        , rhythm 🎶, groove, key 🔑, the list goes on...
      </GroovyArticle>
      <GroovyArticle>
        Improvising by yourself or with a band are also two different scenarios.
        I do find myself for my own projects using my{" "}
        <Link to="/jam_time">jam</Link> page. I usually select a key, then a
        progression, and go to that theory page in my <Link to="/">theory</Link>
        . I then select a drum beat that suits what I have in mind on BeatBuddy
        or use my sdrum pedal and play a riff into it.
      </GroovyArticle>
      <GroovyArticle>
        I use <Link to="/percussion">percussion</Link> and sometimes keys or
        guitar. I have recently been learning some violin. Then I record it into
        Cubase and I try to use some of the <Link to="/cubase">cubase</Link>{" "}
        mixing and mastering tips I have learned.
      </GroovyArticle>
      <GroovyArticle customStyles={styles.spacebelow}>
        It can be daunting but my advice is to try and you might surprise
        yourself. Some of my noodles I recorded I am most happy with and I
        probably cannot replicate them! The last year I have started thinking of
        playing more conversational 🗣️ and also reading about harmony and
        dissonance.
      </GroovyArticle>
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
export default Improvisation;
