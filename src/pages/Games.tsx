import GroovyHeader from "../components/general/GroovyHeader";
import { allgames } from "../components/games/allgames";
import { allschoolgames } from "../components/games/allschoolgames";
import { useState } from "react";
import Relatives from "../components/games/Relatives";
import styles from "./Games.module.css";
import Circleoffifths from "../components/games/Circleoffifths";
import Notationeasy from "../components/games/Notationeasy";
import { spanishyear8qs } from "../components/games/questions/SpanishYear8";
import { interviewgeneralqs } from "../components/games/questions/InterviewGeneral";
import StandardGame from "../components/games/StandardGame";
import { interviewtechnicalqs } from "../components/games/questions/InterviewTechnical";
import { religionyear8qs } from "../components/games/questions/ReligionYear8";
import { biologyyear8qs } from "../components/games/questions/BiologyYear8";
import { historyyear8qs } from "../components/games/questions/HistoryYear8";
import { techyear8qs } from "../components/games/questions/TechnologyYear8";
import { geographyyear8qs } from "../components/games/questions/GeographyYear8";
import { chemistryyear8qs } from "../components/games/questions/ChemistryYear8";

function Games() {
  const [selectedGameTopic, setSelectedGameTopic] = useState("");
  const [selectedSchoolTopic, setSelectedSchoolTopic] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");

  function handleGameTopicSelection(e: React.MouseEvent<HTMLButtonElement>) {
    if ((e.target as HTMLButtonElement).id === "school") {
      setSelectedSchoolTopic(true);
    }
    setSelectedGameTopic((e.target as HTMLButtonElement).id);

    console.log((e.target as HTMLButtonElement).id);
  }

  function handleGameSelection(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedGame((e.target as HTMLButtonElement).id);
    console.log((e.target as HTMLButtonElement).id);
  }
  return (
    <>
      <GroovyHeader>Games</GroovyHeader>
      {selectedGame ? (
        selectedGame === "relatives" ? (
          <Relatives />
        ) : selectedGame === "circleoffifths" ? (
          <Circleoffifths />
        ) : selectedGame === "easy" ? (
          <Notationeasy />
        ) : selectedGame === "biology_year8" ? (
          <StandardGame questions={biologyyear8qs}></StandardGame>
        ) : selectedGame === "chemistry_year8" ? (
          <StandardGame questions={chemistryyear8qs}></StandardGame>
        ) : selectedGame === "geography_year8" ? (
          <StandardGame questions={geographyyear8qs}></StandardGame>
        ) : selectedGame === "history_year8" ? (
          <StandardGame questions={historyyear8qs}></StandardGame>
        ) : selectedGame === "religion_year8" ? (
          <StandardGame questions={religionyear8qs}></StandardGame>
        ) : selectedGame === "spanish_year8" ? (
          <StandardGame questions={spanishyear8qs}></StandardGame>
        ) : selectedGame === "technology_year8" ? (
          <StandardGame questions={techyear8qs}></StandardGame>
        ) : selectedGame === "interviewgeneral" ? (
          <StandardGame questions={interviewgeneralqs}></StandardGame>
        ) : selectedGame === "interviewtechnical" ? (
          <StandardGame questions={interviewtechnicalqs}></StandardGame>
        ) : (
          <div>{selectedGame}</div>
        )
      ) : selectedGameTopic ? (
        selectedGameTopic === "school" ? (
          allschoolgames.map((game) => (
            <button
              id={game.id}
              key={game.id}
              onClick={handleGameTopicSelection}
              className={styles.buttonpad}
            >
              {game.gametopic}
            </button>
          ))
        ) : selectedSchoolTopic ? (
          allschoolgames.map((parentgame) =>
            parentgame.id === selectedGameTopic
              ? parentgame.games.map((game) => (
                  <button
                    id={game.gameid}
                    key={game.gameid}
                    onClick={handleGameSelection}
                    className={styles.buttonpad}
                  >
                    {game.gametext}
                  </button>
                ))
              : null
          )
        ) : (
          allgames.map((parentgame) =>
            parentgame.id === selectedGameTopic
              ? parentgame.games.map((game) => (
                  <button
                    id={game.gameid}
                    key={game.gameid}
                    onClick={handleGameSelection}
                    className={styles.buttonpad}
                  >
                    {game.gametext}
                  </button>
                ))
              : null
          )
        )
      ) : (
        allgames.map((game) => (
          <button
            id={game.id}
            key={game.id}
            onClick={handleGameTopicSelection}
            className={styles.buttonpad}
          >
            {game.gametopic}
          </button>
        ))
      )}
    </>
  );
}
export default Games;