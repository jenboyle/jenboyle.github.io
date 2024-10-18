import shuffle from "../../../utils/GroovyShuffle";

export const biologyyear8qs = shuffle([
  {
    question: "What is the nucleus?",
    answer: "CONTAINS(CONTROL)",
    help: "The nucleus controls all activities in the cell",
  },
  {
    question: "What are the 5 senses?",
    answer:
      "CONTAINS(SIGHT)ANDCONTAINS(SMELL)ANDCONTAINSTHREE(HEAR)ANDCONTAINSFOUR(TASTE)ANDCONTAINSFIVE(TOUCH)",
    help: "The 5 senses are Sight, Smell, Hearing, Taste and Touch",
  },
  {
    question: "What is a tissue?",
    answer: "CONTAINS(SIMILAR)ANDCONTAINS(CELLS)ANDCONTAINSTHREE(JOB)",
    help: "A tissue is similar cells working together to do a job. eg nerve cells nerve tissue, eg xylem cells xylem tissue",
  },
  {
    question: "What is the job of a kidney?",
    answer: "CONTAINS(CLEAN)ANDCONTAINS(BLOOD)",
    help: "A kidneys job is to clean blood.",
  },
  {
    question: "What is the job of a heart?",
    answer: "CONTAINS(PUMP)ANDCONTAINS(BLOOD)ANDCONTAINSTHREE(BODY)",
    help: "A heart pumps blood around the body",
  },
  {
    question: "Name an Animal Organ",
    answer: "ONEOF(KIDNEY_HEART_LUNGS_EYE_STOMACH_LIVER)",
    help: "Examples of animal organs: Kidney, Heart, Lungs, Eye",
  },
  {
    question: "Name a Plant Organ",
    answer: "ONEOF(STEM_FLOWER_LEAF)",
    help: "Examples of plant organs: Stem, Flower, Leaf",
  },
  {
    question: "What does a nerve cell do?",
    answer: "ONEOF(MESSAGE_SIGNAL_IMPULSE)",
    help: "A nerve cell carries messages",
  },
  {
    question: "What does a red blood cell do?",
    answer: "CONTAINS(OXYGEN)",
    help: "A red blood cell carries oxygen from the lungs to the body.",
  },
  {
    question: "Why does a red blood cell have no nucleus?",
    answer: "CONTAINS(HAEMOGLOBIN)",
    help: "A red blood cell has no nucleus room for red haemoglobin to carry oxygen from lungs to the body.",
  },
  {
    question: "What does a xylem cell do",
    answer: "CONTAINS(WATER)",
    help: "A xylem (plant) cell carries water from roots to the rest of the plant. Wall strengthened lignin",
  },
  {
    question: "What does a sperm cell do?",
    answer: "CONTAINS(SWIM)ANDCONTAINS(EGG)",
    help: "A sperm cell swims to the egg",
  },
  {
    question: "What characteristics does a sperm cell have?",
    answer: "CONTAINS(TAIL)",
    help: "A sperm cell has a tail",
  },
  {
    question: "What characteristics does a red blood cell have?",
    answer: "CONTAINS(FLAT)ANDCONTAINS(DISC)",
    help: "A red blood cell is a flat disc",
  },
  {
    question: "What characteristics does a nerve cell have?",
    answer: "CONTAINS(WIRE)",
    help: "A nerve cell is wire like",
  },
  {
    question: "What characteristics does a xylem cell have?",
    answer: "CONTAINS(HOLLOW)ANDCONTAINS(SPIRAL)ANDCONTAINSTHREE(TUBE)",
    help: "A xylem cell is a hollow spiral tube",
  },
  {
    question: "Name this cell",
    answer: "CONTAINS(ANIMAL)",
    help: "This is an animal cell",
    img: "./images/games/school/biology/animalcell.png",
  },
  {
    question: "Here is a cell, name it",
    answer: "CONTAINS(PLANT)",
    help: "This is a plant cell",
    img: "./images/games/school/biology/plantcell.png",
  },
  {
    question: "Name these three areas of the cell from top to bottom",
    answer: "ORDER(CHLOROPLAST,VACUOLE,CELL WALL)",
    help: "The labels in order are Chloroplast, Vacuole and Cell Wall",
    img: "./images/games/school/biology/plantlabel.png",
    multi: "2_3",
  },
  {
    question: "Name these three common areas of the cells from top to bottom",
    answer: "ORDER(NUCLEUS,CYTOPLASM,CELL MEMBRANE)",
    help: "The labels in order are Nucleus, Cytoplasm and Cell Membrane",
    img: "./images/games/school/biology/animalandplant3common.png",
    multi: "2_3",
  },
  {
    question: "Name this special cell",
    answer: "CONTAINS(RED)ANDCONTAINS(BLOOD)",
    help: "This is a red blood cell",
    img: "./images/games/school/biology/redblood.png",
  },
  {
    question: "What is this special cell",
    answer: "CONTAINS(NERVE)",
    help: "This is a nerve cell",
    img: "./images/games/school/biology/nerve.png",
  },
  {
    question: "Here is a special cell, what is it?",
    answer: "CONTAINS(XYLEM)",
    help: "This is a xylem cell",
    img: "./images/games/school/biology/xylem.png",
  },
  {
    question: "This special cell has a tail, what is it?",
    answer: "CONTAINS(SPERM)",
    help: "This is a sperm cell",
    img: "./images/games/school/biology/sperm.png",
  },
  {
    question: "What are the 7 characteristics of life?",
    answer:
      "CONTAINS(MOVEMENT)ANDCONTAINS(RESPIRATION)ANDCONTAINSTHREE(SENSITIVITY)ANDCONTAINSFOUR(GROWTH)ANDCONTAINSFIVE(REPRODUCTION)ANDCONTAINSSIX(EXCRETION)ANDCONTAINSSEVEN(NUTRITION)",
    help: "The 7 characteristics of life can be remembered by MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition",
  },
  {
    question: "What is the cytoplasm?",
    answer: "CONTAINS(CHEMICAL)ANDCONTAINS(REACTIONS)",
    help: "The cytoplasm is where chemical reactions take place",
  },
  {
    question: "What is the cell membrane?",
    answer: "CONTAINS(VITAMINS)ANDCONTAINS(MINERALS)",
    help: "The cell membrane allows certain things like vitamins and minerals through",
  },
  {
    question: "What are cells?",
    answer: "CONTAINS(TINY)ANDCONTAINS(LIVING)ANDCONTAINSTHREE(UNIT)",
    help: "Cells are tiny units of living things",
  },
  {
    question: "What is the vacuole?",
    answer: "CONTAINS(STORES)ANDCONTAINS(FOOD)ANDCONTAINSTHREE(MINERALS)",
    help: "The vacuole stores dissolved food and minerals",
  },
  {
    question: "What is the job of the cell wall?",
    answer: "CONTAINS(PROTECTS)ANDCONTAINS(SHAPE)",
    help: "The cell wall protects the cell and keeps cell in shape",
  },
  {
    question: "What does chloroplast do?",
    answer: "CONTAINS(CHLOROPHYLL)ANDCONTAINS(PHOTOSYNTHESIS)",
    help: "Chloroplast produces chlorophyll for photosynthesis",
  },
  {
    question: "What does a plant stem do?",
    answer: "CONTAINS(HOLDS)ANDCONTAINS(LEAVES)",
    help: "The stem holds up leaves",
  },
  {
    question: "What does a plant flower do?",
    answer: "CONTAINS(REPRODUCTION)",
    help: "The flowers job is reproduction",
  },
  {
    question: "What do plant roots do?",
    answer: "CONTAINS(WATER)",
    help: "The roots take in water",
  },
  {
    question: "What does a plant leaf do?",
    answer: "CONTAINS(FOOD)",
    help: "The leaf makes food for the plant",
  },
  {
    question: "What brain part is coloured in green and what is it's purpose?",
    answer: "CONTAINS(BRAIN)ANDCONTAINS(STEM)",
    help: "This is the brain stem: In charge of all functions to stay alive eg breathing, circulating blood",
    img: "./images/games/school/biology/brain.jpg",
  },
  {
    question:
      "What brain part is coloured in yellow? and what is it's purpose?",
    answer: "ONEOF(CEREBRUM_CEREBRAL CORTEX)",
    help: "This is the cerebrum OR cerebral cortex, thinking part of brain, controls voluntary muscles",
    img: "./images/games/school/biology/brain.jpg",
  },
  {
    question: "What brain part is coloured in blue and what is it's purpose?",
    answer: "CONTAINS(PITUITARY)ANDCONTAINS(HORMONES)",
    help: "This is the pituitary gland it controls hormones",
    img: "./images/games/school/biology/brain.jpg",
  },
  {
    question: "What brain part is coloured in orange and what is it's purpose?",
    answer: "CONTAINS(THALAMUS)ANDCONTAINS(TEMPERATURE)",
    help: "This is the thalamus or hypothalamus: it controls the temperature of your body",
    img: "./images/games/school/biology/brain.jpg",
  },
  {
    question: "What brain part is coloured in red  and what is it's purpose?",
    answer: "CONTAINS(CEREBELLUM)ANDCONTAINS(BALANCE)",
    help: "This is the cerebellum: controls balance, movement, coordination, muscles",
    img: "./images/games/school/biology/brain.jpg",
  },
  {
    question: "What is the other name for the skull?",
    answer: "CONTAINS(CRANIUM)",
    help: "The cranium",
  },
  {
    question: "What is the longest bone in the body?",
    answer: "CONTAINS(FEMUR)",
    help: "The femur",
  },
  {
    question: "What are the finger bones called?",
    answer: "CONTAINS(CARPAL)",
    help: "The metacarpals",
  },
  {
    question: "How many bones are in the human body?",
    answer: "CONTAINS(206)",
    help: "206",
  },
]);
