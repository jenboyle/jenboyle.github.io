import shuffle from "../../../utils/GroovyShuffle";

export const historyyear8qs = shuffle([
  {
    question: "What is a Greek word to enquire about something?",
    answer: "CONTAINS(HISTOREO)",
    help: "Historeo",
  },
  {
    question: "What is organisation of time in order early to late?",
    answer: "CONTAINS(CHRONOLOGY)",
    help: "Chronology",
  },
  {
    question: "What is a reason why something happens?",
    answer: "CONTAINS(CAUSE)",
    help: "Cause",
  },
  {
    question: "What is staying the same over time?",
    answer: "CONTAINS(CONTINUITY)",
    help: "Continuity",
  },
  {
    question: "What is a primary source?",
    answer: "CONTAINS(TIME OF THE EVENT)",
    help: "A Primary Source is a source that comes from the time of the event you are studying eg today's newspaper",
  },
  {
    question: "What is a secondary source?",
    answer: "CONTAINS(AFTER)",
    help: "A Secondary Source is a source made after the time of the event you are studying eg Roman coins",
  },
  { question: "What century is 87?", answer: "IS(1ST)", help: "1st" },
  { question: "What century is 1215?", answer: "IS(13TH)", help: "13th" },
  { question: "What century is 333BC?", answer: "IS(4TH)", help: "4th" },
  {
    question: "What type of evidence is a diary?",
    answer: "IS(WRITTEN)",
    help: "Written",
    img: "./images/games/school/history/diary.png",
  },
  {
    question: "What type of evidence is the Mona Lisa painting?",
    answer: "IS(VISUAL)",
    help: "Visual",
    img: "./images/games/school/history/mona.png",
  },
  {
    question: "What type of evidence is the Eiffel Tower?",
    answer: "IS(PHYSICAL)",
    help: "Physical",
    img: "./images/games/school/history/tower.png",
  },
  {
    question: "How can a biased source be useful to an Historian?",
    answer: "CONTAINS(POINT OF VIEW)",
    help: "Biased source gives another person's point of view and perspective",
  },
  {
    question: "In which year was the Great Fire of London?",
    answer: "IS(1666)",
    help: "1666",
  },
  {
    question: "What is an anachronism?",
    answer: "ONEOF(OUT OF PLACE_WRONG PLACE_WRONG TIME PERIOD)",
    help: "An anachronism is something that is out of place (wrong place or wrong time period)",
  },
  {
    question: "Who was Henry VIII's first wife in 1509?",
    answer: "CONTAINS(CATHERINE OF ARAGON)",
    help: "Catherine of Aragon",
  },
  {
    question: "Why did Henry marry Catherine of Aragon?",
    answer: "ONEOF(ARRANGED_VII _ARTHUR)",
    help: "Arthur died and to avoid sending Catherine home to Spain upsetting her father, Henry VII arranged for his second son Henry to marry her",
  },
  {
    question: "Who was Henry VIII's first wife?",
    answer: "CONTAINS(CATHERINE OF ARAGON)",
    help: "Catherine of Aragon",
  },
  {
    question: "What happened in 1501?",
    answer: "CONTAINS(MET)",
    help: "Henry VIII first met Catherine of Aragon when she came to England to marry his big brother Arthur",
  },
  {
    question: "What happened in 1533?",
    answer: "CONTAINS(DIVORCE)",
    help: "In early 1533 Henry gave himself a divorce. He also married pregnant Anne Boleyn. A baby girl was born.",
  },
  {
    question: "What two things happened in 1509?",
    answer: "CONTAINS(CATHERINE)ANDCONTAINSOR(FATHER_VII )",
    help: "In 1509 Henry VIII married Catherine of Aragon, the same year his father died.",
  },
  {
    question: "What are Henry's changes to the Church known as ___________?",
    answer: "CONTAINS(REFORMATION)",
    help: "English 'Reformation' (Reforming changing the English Church)",
  },
  {
    question:
      "When Henry closed down the monasteries, it was known as the ___________ of the monasteries?",
    answer: "CONTAINS(DISSOLUTION)",
    help: "'Dissolution' of the monasteries. Dissolution is another word for breaking up",
  },
  {
    question: "What happened in 1527?",
    answer: "CONTAINS(OLD)ANDCONTAINS(ANNE)",
    help: "Henry thought Catherine was too old to have any more children. He had met and fell in love with Anne Boleyn and wanted to divorce Catherine",
  },
  {
    question: "What happened in 1513?",
    answer: "CONTAINS(FRANCE)",
    help: "Henry was in France, Catherine ran the country for him. Her army beat a Scottish army Battle of Flodden. She gave Henry the dead King of Scotland's blood coat",
  },
]);
