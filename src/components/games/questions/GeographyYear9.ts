import shuffle from "../../../utils/GroovyShuffle";

export const geographyyear9qs = shuffle([
  {
    question: "What is the outermost layer of Earth?",
    answer: "CONTAINS(CRUST)",
    help: "The crust is the outer layer of Earth",
  },
  {
    question: "What is the Earth's crust made of?",
    answer: "CONTAINS(ROCK)",
    help: "Earth's crust is made of solid rock",
  },
  {
    question: "What is the centre of Earth layer called?",
    answer: "CONTAINS(CORE)ANDCONTAINS(INNER)",
    help: "The center layer of Earth is called the inner core",
  },
  {
    question: "What layer of Earth has plates?",
    answer: "CONTAINS(CRUST)",
    help: "The crust layer is divided up into large sections called plates",
  },
  {
    question: "What layer of Earth do we live on?",
    answer: "CONTAINS(CRUST)",
    help: "We live on the crust layer of the Earth",
  },
  {
    question:
      "What is the biggest layer of Earth which accounts for 84% of the Earth's volume?",
    answer: "CONTAINS(CORE)ANDCONTAINS(MANTLE)",
    help: "Mantle Core",
  },
  {
    question: "This layer of Earth is made of liquid nickel and iron?",
    answer: "CONTAINS(CORE)ANDCONTAINS(OUTER)",
    help: "Outer Core",
  },
  {
    question: "This layer of Earth controls magnetic field?",
    answer: "CONTAINS(CORE)ANDCONTAINS(OUTER)",
    help: "Outer Core",
  },
  {
    question: "This layer of Earth is made of solid nickel and iron?",
    answer: "CONTAINS(CORE)ANDCONTAINS(INNER)",
    help: "Inner Core, heat is produced by radioactivity",
  },
  {
    question: "Convection currents operate in what layer of Earth?",
    answer: "CONTAINS(CORE)ANDCONTAINS(MANTLE)",
    help: "Mantle Core",
  },
  {
    question: "What is the hottest layer of the Earth?",
    answer: "CONTAINS(CORE)ANDCONTAINS(INNER)",
    help: "Inner Core, temperatures are up to 6000°C",
  },

  {
    question: "What is A?",
    answer: "CONTAINS(CORE)ANDCONTAINS(INNER)",
    help: "Inner Core",
    img: "./images/games/school/geography/earthlayers.png",
  },

  {
    question: "What is layer A?",
    answer: "CONTAINS(CORE)ANDCONTAINS(INNER)",
    help: "Inner Core, make up a mnemonic such as I Owe ❌You❌ Money Chris",
    img: "./images/games/school/geography/earthlayers.png",
  },

  {
    question: "What is layer B?",
    answer: "CONTAINS(CORE)ANDCONTAINS(OUTER)",
    help: "Outer Core, make up a mnemonic such as I Owe ❌You❌ Money Chris",
    img: "./images/games/school/geography/earthlayers.png",
  },

  {
    question: "What is layer C?",
    answer: "CONTAINS(CORE)ANDCONTAINS(MANTLE)",
    help: "Mantle Core, make up a mnemonic such as I Owe ❌You❌ Money Chris",
    img: "./images/games/school/geography/earthlayers.png",
  },

  {
    question: "What is layer D?",
    answer: "CONTAINS(CRUST)",
    help: "CRUST, make up a mnemonic such as I Owe ❌You❌ Money Chris",
    img: "./images/games/school/geography/earthlayers.png",
  },

  {
    question: "How many major plates across the world?",
    answer: "ONEOF(8_EIGHT)",
    help: "8",
  },
  {
    question: "What plate do we live on?",
    answer: "CONTAINS(EURASIAN PLATE)",
    help: "Eurasian plate",
  },
  {
    question: "What is a tectonic plate?",
    answer: "CONTAINS(CRUST)",
    help: "A large slab of the Earth's crust which floats on the mantle",
  },
  {
    question: "Why do plates move?",
    answer: "CONTAINS(CONVECTION)ANDCONTAINS(CURRENTS)",
    help: "Heat from Earth's interior causes CONVECTION CURRENTS in the mantle. These currents create forces that push and pull the plates",
  },
  {
    question: "Where are earthquakes and volcanoes mostly found?",
    answer: "CONTAINS(PLATE)ANDCONTAINS(BOUNDARIES)",
    help: "Along plate boundaries where 2 or more plates move towards, awy from or slide past each other. These movements are caused by convection currents and cause earthquakes and volcanic activity",
  },
  {
    question: "What is a destructive plate boundary?",
    answer: "CONTAINS(OCEANIC)ANDCONTAINS(TOWARD)ANDCONTAINSTHREE(CONTINENTAL)",
    help: "Destructive: Convection currents cause OCEANIC plate to move TOWARDS CONTINENTAL plate. Oceanic plate more dense so subducted beneath continental. Deep ocean trench = point ocean plate subducted. Oceanic plate grinds, friction, pressure, jolt free = earthquake. Oceanic plate melted due to heat and friction, magma - less dense - rises through continetal plate eruption. Volcanoes and earthquakes",
    img: "./images/games/school/geography/destructive.png",
  },
  {
    question: "What is a constructive plate boundary?",
    answer: "CONTAINS(APART)ANDCONTAINS(MAGMA)",
    help: "Constructive: Convection currents cause 2 plates to move APART. Magma rises, lava. Regular weak earthquakes. Underwater mountain range = mid ocean ridge",
    img: "./images/games/school/geography/constructive.png",
  },
  {
    question: "What is a collision plate boundary?",
    answer: "CONTAINS(CONTINENTAL)ANDCONTAINS(TOWARDS)",
    help: "Collision: Convection currents cause 2 CONTINENTAL plates to move TOWARDS. Rocks buckle upwards forming FOLD MOUNTAINS. Strong earthquakes no volcanoes.",
    img: "./images/games/school/geography/collision.png",
  },
  {
    question: "What is a conservative plate boundary?",
    answer: "CONTAINS(SLIDE)",
    help: "Any 2 plates SLIDE past each other. Plates stick by FRICTION. PRESSURE builds = strong earthquake no volcanoes, Line of weakness = fault line",
    img: "./images/games/school/geography/conservative.png",
  },

  {
    question: "Positive impact of volcanoes?",
    answer: "ONEOF(TOURISM_ENERGY_FARM)",
    help: "Tourism - money for country, geothermal energy production - renewable, Farming - volcanic ash good for soil",
  },
  {
    question: "Negative impact of volcanoes?",
    answer: "ONEOF(LIFE_LIVE_PROPERT)",
    help: "Loss of life and property",
  },
  {
    question:
      "An active volcano has had 1 eruption in last 10000 years. More than 700 in world. Most active mt ____ Italy",
    answer: "CONTAINS(ETNA)",
    help: "Etna",
  },
  {
    question:
      "A dormant volcano has erupted in last 10000 years but not recently. It is dangerous. It is also known as ________.  Can't predict if it will erupt eg Mt Kea in Hawaii",
    answer: "CONTAINS(SLEEPING)",
    help: "Sleeping",
  },
  {
    question: "An extinct dead volcano is unlikely to _____ again?",
    answer: "CONTAINS(ERUPT)",
    help: "Erupt: It has not erupted in the last 10000 years eg Mt Kilimanjaro",
  },

  {
    question: "What affects birth and death rates?",
    answer: "ONEOF(FOOD SHORT_HARVEST_WATER_HOSPITAL_HEALTH_WAR_BIRTH CONTROL)",
    help: "Food shortages, good harvest, improved water supply, new hospitals, poor health care, war, birth control available",
  },
  {
    question: "What is rock?",
    answer: "ONEOF(NATURAL_SOLID_CRUST)",
    help: "Naturally occuring solid material forming part of Earth's crust",
  },
  {
    question: "3 types of rock?",
    answer:
      "CONTAINS(IGNEOUS)ANDCONTAINS(SEDIMENTARY)ANDCONTAINSTHREE(METAMORPHIC)",
    help: "Igneous, Sedimentary, metamorphic",
  },
  {
    question: "2 main examples of igneous rock?",
    answer: "CONTAINS(BASALT)ANDCONTAINS(GRANITE)",
    help: "Basalt and granite",
  },
  {
    question: "2 main examples of sedimentary rock?",
    answer: "CONTAINS(LIMESTONE)ANDCONTAINS(SANDSTONE)",
    help: "Limestone and sandstone",
  },
  {
    question: "2 main examples of metamorphic rock?",
    answer: "CONTAINS(MARBLE)ANDCONTAINS(SLATE)",
    help: "Marble and slate",
  },
  {
    question: "How do humans use rock?",
    answer: "ONEOF(WORKTOP_KITCHEN_ROOF_TILE_CHALK_TOURISM)",
    help: "Granite worktops in kitchen, chalk teacher blackboard, basalt Game of thrones tourism, slate roof tiles",
  },
  {
    question: "What is MEDC?",
    answer:
      "CONTAINS(MORE)ANDCONTAINS(ECONOMICALLY)ANDCONTAINSTHREE(DEVELOPED)ANDCONTAINSFOUR(COUNTRY)",
    help: "More Economically developed country eg UK, America. Wealth, high standard of living. Difference between birth and death rates is small. Population changes slowly.",
  },
  {
    question: "What is LEDC?",
    answer:
      "CONTAINS(Less)ANDCONTAINS(ECONOMICALLY)ANDCONTAINSTHREE(DEVELOPED)ANDCONTAINSFOUR(COUNTRY)",
    help: "Less Economically developed country eg Bangladesh, Ethiopia. Poor standard of living. Big difference between birth and death rates. Population increasing rapidly.",
  },
  {
    question: "What is birth rate?",
    answer: "CONTAINS(BIRTHS)ANDCONTAINSOR(1000_THOUSAND)",
    help: "Number of live births per thousand of population per year",
  },
  {
    question: "What is death rate?",
    answer: "CONTAINS(DEATHS)ANDCONTAINSOR(1000_THOUSAND)",
    help: "Number of deaths per thousand of population per year",
  },
  {
    question: "What is natural increase?",
    answer: "CONTAINS(BIRTH)",
    help: "Higher birth rate than death rate (Birth rate minus death rate over a year)",
  },
  {
    question: "What is natural decrease?",
    answer: "CONTAINS(DEATH)",
    help: "Higher death rate than birth rate",
  },
]);
