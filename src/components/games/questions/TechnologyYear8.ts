import shuffle from "../../../utils/GroovyShuffle";

export const techyear8qs = shuffle([
  {
    question: "What colour and shape is a mandatory sign?",
    answer: "CONTAINS(BLUE)ANDCONTAINS(CIRCLE)",
    help: "A mandatory sign is represented in white on a solid blue circle.",
  },
  {
    question: "What is a mandatory sign?",
    answer: "CONTAINS(ACTION)",
    help: "A mandatory sign identifies a particular course of action that must be taken.",
  },
  {
    question: "What does this mandatory sign mean?",
    answer: "CONTAINS(HEAD)",
    help: "Head protection must be worn",
    img: "./images/games/school/technology/head.png",
  },
  {
    question: "What does this must do sign mean?",
    answer: "CONTAINS(HEAD)ANDCONTAINS(EYE)",
    help: "Head and eye protection must be worn",
    img: "./images/games/school/technology/headandeye.png",
  },
  {
    question: "What does this prohibition sign mean?",
    answer: "CONTAINS(NO)ANDCONTAINS(SMOKING)",
    help: "No smoking",
    img: "./images/games/school/technology/nosmoking.png",
  },
  {
    question: "What colour and shape is a prohibition sign?",
    answer: "CONTAINS(RED)ANDCONTAINS(CIRCLE)",
    help: "A prohibited activity is represented in black on white with a red circle and diagonal stripe superimposed.",
  },
  {
    question: "What is a prohibition sign?",
    answer: "CONTAINS(FORBIDDEN)",
    help: "A prohibition sign indicates behaviour that is forbidden.",
  },
  {
    question: "What does this safe condition sign mean?",
    answer: "CONTAINS(FIRST)ANDCONTAINS(AID)",
    help: "First Aid",
    img: "./images/games/school/technology/firstaid.png",
  },
  {
    question: "What is a safe condition sign?",
    answer: "CONTAINS(SAFETY)",
    help: "A safe condition sign indicates the presence of a safety facility",
  },
  {
    question: "What colour and shape is a safe condition sign?",
    answer: "CONTAINS(GREEN)ANDCONTAINS(SQUARE)",
    help: "A safe condition sign is represented in white on a solid green square",
  },
  {
    question: "What is a hazard sign?",
    answer: "CONTAINS(HARM)",
    help: "A hazard sign indicates a specific source of potential harm",
  },
  {
    question: "What colour and shape is a hazard sign?",
    answer: "CONTAINS(YELLOW)ANDCONTAINS(TRIANGLE)",
    help: "Hazard signs are printed in black on a yellow background and are triangle shape",
  },
  {
    question: "What does this hazard sign mean?",
    answer: "CONTAINS(HIGH)ANDCONTAINS(VOLTAGE)",
    help: "Danger high voltage",
    img: "./images/games/school/technology/highvoltage.png",
  },
  {
    question: "What does this safety sign mean?",
    answer: "CONTAINS(EMERGENCY)ANDCONTAINS(STOP)ANDCONTAINSTHREE(BUTTON)",
    help: "Emergency stop button",
    img: "./images/games/school/technology/emergencystopbutton.png",
  },
  {
    question: "What does this forbidden behaviour mean?",
    answer: "CONTAINS(NO)ANDCONTAINS(RUNNING)",
    help: "No running",
    img: "./images/games/school/technology/norunning.png",
  },
  {
    question: "What does this prohibited behaviour?",
    answer: "CONTAINS(NO)ANDCONTAINS(EATING)",
    help: "No eating",
    img: "./images/games/school/technology/noeating.png",
  },
  {
    question: "What does this source of potential harm sign mean?",
    answer: "CONTAINS(RISK)ANDCONTAINS(EXPLOSION)",
    help: "Risk of explosion",
    img: "./images/games/school/technology/riskofexplosion.png",
  },
  {
    question: "What safety facility is present?",
    answer: "CONTAINS(EMERGENCY)ANDCONTAINS(EYE)ANDCONTAINSTHREE(WASH)",
    help: "Emergency eye wash",
    img: "./images/games/school/technology/emergencyeyewash.png",
  },
  {
    question: "What course of action must be taken?",
    answer: "CONTAINS(WEAR)ANDCONTAINS(PROTECTIVE)ANDCONTAINSTHREE(GLOVES)",
    help: "Wear protective gloves",
    img: "./images/games/school/technology/wearprotectivegloves.png",
  },
  {
    question: "What is mandatory?",
    answer: "CONTAINS(WEAR)ANDCONTAINS(GOGGLES)",
    help: "Wear protective goggles",
    img: "./images/games/school/technology/weargoggles.png",
  },
  {
    question: "What is the harm?",
    answer: "CONTAINS(TOXIC)",
    help: "This hazard sign means toxic",
    img: "./images/games/school/technology/toxic.png",
  },
  {
    question: "What is the hazard?",
    answer: "CONTAINS(CORROSIVE)",
    help: "This hazard sign means corrosive",
    img: "./images/games/school/technology/corrosive.png",
  },
  {
    question: "What is this sign?",
    answer: "ONEOF(HAZARD WARNING_CAUTION)",
    help: "This is a hazard warning sign",
    img: "./images/games/school/technology/hazard.png",
  },
  {
    question: "What is a Ferrous metal?",
    answer: "CONTAINS(IRON)",
    help: "A Ferrous metal contains iron as it's largest alloying element",
  },
  {
    question: "What is a Non-Ferrous metal?",
    answer: "CONTAINS(IRON)ANDCONTAINS(NOT)",
    help: "A Non-Ferrous metal does not contains iron",
  },
  {
    question: "What is an alloy metal?",
    answer: "CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)",
    help: "An Alloy metal is combined with other substances (alloying agents). An Alloy metal is strong, hard, durable and tough.",
  },
  {
    question: "Why does an alloy metal have superior properties?",
    answer: "CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)",
    help: "An Alloy metal has superior properties because it is combined with other substances (alloying agents).",
  },
  {
    question: "What is a linear motion?",
    answer: "CONTAINS(STRAIGHT)ANDCONTAINS(LINE)",
    help: "A linear motion is motion in a straight line in any direction.",
  },
  {
    question: "What are 4 types of motion?",
    answer:
      "CONTAINS(LINEAR)ANDCONTAINS(ROTARY)ANDCONTAINSTHREE(OSCILLATING)ANDCONTAINSFOUR(RECIPROCATING)",
    help: "Four types of motion are Linear, Reciprocating, Rotary, Oscillating.",
  },
  {
    question: "What is a rotary motion?",
    answer: "CONTAINS(ROUND)",
    help: "A rotary motion is motion round and round in either direction.",
  },
  {
    question: "What is a reciprocating motion?",
    answer:
      "CONTAINS(BACKWARDS)ANDCONTAINS(FORWARDS)ANDCONTAINSTHREE(STRAIGHT)ANDCONTAINSFOUR(LINE)",
    help: "A reciprocating motion is motion backwards and forwards in a straight line.",
  },
  {
    question: "What is a oscillating motion?",
    answer:
      "CONTAINS(SWING)ANDCONTAINS(BACK)ANDCONTAINSTHREE(FOR)ANDCONTAINSFOUR(ARC)",
    help: "An oscillating motion is motion swing back and forth in an arc.",
  },
  {
    question: "How is rotary speed measured?",
    answer: "CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)",
    help: "Rotary speed is measured in revolutions per minute rpm.",
  },
  {
    question: "How is rotary speed measured?",
    answer: "CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)",
    help: "Rotary speed is measured in revolutions per minute rpm.",
  },
]);
