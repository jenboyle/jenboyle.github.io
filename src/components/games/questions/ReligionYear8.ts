import shuffle from "../../../utils/GroovyShuffle";
import { QuestionType } from "./../StandardGame";

export const religionyear8qs: QuestionType[] = shuffle([
  {
    question: "What is another name for the old testament?",
    answer: "CONTAINS(JEWISH SCRIPTURES)",
    help: "JEWISH Scriptures",
  },
  {
    question: "The Bible is in two parts, what is the name for the first part?",
    answer: "CONTAINS(OLD TESTAMENT)",
    help: "Old Testament",
  },
  {
    question: "Name the four sections of the first part of the Bible?",
    answer:
      "CONTAINS(PENTATEUCH)ANDCONTAINS(HISTORICAL BOOKS)ANDCONTAINSTHREE(WISDOM WRITINGS)ANDCONTAINSFOUR(PROPHETS)",
    help: "Pentateuch, Historical books, wisdom writings, prophets",
  },
  {
    question: "What language was the old testament written in?",
    answer: "CONTAINS(HEBREW)",
    help: "Hebrew",
  },
  {
    question: "How many books are there in the old testament?",
    answer: "ONEOF(45_46)",
    help: "45/46",
  },
  {
    question: "What is the name of the first book in the Bible?",
    answer: "CONTAINS(GENESIS)",
    help: "Genesis",
  },
  {
    question:
      "What is the name of the first 5 books of the Bible(Hebrew the Torah)?",
    answer: "CONTAINS(PENTATEUCH)",
    help: "Pentateuch",
  },
  {
    question: "Name any prophet in the old testament",
    answer:
      "ONEOF(JOSHUA_JUDGES_SAMUEL_EZRA_TOBIT_ISAIAH_DANIEL_JONAH_RUTH_JUDITH_ESTHER_JEREMIAH_AMOS)",
    help: "eg Joshua, Judges, Samuel, Ezra, Tobit, Isaiah, Daniel, Jonah, Ruth, Judith, Esther, Jeremiah, Amos",
  },
  {
    question: "Name a book in the old testament called after a woman",
    answer: "ONEOF(RUTH_JUDITH_ESTHER)",
    help: "eg Ruth, Judith, Esther",
  },
  {
    question:
      "Name one book other than Genesis that is in the first 5 books of the bible?",
    answer: "ONEOF(EXODUS_LEVITICUS_NUMBERS_DEUTERONOMY)",
    help: "The first 5 books of the bible are Genesis, Exodus, Leviticus, Numbers, Deuteronomy",
  },
  {
    question: "What is another name for the new testament?",
    answer: "CONTAINS(CHRISTIAN SCRIPTURES)",
    help: "Christian Scriptures",
  },
  {
    question: "What language was the new testament written in?",
    answer: "CONTAINS(GREEK)",
    help: "Greek",
  },
  {
    question:
      "The second part of the Bible is known as the New Testament containing 4 types of book, name them",
    answer:
      "CONTAINS(GOSPEL)ANDCONTAINS(ACTS OF THE APOSTLES)ANDCONTAINSTHREE(LETTERS)ANDCONTAINSFOUR(REVELATION)",
    help: "Four Gospels, Acts of the Apostles, Letters, book of the Revelation",
  },
  {
    question: "What is the meaning of the word Gospel?",
    answer: "CONTAINS(GREEK)ANDCONTAINS(GOOD NEWS)",
    help: "Gospel comes from 'Greek' word euangelion meaning 'good news'. (good news of Jesus' life, death and resurrection and about those who followed him)",
  },
  {
    question: "How many books are there in the new testament?",
    answer: "CONTAINS(27)",
    help: "27",
  },
  {
    question:
      "Which New Testament book tells us about the first people to belong to the church?",
    answer: "CONTAINS(ACTS OF THE APOSTLES)",
    help: "Acts of the Apostles",
  },
  {
    question:
      "Name 4 writers other than Paul whose letters are found in the New Testament?",
    answer:
      "CONTAINS(MATTHEW)ANDCONTAINS(MARK)ANDCONTAINSTHREE(LUKE)ANDCONTAINSFOUR(JOHN)",
    help: "Matthew, Mark, Luke, John",
  },
  {
    question: "What is the title of the last book in the Bible?",
    answer: "CONTAINS(REVELATION)",
    help: "book of Revelation",
  },
  {
    question:
      "The last book in the Bible, the book of Revelation is also known as?",
    answer: "CONTAINS(APOCALYPSE)",
    help: "Apocalypse",
  },
  {
    question: "What are the names of the 4 Evangelists?",
    answer:
      "CONTAINS(MATTHEW)ANDCONTAINS(MARK)ANDCONTAINSTHREE(LUKE)ANDCONTAINSFOUR(JOHN)",
    help: "Matthew, Mark, Luke, John wrote the 4 gospels telling the good news. (An evangelist is someone who tells the good new news of Jesus)",
  },
]);
