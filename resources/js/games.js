var nextSelectionArr = [
                        {'id':'eartraining','games':
                                            [{'gameid1':'dronetest', 'gametext1':'Drone Test'}]
                        },
                        {'id':'musictheory','games':
                                            [
                                             {'gameid1':'relatives', 'gametext1':'Relatives Test', 'gamemethod1':'relativesGame();'},
                                             {'gameid2':'circleoffifths', 'gametext2':'Circle of Fifths', 'gamemethod2':'circleOfFifthsGame();'}
                                            ]
                        },
                        {'id':'notation','games':
                                            [{'gameid1':'easy', 'gametext1':'Easy', 'gamemethod1':'notationGame("easy");'}]
                        },
                        {'id':'school','games':
                                            [
                                            {'gameid1':'biology', 'gametext1':'Biology', 'gamemethod1':"schoolGame('biology', biology);"},
                                            {'gameid2':'chemistry', 'gametext2':'Chemistry', 'gamemethod2':"schoolGame('chemistry', chemistry);"},
                                            {'gameid3':'geography', 'gametext3':'Geography', 'gamemethod3':"schoolGame('geography', geography);"},
                                            {'gameid4':'history', 'gametext4':'History', 'gamemethod4':"schoolGame('schistory', schistory);"},
                                            {'gameid5':'spanish', 'gametext5':'Spanish', 'gamemethod5':"schoolGame('spanish', spanish);"},
                                            {'gameid6':'technology', 'gametext6':'Technology', 'gamemethod6':"schoolGame('technology', technology);"},


                                            ]
                        }
                        ];

function populateArray(arrayToPopulate, arrayFull) {
  arrayFull.forEach(item => {
    arrayToPopulate.push(item);
  });
}

var schistoryfull = [{'question':'What is a Greek word to enquire about something?', 'answer': 'CONTAINS(HISTOREO)', 'help': 'Historeo'},
                   {'question':'What is organisation of time in order early to late?', 'answer': 'CONTAINS(CHRONOLOGY)', 'help': 'Chronology'},
                   {'question':'What is a reason why something happens?', 'answer': 'CONTAINS(CAUSE)', 'help': 'Cause'},
                   {'question':'What is staying the same over time?', 'answer': 'CONTAINS(CONTINUITY)', 'help': 'Continuity'},
                   {'question':'What is a primary source?', 'answer': 'CONTAINS(TIME OF THE EVENT)', 'help': "A Primary Source is a source that comes from the time of the event you are studying eg today's newspaper"},
                   {'question':'What is a secondary source?', 'answer': 'CONTAINS(AFTER)', 'help': "A Secondary Source is a source made after the time of the event you are studying eg Roman coins"},
                    {'question':'What century is 87?', 'answer': 'IS(1ST)', 'help': "1st"},
                    {'question':'What century is 1215?', 'answer': 'IS(13TH)', 'help': "13th"},
                    {'question':'What century is 333BC?', 'answer': 'IS(4TH)', 'help': "4th"},
                    {'question':'What type of evidence is a diary?', 'answer': 'IS(WRITTEN)', 'help': "Written"},
                    {'question':'What type of evidence is the Mona Lisa painting?', 'answer': 'IS(VISUAL)', 'help': "Visual"},
                    {'question':'What type of evidence is the Eiffel Tower?', 'answer': 'IS(PHYSICAL)', 'help': "Physical"},
                    {'question':'How can a biased source be useful to an Historian?', 'answer': 'CONTAINS(POINT OF VIEW)', 'help': "Biased source gives another person's point of view and perspective"},
                    {'question':'In which year was the Great Fire of London?', 'answer': 'IS(1666)', 'help': "1666"},
                    {'question':'What is an anachronism?', 'answer': 'ONEOF(OUT OF PLACE_WRONG PLACE_WRONG TIME PERIOD)', 'help': "An anachronism is something that is out of place (wrong place or wrong time period)"},
                    {'question':"Who was Henry VIII's first wife in 1509?", 'answer': 'CONTAINS(CATHERINE OF ARAGON)', 'help': "Catherine of Aragon"},
                    {'question':"Why did Henry marry Catherine of Aragon?", 'answer': 'ONEOF(ARRANGED_VII _ARTHUR)', 'help': "Arthur died and to avoid sending Catherine home to Spain upsetting her father, Henry VII arranged for his second son Henry to marry her"},
                    {'question':"Who was Henry VIII's first wife?", 'answer': 'CONTAINS(CATHERINE OF ARAGON)', 'help': "Catherine of Aragon"},
                    {'question':"What happened in 1501?", 'answer': 'CONTAINS(MET)', 'help': "Henry VIII first met Catherine of Aragon when she came to England to marry his big brother Arthur"},
                    {'question':"What happened in 1533?", 'answer': 'CONTAINS(DIVORCE)', 'help': "In early 1533 Henry gave himself a divorce. He also married pregnant Anne Boleyn. A baby girl was born."},
                    {'question':"What two things happened in 1509?", 'answer': 'CONTAINS(CATHERINE)ANDCONTAINSOR(FATHER_VII )', 'help': "In 1509 Henry VIII married Catherine of Aragon, the same year his father died."},
                    {'question':"What are Henry's changes to the Church known as?", 'answer': 'CONTAINS(REFORMATION)', 'help': "English 'Reformation' (Reforming changing the English Church)"},
                    {'question':"When Henry closed down the monasteries, it was known as the _______ of the monasteries?", 'answer': 'CONTAINS(DISSOLUTION)', 'help': "'Dissolution' of the monasteries. Dissolution is another word for breaking up"},
                    {'question':"What happened in 1527?", 'answer': 'CONTAINS(OLD)ANDCONTAINS(ANNE)', 'help': "Henry thought Catherine was too old to have any more children. He had met and fell in love with Anne Boleyn and wanted to divorce Catherine"},
                    {'question':"What happened in 1513?", 'answer': 'CONTAINS(FRANCE)', 'help': "Henry was in France, Catherine ran the country for him. Her army beat a Scottish army Battle of Flodden. She gave Henry the dead King of Scotland's blood coat"},
];

var schistory = [];
populateArray(schistory, schistoryfull);

var relativesfull = [{'key':'Ab Major', 'rel': 'F Minor'}, {'key':'A Major', 'rel':'F# Minor'}, {'key':'Bb Major', 'rel': 'G Minor'}, {'key':'B Major', 'rel':'G# Minor'},
                 {'key':'C Major', 'rel': 'A Minor'}, {'key':'Db Major', 'rel': 'Bb Minor'}, {'key':'D Major', 'rel':'B Minor'}, {'key':'Eb Major', 'rel':'C Minor'},
                 {'key':'E Major', 'rel': 'C# Minor'}, {'key':'F Major', 'rel': 'D Minor'}, {'key':'Gb Major', 'rel': 'Eb Minor'}, {'key':'G Major', 'rel': 'E Minor'},
                 {'key':'F Minor', 'rel': 'Ab Major'}, {'key':'F# Minor', 'rel':'A Major'}, {'key':'G Minor', 'rel': 'Bb Major'}, {'key':'G# Minor', 'rel':'B Major'},
                 {'key':'A Minor', 'rel': 'C Major'}, {'key':'Bb Minor', 'rel': 'Db Major'}, {'key':'B Minor', 'rel':'D Major'}, {'key':'C Minor', 'rel':'Eb Major'},
                 {'key':'C# Minor', 'rel': 'E Major'}, {'key':'D Minor', 'rel': 'F Major'}, {'key':'Eb Minor', 'rel': 'Gb Major'}, {'key':'E Minor', 'rel': 'G Major'}];

var relatives = [];
populateArray(relatives, relativesfull);

var circle = [{'key':'C', 'sign': 'no sharps or flats', 'twowrong': '1 sharp,1 flat'},
              {'key':'F', 'sign': '1 flat', 'twowrong': '1 sharp,3 flats'},
              {'key':'F_TOGGLE', 'sign': '1 flat', 'flatsharp': 'Bb', 'twowrong': 'Eb,Ab'},
              {'key':'G', 'sign': '1 sharp', 'twowrong': 'no sharps or flats,3 flats'},
              {'key':'G_TOGGLE', 'sign': '1 sharp', 'flatsharp': 'F#', 'twowrong': 'C#,G#'},
              {'key':'A', 'sign': '3 sharps', 'twowrong': 'no sharps or flats,1 sharp'},
              {'key':'A_TOGGLE', 'sign': '3 sharps', 'flatsharp': 'F# C# G#', 'twowrong': 'F# C# D#,F# G# A#'},
              {'key':'D', 'sign': '2 sharps', 'twowrong': 'no sharps or flats,1 sharp'},
              {'key':'D_TOGGLE', 'sign': '2 sharps', 'flatsharp': 'F# C#', 'twowrong': 'C# G#,F# G#'},
              {'key':'E', 'sign': '4 sharps', 'twowrong': 'no sharps or flats,3 sharps'},
              {'key':'E_TOGGLE', 'sign': '4 sharps', 'flatsharp': 'F# C# G# D#', 'twowrong': 'C# G# A# F#,F# G# C# E#'},
              {'key':'Eb', 'sign': '3 flats', 'twowrong': '1 flat,2 flats'},
              {'key':'Eb_TOGGLE', 'sign': '3 flats', 'flatsharp': 'Bb Eb Ab', 'twowrong': 'Eb Ab Db,Bb Db Ab'},
              {'key':'Bb', 'sign': '2 flats', 'twowrong': '1 flat,3 flats'},
              {'key':'Bb_TOGGLE', 'sign': '2 flats', 'flatsharp': 'Bb Eb', 'twowrong': 'Eb Ab,Bb Db'},
              {'key':'Ab', 'sign': '4 flats', 'twowrong': '1 flat,2 flats'},
              {'key':'Ab_TOGGLE', 'sign': '4 flats', 'flatsharp': 'Bb Eb Ab Db', 'twowrong': 'Eb Ab Cb Fb,Bb Db Gb Ab'},
              {'key':'F#', 'sign': '6 sharps', 'twowrong': '3 sharps,4 sharps'},
              {'key':'F#_TOGGLE', 'sign': '6 sharps', 'flatsharp': 'F# C# G# D# A# E#', 'twowrong': 'F# C# G# D# E# B#,B# E# A# D# C# G#'},
              {'key':'Gb', 'sign': '6 flats', 'twowrong': '3 flat,4 flats'},
              {'key':'Gb_TOGGLE', 'sign': '6 flats', 'flatsharp': 'Bb Eb Ab Db Gb Cb', 'twowrong': 'Bb Db Eb Ab Cb Fb,Bb Db Gb Ab Eb Fb'},
              {'key':'B', 'sign': '5 sharps', 'twowrong': '3 sharps,4 sharps'},
              {'key':'B_TOGGLE', 'sign': '5 sharps', 'flatsharp': 'F# C# G# D# A#', 'twowrong': 'C# G# D# E# B#,B# E# A# D# C#'},
              {'key':'Db', 'sign': '5 flats', 'twowrong': '3 flat,4 flats'},
              {'key':'Db_TOGGLE', 'sign': '5 flats', 'flatsharp': 'Bb Eb Ab Db Gb', 'twowrong': 'Bb Eb Ab Cb Fb,Bb Db Gb Eb Fb'},
              {'key':'C#', 'sign': '7 sharps', 'twowrong': '1 sharps,5 sharps'},
              {'key':'C#_TOGGLE', 'sign': '7 sharps', 'flatsharp': 'F# C# G# D# A# E# B#', 'twowrong': 'F# C# G# D# A# E# B# C,B# E# A# D# C# G# D#'}];

var chemistryfull = [{'question':'What is meant by the term element?', 'answer': 'CONTAINS(ATOM)ANDCONTAINSOR(ONE_1)', 'help': 'An element is a substance made up of one atom'},
                 {'question':'What is Chemistry?', 'answer': 'CONTAINS(MATTER)', 'help': 'Chemistry is the study of matter. Matter is anything that occupies space.'},
                 {'question':'What is an atom?', 'answer': 'CONTAINS(PARTICLE)', 'help': 'An atom is a tiny particle'},
                 {'question':'Who created the periodic table of elements?', 'answer': 'CONTAINS(DMITRI)ANDCONTAINS(MENDELEEV)', 'help': 'Dmitri Mendeleev from Russia created the periodic table of elements'},
                 {'question':'Who discovered radium, polenium and treatments for cancer?', 'answer': 'CONTAINS(MARIE)ANDCONTAINS(CURIE)', 'help': 'Marie Curie from Poland and France discovered these'},
                 {'question':'Who discovered synthetic fibers?', 'answer': 'CONTAINS(STEPHANIE)ANDCONTAINS(KWOLEK)', 'help': 'Stephanie Louise Kwolek discovered synthetic fibers'},
                 {'question':'In this Oxygen symbol, what does the number 8 represent?', 'answer': 'CONTAINS(ATOMIC)ANDCONTAINS(NUMBER)', 'help': 'This is the atomic number', 'img': 'resources/images/games/school/chemistry/oxygen.png'},
                 {'question':'In this Oxygen symbol, what does the number 15.999 represent?', 'answer': 'CONTAINS(MASS)', 'help': 'This is the mass number', 'img': 'resources/images/games/school/chemistry/oxygen.png'},
                 {'question':"Give two features of Mendeleev's periodic table", 'answer': 'TWOOF(INCREASING ATOMIC MASS_NO NOBLE GASES_GAPS_SEPARATE BLOCK)', 'help': '1. Increasing atomic mass, 2. No noble gases not discovered, 3. Gaps for undiscovered, 4. Separate block transition metals'},
                 {'question':"Give two features of the modern periodic table", 'answer': 'TWOOF(INCREASING ATOMIC NUMBER_NOBLE GASES_NO GAPS_GROUP)', 'help': '1. Increasing atomic number, 2. Noble gases present, 3. No gaps, 4. Separate block transition metals group II and group III'},
                 {'question':"Is a mixture hard or easy to separate?", 'answer': 'CONTAINS(EASY)', 'help': 'A mixture is easy to separate by filtering and evaporation'},
                 {'question':'Identify this hazard symbol?', 'answer': 'CONTAINS(EXPLOSIVE)', 'help': 'This is an explosive hazard symbol', 'img': 'resources/images/games/school/chemistry/explosive.jpg'},
                 {'question':'What is this hazard symbol?', 'answer': 'CONTAINS(FLAMMABLE)', 'help': 'This is a flammable hazard symbol', 'img': 'resources/images/games/school/chemistry/flammable.jpg'},
                 {'question':'Name this hazard symbol', 'answer': 'CONTAINS(CAUTION)', 'help': 'This is a caution hazard symbol', 'img': 'resources/images/games/school/chemistry/caution.jpg'},
                 {'question':'Name two reasons why we use hazard symbols?', 'answer': 'TWOOF(DANGER_UNDERST_EYE_INTERNAT)', 'help': '1. They warn us of danger, 2. They can be understood even if you cannot read, 3. They are internationally recognised, 4. They are eye-catching', 'img': 'resources/images/games/school/chemistry/caution.jpg'},
                 {'question':'Name this apparatus to find the temperature of a liquid', 'answer': 'CONTAINS(THERMOMETER)', 'help': 'This is a thermometer', 'img': 'resources/images/games/school/chemistry/thermometer.jpg'},
                 {'question':'You would use this to find the mass of an object', 'answer': 'CONTAINS(TOP PAN BALANCE)', 'help': 'This is a top pan balance', 'img': 'resources/images/games/school/chemistry/toppanbalance.jpg'},
                 {'question':'What is this apparatus?', 'answer': 'CONTAINS(TEST TUBE HOLDER)', 'help': 'This is a test tube holder', 'img': 'resources/images/games/school/chemistry/testtubeholder.jpg'},
                 {'question':'Name this apparatus?', 'answer': 'CONTAINS(TRIPOD)', 'help': 'This is a tripod', 'img': 'resources/images/games/school/chemistry/tripod.jpg'},
                 {'question':"What is a compound?", 'answer': 'CONTAINS(DIFFERENT)ANDCONTAINS(CHEMICALLY)ONEOF(TWO_2)', 'help': 'A compound is a substance that consists of two or more different elements chemically combined'},
                 {'question':"Why does Potassium have the symbol K?", 'answer': 'CONTAINS(LATIN)ANDCONTAINS(KALIUM)', 'help': 'Potassium has the symbol K from its Latin name Kalium'},
                 {'question':"Why does Sodium have the symbol Na?", 'answer': 'CONTAINS(LATIN)ANDCONTAINS(NATRIUM)', 'help': 'Sodium has the symbol Na from its Latin name Natrium'},
                 {'question':"Why does Copper have the symbol Cu?", 'answer': 'CONTAINS(LATIN)ANDCONTAINS(CUPRIC)', 'help': 'Copper has the symbol Cu from its Latin name Cupric'},
                 {'question':"Why does Lead have the symbol Pb?", 'answer': 'CONTAINS(LATIN)ANDCONTAINS(PLUM BUM)', 'help': 'Lead(Pb) Latin name Plum Bum'},
                 {'question':"Why does Iron have the symbol Fe?", 'answer': 'CONTAINS(LATIN)ANDCONTAINS(FERRIS)', 'help': 'Iron(Fe) has the symbol Fe from its Latin name Ferris'},
                 {'question':"Why can the atomic number also be called?", 'answer': 'CONTAINS(PROTON)', 'help': 'Proton number'},
                 {'question':"What are vertical columns (up and down) on the periodic table called?", 'answer': 'CONTAINS(GROUP)', 'help': 'Groups', 'img': 'resources/images/games/school/chemistry/group.png'},
                 {'question':"What are horizontal rows (left to right) on the periodic table called?", 'answer': 'CONTAINS(PERIOD)', 'help': 'Periods', 'img': 'resources/images/games/school/chemistry/period.png'},
                 {'question':"What is group I on the periodic table called?", 'answer': 'CONTAINS(ALKALI)ANDCONTAINS(METALS)', 'help': 'Group I Alkali metals (very reactive metals)'},
                 {'question':"What is group VII on the periodic table called for the label in pink on the yellow group?", 'answer': 'CONTAINS(HALOGEN)', 'help': 'Group VII Halogens (reactive non metals)', 'img': 'resources/images/games/school/chemistry/periodic_full_sections_halogens.png'},
                 {'question':"What is group 0 on the periodic table called for the label in pink on the last group?", 'answer': 'CONTAINS(NOBLE)', 'help': 'Group 0 Noble gases (unreactive gases)', 'img': 'resources/images/games/school/chemistry/periodic_noble.png'},
                 {'question':"Who invented the bunsen burner and the zinc-carbon battery?", 'answer': 'CONTAINS(ROBERT)ANDCONTAINS(BUNSEN)', 'help': 'Robert Bunsen', 'img': 'resources/images/games/school/chemistry/bunsen.png'},
                 {'question':"PSTART1To stop it falling over, the Bunsen burner has a heavy INSERTANSWER1PSTART2Gas comes into the Bunsen burner through a INSERTANSWER2PSTART3To help the gas to burn, some air can enter through the INSERTANSWER3PSTART4You can change the amount of air you let in by turning the INSERTANSWER4PSTART5The mixture of gas and air rises up the INSERTANSWER5",
                             'answer': 'INSERTANSWER1(BASE)INSERTANSWER2(RUBBER TUBE)INSERTANSWER3(AIR HOLE)INSERTANSWER4(COLLAR)INSERTANSWER4(BARREL)', 'help': 'Fill in the missing words from this word list: rubber tube, base, barrel, collar, air hole', 'img': 'resources/images/games/school/chemistry/bunsen.png', 'multiquestion': 5},

                                 ];

//test
//chemistryfull = [{'question':"PSTART1To stop it falling over, the Bunsen burner has a heavy INSERTANSWER1PSTART2Gas comes into the Bunsen burner through a INSERTANSWER2PSTART3To help the gas to burn, some air can enter through the INSERTANSWER3PSTART4You can change the amount of air you let in by turning the INSERTANSWER4PSTART5The mixture of gas and air rises up the INSERTANSWER5",
//                                              'answer': 'INSERTANSWER1(BASE)INSERTANSWER2(RUBBER TUBE)INSERTANSWER3(AIR HOLE)INSERTANSWER4(COLLAR)INSERTANSWER4(BARREL)', 'help': 'Fill in the missing words from this word list: rubber tube, base, barrel, collar, air hole', 'img': 'resources/images/games/school/chemistry/bunsen.png', 'multiquestion': 5},
//
//];

var chemistry = [];
populateArray(chemistry, chemistryfull);

var biologyfull = [{'question':'What is the nucleus?', 'answer': 'CONTAINS(CONTROL)', 'help': 'The nucleus controls all activities in the cell'},
                   {'question':'What are the 5 senses?', 'answer': 'CONTAINS(SIGHT)ANDCONTAINS(SMELL)ANDCONTAINSTHREE(HEAR)ANDCONTAINSFOUR(TASTE)ANDCONTAINSFIVE(TOUCH)', 'help': 'The 5 senses are Sight, Smell, Hearing, Taste and Touch'},
                   {'question':'What is a tissue?', 'answer': 'CONTAINS(SIMILAR)ANDCONTAINS(CELLS)ANDCONTAINSTHREE(JOB)', 'help': 'A tissue is similar cells working together to do a job. eg nerve cells nerve tissue, eg xylem cells xylem tissue'},
                   {'question':'What is the job of a kidney?', 'answer': 'CONTAINS(CLEAN)ANDCONTAINS(BLOOD)', 'help': 'A kidneys job is to clean blood.'},
                   {'question':'What is the job of a heart?', 'answer': 'CONTAINS(PUMP)ANDCONTAINS(BLOOD)ANDCONTAINSTHREE(BODY)', 'help': 'A heart pumps blood around the body'},
                   {'question':'Name an Animal Organ', 'answer': 'ONEOF(KIDNEY_HEART_LUNGS_EYE_STOMACH_LIVER)', 'help': 'Examples of animal organs: Kidney, Heart, Lungs, Eye'},
                   {'question':'Name a Plant Organ', 'answer': 'ONEOF(STEM_FLOWER_LEAF)', 'help': 'Examples of plant organs: Stem, Flower, Leaf'},
                   {'question':'What does a nerve cell do?', 'answer': 'ONEOF(MESSAGE_SIGNAL_IMPULSE)', 'help': 'A nerve cell carries messages'},
                   {'question':'What does a red blood cell do?', 'answer': 'CONTAINS(OXYGEN)', 'help': 'A red blood cell carries oxygen from the lungs to the body.'},
                   {'question':'Why does a red blood cell have no nucleus?', 'answer': 'CONTAINS(HAEMOGLOBIN)', 'help': 'A red blood cell has no nucleus room for red haemoglobin to carry oxygen from lungs to the body.'},
                   {'question':'What does a xylem cell do', 'answer': 'CONTAINS(WATER)', 'help': 'A xylem (plant) cell carries water from roots to the rest of the plant. Wall strengthened lignin'},
                   {'question':'What does a sperm cell do?', 'answer': 'CONTAINS(SWIM)ANDCONTAINS(EGG)', 'help': 'A sperm cell swims to the egg'},
                   {'question':'What characteristics does a sperm cell have?', 'answer': 'CONTAINS(TAIL)', 'help': 'A sperm cell has a tail'},
                   {'question':'What characteristics does a red blood cell have?', 'answer': 'CONTAINS(FLAT)ANDCONTAINS(DISC)', 'help': 'A red blood cell is a flat disc'},
                   {'question':'What characteristics does a nerve cell have?', 'answer': 'CONTAINS(WIRE)', 'help': 'A nerve cell is wire like'},
                   {'question':'What characteristics does a xylem cell have?', 'answer': 'CONTAINS(HOLLOW)ANDCONTAINS(SPIRAL)ANDCONTAINSTHREE(TUBE)', 'help': 'A xylem cell is a hollow spiral tube'},
                   {'question':'Name this cell', 'answer': 'CONTAINS(ANIMAL)', 'help': 'This is an animal cell', 'img': 'resources/images/games/school/biology/animalcell.png'},
                   {'question':'Here is a cell, name it', 'answer': 'CONTAINS(PLANT)', 'help': 'This is a plant cell', 'img': 'resources/images/games/school/biology/plantcell.png'},
                   {'question':'Name these three areas of the cell from top to bottom', 'answer': 'ORDER(CHLOROPLAST,VACUOLE,CELL WALL)', 'help': 'The labels in order are Chloroplast, Vacuole and Cell Wall', 'img': 'resources/images/games/school/biology/plantlabel.png', 'multi':'2_3'},
                   {'question':'Name these three common areas of the cells from top to bottom', 'answer': 'ORDER(NUCLEUS,CYTOPLASM,CELL MEMBRANE)', 'help': 'The labels in order are Nucleus, Cytoplasm and Cell Membrane', 'img': 'resources/images/games/school/biology/animalandplant3common.png', 'multi':'2_3'},
                   {'question':'Name this special cell', 'answer': 'CONTAINS(RED)ANDCONTAINS(BLOOD)', 'help': 'This is a red blood cell', 'img': 'resources/images/games/school/biology/redblood.png'},
                   {'question':'What is this special cell', 'answer': 'CONTAINS(NERVE)', 'help': 'This is a nerve cell', 'img': 'resources/images/games/school/biology/nerve.png'},
                   {'question':'Here is a special cell, what is it?', 'answer': 'CONTAINS(XYLEM)', 'help': 'This is a xylem cell', 'img': 'resources/images/games/school/biology/xylem.png'},
                   {'question':'This special cell has a tail, what is it?', 'answer': 'CONTAINS(SPERM)', 'help': 'This is a sperm cell', 'img': 'resources/images/games/school/biology/sperm.png'},
                   {'question':'What are the 7 characteristics of life?', 'answer': 'CONTAINS(MOVEMENT)ANDCONTAINS(RESPIRATION)ANDCONTAINSTHREE(SENSITIVITY)ANDCONTAINSFOUR(GROWTH)ANDCONTAINSFIVE(REPRODUCTION)ANDCONTAINSSIX(EXCRETION)ANDCONTAINSSEVEN(NUTRITION)', 'help': 'The 7 characteristics of life can be remembered by MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition'},
                   {'question':'What is the cytoplasm?', 'answer': 'CONTAINS(CHEMICAL)ANDCONTAINS(REACTIONS)', 'help': 'The cytoplasm is where chemical reactions take place'},
                   {'question':'What is the cell membrane?', 'answer': 'CONTAINS(VITAMINS)ANDCONTAINS(MINERALS)', 'help': 'The cell membrane allows certain things like vitamins and minerals through'},
                   {'question':'What are cells?', 'answer': 'CONTAINS(TINY)ANDCONTAINS(LIVING)ANDCONTAINSTHREE(UNIT)', 'help': 'Cells are tiny units of living things'},
                   {'question':'What is the vacuole?', 'answer': 'CONTAINS(STORES)ANDCONTAINS(FOOD)ANDCONTAINSTHREE(MINERALS)', 'help': 'The vacuole stores dissolved food and minerals'},
                   {'question':'What is the job of the cell wall?', 'answer': 'CONTAINS(PROTECTS)ANDCONTAINS(SHAPE)', 'help': 'The cell wall protects the cell and keeps cell in shape'},
                   {'question':'What does chloroplast do?', 'answer': 'CONTAINS(CHLOROPHYLL)ANDCONTAINS(PHOTOSYNTHESIS)', 'help': 'Chloroplast produces chlorophyll for photosynthesis'},
                   {'question':'What does a plant stem do?', 'answer': 'CONTAINS(HOLDS)ANDCONTAINS(LEAVES)', 'help': 'The stem holds up leaves'},
                   {'question':'What does a plant flower do?', 'answer': 'CONTAINS(REPRODUCTION)', 'help': 'The flowers job is reproduction'},
                   {'question':'What do plant roots do?', 'answer': 'CONTAINS(WATER)', 'help': 'The roots take in water'},
                   {'question':'What does a plant leaf do?', 'answer': 'CONTAINS(FOOD)', 'help': 'The leaf makes food for the plant'},
                   {'question':"In this picture of the brain, what is coloured in green and what is it's purpose?", 'answer': 'CONTAINS(BRAIN)ANDCONTAINS(STEM)', 'help': 'This is the brain stem: In charge of all functions to stay alive eg breathing, circulating blood', 'img': 'resources/images/games/school/biology/brain.jpg'},
                   {'question':"In this picture of the brain, what is coloured in yellow? and what is it's purpose?", 'answer': 'ONEOF(CEREBRUM_CEREBRAL CORTEX)', 'help': 'This is the cerebrum OR cerebral cortex, thinking part of brain, controls voluntary muscles', 'img': 'resources/images/games/school/biology/brain.jpg'},
                   {'question':"In this picture of the brain, what is coloured in blue and what is it's purpose?", 'answer': 'CONTAINS(PITUITARY)ANDCONTAINS(HORMONES)', 'help': 'This is the pituitary gland it controls hormones', 'img': 'resources/images/games/school/biology/brain.jpg'},
                   {'question':"In this picture of the brain, what is coloured in orange and what is it's purpose?", 'answer': 'CONTAINS(THALAMUS)ANDCONTAINS(TEMPERATURE)', 'help': 'This is the thalamus or hypothalamus: it controls the temperature of your body', 'img': 'resources/images/games/school/biology/brain.jpg'},
                   {'question':"In this picture of the brain, what is coloured in red  and what is it's purpose?", 'answer': 'CONTAINS(CEREBELLUM)ANDCONTAINS(BALANCE)', 'help': 'This is the cerebellum: controls balance, movement, coordination, muscles', 'img': 'resources/images/games/school/biology/brain.jpg'},
                   {'question':"What is the other name for the skull?", 'answer': 'CONTAINS(CRANIUM)', 'help': 'The cranium'},
                   {'question':"What is the longest bone in the body?", 'answer': 'CONTAINS(FEMUR)', 'help': 'The femur'},
                   {'question':"What are the finger bones called?", 'answer': 'CONTAINS(CARPAL)', 'help': 'The metacarpals'},
                   {'question':"How many bones are in the human body?", 'answer': 'CONTAINS(206)', 'help': '206'},
                                      ];


//test
//biologyfull = [{'question':"What is the other name for the skull?", 'answer': 'CONTAINS(CRANIUM)', 'help': 'The cranium'},
//                                  {'question':"What is the longest bone in the body?", 'answer': 'CONTAINS(FEMUR)', 'help': 'The femur'},
//                                  {'question':"What are the finger bones called?", 'answer': 'CONTAINS(CARPAL)', 'help': 'The metacarpals'},
//                                  {'question':"How many bones are in the human body?", 'answer': 'CONTAINS(206)', 'help': '206'},
//];

var biology = [];
populateArray(biology, biologyfull);



var geographyfull = [{'question':'What is physical geography', 'answer': 'CONTAINS(NATURAL WORLD)', 'help': 'The study of the natural world'},
                     {'question':'What is human geography', 'answer': 'CONTAINS(PEOPLE LIVE)', 'help': 'The study of how and where people live'},
                     {'question':'What is environmental geography', 'answer': 'CONTAINS(AFFECT)', 'help': 'The study of how humans interact with and affect the environment'},
                     {'question':'What measuring instrument is used to measure precipitation', 'answer': 'CONTAINS(RAIN GAUGE)', 'help': 'Rain gauge'},
                     {'question':'What layer of atmosphere does our weather occur in?', 'answer': 'CONTAINS(TROPOSPHERE)', 'help': 'Troposphere'},
                     {'question':'What is an ecosystem?', 'answer': 'CONTAINS(LIVING)ANDCONTAINS(COMMUNITY)ANDCONTAINSTHREE(PLANTS)ANDCONTAINSFOUR(ANIMALS)', 'help': 'An ecosystem is a living community of plants and animals and the environment in which they live'},
                     {'question':'An ecosystem is made up of 2 parts, 1. Living elements - plant, animals, humans and bacteria and 2. ?', 'answer': 'CONTAINS(NON)', 'help': '2. Non living elements - sunlight, air, water, rocks and soil'},
                     {'question':'An ecosystem is made up of 2 parts, 1. Non living elements - sunlight, air, water, rocks and soil and 2. ?', 'answer': 'CONTAINS(LIVING)', 'help': '2. Living elements - plant, animals, humans and bacteria'},
                     {'question':'What are the 6 biomes of the world?', 'answer': 'CONTAINS(TUNDRA)ANDCONTAINS(TAIGA)ANDCONTAINSTHREE(GRASSLAND)ANDCONTAINSFOUR(DESERT)ANDCONTAINSFIVE(TROPICAL)ANDCONTAINSSIX(DECIDUOUS)', 'help': 'Tundra, Taiga, Grassland, Desert, Tropical rain forest, Deciduous forest'},



];

var geography = [];
populateArray(geography, geographyfull);



var spanishfull = [{'question':'Hola ¿Cómo te llamas?', 'answer': 'SOMETHING()', 'help': 'Hello, what is your name?'}];

var spanish = [{'question':'Hola ¿Cómo te llamas?', 'answer': 'SOMETHING()', 'help': 'Hello, what is your name?'}];


var technologyfull = [{'question':'What colour and shape is a mandatory sign?', 'answer': 'CONTAINS(BLUE)ANDCONTAINS(CIRCLE)', 'help': 'A mandatory sign is represented in white on a solid blue circle.'},
                                       {'question':'What is a mandatory sign?', 'answer': 'CONTAINS(ACTION)', 'help': 'A mandatory sign identifies a particular course of action that must be taken.'},
                                       {'question':'What does this mandatory sign mean?', 'answer': 'CONTAINS(HEAD)', 'help': 'Head protection must be worn', 'img': 'resources/images/games/school/technology/head.png'},
                                       {'question':'What does this must do sign mean?', 'answer': 'CONTAINS(HEAD)ANDCONTAINS(EYE)', 'help': 'Head and eye protection must be worn', 'img': 'resources/images/games/school/technology/headandeye.png'},
                                       {'question':'What does this prohibition sign mean?', 'answer': 'CONTAINS(NO)ANDCONTAINS(SMOKING)', 'help': 'No smoking', 'img': 'resources/images/games/school/technology/nosmoking.png'},
                                       {'question':'What colour and shape is a prohibition sign?', 'answer': 'CONTAINS(RED)ANDCONTAINS(CIRCLE)', 'help': 'A prohibited activity is represented in black on white with a red circle and diagonal stripe superimposed.'},
                                       {'question':'What is a prohibition sign?', 'answer': 'CONTAINS(FORBIDDEN)', 'help': 'A prohibition sign indicates behaviour that is forbidden.'},
                                       {'question':'What does this safe condition sign mean?', 'answer': 'CONTAINS(FIRST)ANDCONTAINS(AID)', 'help': 'First Aid', 'img': 'resources/images/games/school/technology/firstaid.png'},
                                       {'question':'What is a safe condition sign?', 'answer': 'CONTAINS(SAFETY)', 'help': 'A safe condition sign indicates the presence of a safety facility'},
                                       {'question':'What colour and shape is a safe condition sign?', 'answer': 'CONTAINS(GREEN)ANDCONTAINS(SQUARE)', 'help': 'A safe condition sign is represented in white on a solid green square'},
                                       {'question':'What is a hazard sign?', 'answer': 'CONTAINS(HARM)', 'help': 'A hazard sign indicates a specific source of potential harm'},
                                       {'question':'What colour and shape is a hazard sign?', 'answer': 'CONTAINS(YELLOW)ANDCONTAINS(TRIANGLE)', 'help': 'Hazard signs are printed in black on a yellow background and are triangle shape'},
                                       {'question':'What does this hazard sign mean?', 'answer': 'CONTAINS(HIGH)ANDCONTAINS(VOLTAGE)', 'help': 'Danger high voltage', 'img': 'resources/images/games/school/technology/highvoltage.png'},
                                       {'question':'What does this safety sign mean?', 'answer': 'CONTAINS(EMERGENCY)ANDCONTAINS(STOP)ANDCONTAINSTHREE(BUTTON)', 'help': 'Emergency stop button', 'img': 'resources/images/games/school/technology/emergencystopbutton.png'},
                                       {'question':'What does this forbidden behaviour mean?', 'answer': 'CONTAINS(NO)ANDCONTAINS(RUNNING)', 'help': 'No running', 'img': 'resources/images/games/school/technology/norunning.png'},
                                       {'question':'What does this prohibited behaviour?', 'answer': 'CONTAINS(NO)ANDCONTAINS(EATING)', 'help': 'No eating', 'img': 'resources/images/games/school/technology/noeating.png'},
                                       {'question':'What does this source of potential harm sign mean?', 'answer': 'CONTAINS(RISK)ANDCONTAINS(EXPLOSION)', 'help': 'Risk of explosion', 'img': 'resources/images/games/school/technology/riskofexplosion.png'},
                                       {'question':'What safety facility is present?', 'answer': 'CONTAINS(EMERGENCY)ANDCONTAINS(EYE)ANDCONTAINSTHREE(WASH)', 'help': 'Emergency eye wash', 'img': 'resources/images/games/school/technology/emergencyeyewash.png'},
                                       {'question':'What course of action must be taken?', 'answer': 'CONTAINS(WEAR)ANDCONTAINS(PROTECTIVE)ANDCONTAINSTHREE(GLOVES)', 'help': 'Wear protective gloves', 'img': 'resources/images/games/school/technology/wearprotectivegloves.png'},
                                       {'question':'What is mandatory?', 'answer': 'CONTAINS(WEAR)ANDCONTAINS(GOGGLES)', 'help': 'Wear protective goggles', 'img': 'resources/images/games/school/technology/weargoggles.png'},
                                       {'question':'What is the harm?', 'answer': 'CONTAINS(TOXIC)', 'help': 'This hazard sign means toxic', 'img': 'resources/images/games/school/technology/toxic.png'},
                                       {'question':'What is the hazard?', 'answer': 'CONTAINS(CORROSIVE)', 'help': 'This hazard sign means corrosive', 'img': 'resources/images/games/school/technology/corrosive.png'},
                                       {'question':'What is this sign?', 'answer': 'ONEOF(HAZARD WARNING_CAUTION)', 'help': 'This is a hazard warning sign', 'img': 'resources/images/games/school/technology/hazard.png'},
                                       {'question':'What is a Ferrous metal?', 'answer': 'CONTAINS(IRON)', 'help': "A Ferrous metal contains iron as it's largest alloying element"},
                                       {'question':'What is a Non-Ferrous metal?', 'answer': 'CONTAINS(IRON)ANDCONTAINS(NOT)', 'help': "A Non-Ferrous metal does not contains iron"},
                                       {'question':'What is an alloy metal?', 'answer': 'CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)', 'help': "An Alloy metal is combined with other substances (alloying agents). An Alloy metal is strong, hard, durable and tough."},
                                       {'question':'Why does an alloy metal have superior properties?', 'answer': 'CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)', 'help': "An Alloy metal has superior properties because it is combined with other substances (alloying agents)."},
                                       {'question':'What is a linear motion?', 'answer': 'CONTAINS(STRAIGHT)ANDCONTAINS(LINE)', 'help': "A linear motion is motion in a straight line in any direction."},
                                       {'question':'What are 4 types of motion?', 'answer': 'CONTAINS(LINEAR)ANDCONTAINS(ROTARY)ANDCONTAINSTHREE(OSCILLATING)ANDCONTAINSFOUR(RECIPROCATING)', 'help': "Four types of motion are Linear, Reciprocating, Rotary, Oscillating."},
                                       {'question':'What is a rotary motion?', 'answer': 'CONTAINS(ROUND)', 'help': "A rotary motion is motion round and round in either direction."},
                                       {'question':'What is a reciprocating motion?', 'answer': 'CONTAINS(BACKWARDS)ANDCONTAINS(FORWARDS)ANDCONTAINSTHREE(STRAIGHT)ANDCONTAINSFOUR(LINE)', 'help': "A reciprocating motion is motion backwards and forwards in a straight line."},
                                       {'question':'What is a oscillating motion?', 'answer': 'CONTAINS(SWING)ANDCONTAINS(BACK)ANDCONTAINSTHREE(FOR)ANDCONTAINSFOUR(ARC)', 'help': "An oscillating motion is motion swing back and forth in an arc."},
                                       {'question':'How is rotary speed measured?', 'answer': 'CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)', 'help': "Rotary speed is measured in revolutions per minute rpm."},
                                       {'question':'How is rotary speed measured?', 'answer': 'CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)', 'help': "Rotary speed is measured in revolutions per minute rpm."}];



var technology = [{'question':'What colour and shape is a mandatory sign?', 'answer': 'CONTAINS(BLUE)ANDCONTAINS(CIRCLE)', 'help': 'A mandatory sign is represented in white on a solid blue circle.'},
                  {'question':'What is a mandatory sign?', 'answer': 'CONTAINS(ACTION)', 'help': 'A mandatory sign identifies a particular course of action that must be taken.'},
                  {'question':'What does this mandatory sign mean?', 'answer': 'CONTAINS(HEAD)', 'help': 'Head protection must be worn', 'img': 'resources/images/games/school/technology/head.png'},
                  {'question':'What does this must do sign mean?', 'answer': 'CONTAINS(HEAD)ANDCONTAINS(EYE)', 'help': 'Head and eye protection must be worn', 'img': 'resources/images/games/school/technology/headandeye.png'},
                  {'question':'What does this prohibition sign mean?', 'answer': 'CONTAINS(NO)ANDCONTAINS(SMOKING)', 'help': 'No smoking', 'img': 'resources/images/games/school/technology/nosmoking.png'},
                  {'question':'What colour and shape is a prohibition sign?', 'answer': 'CONTAINS(RED)ANDCONTAINS(CIRCLE)', 'help': 'A prohibited activity is represented in black on white with a red circle and diagonal stripe superimposed.'},
                  {'question':'What is a prohibition sign?', 'answer': 'CONTAINS(FORBIDDEN)', 'help': 'A prohibition sign indicates behaviour that is forbidden.'},
                  {'question':'What does this safe condition sign mean?', 'answer': 'CONTAINS(FIRST)ANDCONTAINS(AID)', 'help': 'First Aid', 'img': 'resources/images/games/school/technology/firstaid.png'},
                  {'question':'What is a safe condition sign?', 'answer': 'CONTAINS(SAFETY)', 'help': 'A safe condition sign indicates the presence of a safety facility'},
                  {'question':'What colour and shape is a safe condition sign?', 'answer': 'CONTAINS(GREEN)ANDCONTAINS(SQUARE)', 'help': 'A safe condition sign is represented in white on a solid green square'},
                  {'question':'What is a hazard sign?', 'answer': 'CONTAINS(HARM)', 'help': 'A hazard sign indicates a specific source of potential harm'},
                  {'question':'What colour and shape is a hazard sign?', 'answer': 'CONTAINS(YELLOW)ANDCONTAINS(TRIANGLE)', 'help': 'Hazard signs are printed in black on a yellow background and are triangle shape'},
                  {'question':'What does this hazard sign mean?', 'answer': 'CONTAINS(HIGH)ANDCONTAINS(VOLTAGE)', 'help': 'Danger high voltage', 'img': 'resources/images/games/school/technology/highvoltage.png'},
                  {'question':'What does this safety sign mean?', 'answer': 'CONTAINS(EMERGENCY)ANDCONTAINS(STOP)ANDCONTAINSTHREE(BUTTON)', 'help': 'Emergency stop button', 'img': 'resources/images/games/school/technology/emergencystopbutton.png'},
                  {'question':'What does this forbidden behaviour mean?', 'answer': 'CONTAINS(NO)ANDCONTAINS(RUNNING)', 'help': 'No running', 'img': 'resources/images/games/school/technology/norunning.png'},
                  {'question':'What does this prohibited behaviour?', 'answer': 'CONTAINS(NO)ANDCONTAINS(EATING)', 'help': 'No eating', 'img': 'resources/images/games/school/technology/noeating.png'},
                  {'question':'What does this source of potential harm sign mean?', 'answer': 'CONTAINS(RISK)ANDCONTAINS(EXPLOSION)', 'help': 'Risk of explosion', 'img': 'resources/images/games/school/technology/riskofexplosion.png'},
                  {'question':'What safety facility is present?', 'answer': 'CONTAINS(EMERGENCY)ANDCONTAINS(EYE)ANDCONTAINSTHREE(WASH)', 'help': 'Emergency eye wash', 'img': 'resources/images/games/school/technology/emergencyeyewash.png'},
                  {'question':'What course of action must be taken?', 'answer': 'CONTAINS(WEAR)ANDCONTAINS(PROTECTIVE)ANDCONTAINSTHREE(GLOVES)', 'help': 'Wear protective gloves', 'img': 'resources/images/games/school/technology/wearprotectivegloves.png'},
                  {'question':'What is mandatory?', 'answer': 'CONTAINS(WEAR)ANDCONTAINS(GOGGLES)', 'help': 'Wear protective goggles', 'img': 'resources/images/games/school/technology/weargoggles.png'},
                  {'question':'What is the harm?', 'answer': 'CONTAINS(TOXIC)', 'help': 'This hazard sign means toxic', 'img': 'resources/images/games/school/technology/toxic.png'},
                  {'question':'What is the hazard?', 'answer': 'CONTAINS(CORROSIVE)', 'help': 'This hazard sign means corrosive', 'img': 'resources/images/games/school/technology/corrosive.png'},
                  {'question':'What is this sign?', 'answer': 'ONEOF(HAZARD WARNING_CAUTION)', 'help': 'This is a hazard warning sign', 'img': 'resources/images/games/school/technology/hazard.png'},
                  {'question':'What is a Ferrous metal?', 'answer': 'CONTAINS(IRON)', 'help': "A Ferrous metal contains iron as it's largest alloying element"},
                                                         {'question':'What is a Non-Ferrous metal?', 'answer': 'CONTAINS(IRON)ANDCONTAINS(NOT)', 'help': "A Non-Ferrous metal does not contains iron"},
                                                         {'question':'What is an alloy metal?', 'answer': 'CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)', 'help': "An Alloy metal is combined with other substances (alloying agents). An Alloy metal is strong, hard, durable and tough."},
                                                         {'question':'Why does an alloy metal have superior properties?', 'answer': 'CONTAINS(COMBINED)ANDCONTAINS(ALLOYING)', 'help': "An Alloy metal has superior properties because it is combined with other substances (alloying agents)."},
                                                         {'question':'What is a linear motion?', 'answer': 'CONTAINS(STRAIGHT)ANDCONTAINS(LINE)', 'help': "A linear motion is motion in a straight line in any direction."},
                                                         {'question':'What are 4 types of motion?', 'answer': 'CONTAINS(LINEAR)ANDCONTAINS(ROTARY)ANDCONTAINSTHREE(OSCILLATING)ANDCONTAINSFOUR(RECIPROCATING)', 'help': "Four types of motion are Linear, Reciprocating, Rotary, Oscillating."},
                                                         {'question':'What is a rotary motion?', 'answer': 'CONTAINS(ROUND)', 'help': "A rotary motion is motion round and round in either direction."},
                                                         {'question':'What is a reciprocating motion?', 'answer': 'CONTAINS(BACKWARDS)ANDCONTAINS(FORWARDS)ANDCONTAINSTHREE(STRAIGHT)ANDCONTAINSFOUR(LINE)', 'help': "A reciprocating motion is motion backwards and forwards in a straight line."},
                                                         {'question':'What is a oscillating motion?', 'answer': 'CONTAINS(SWING)ANDCONTAINS(BACK)ANDCONTAINSTHREE(FOR)ANDCONTAINSFOUR(ARC)', 'help': "An oscillating motion is motion swing back and forth in an arc."},
                                                         {'question':'How is rotary speed measured?', 'answer': 'CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)', 'help': "Rotary speed is measured in revolutions per minute rpm."},
                                                         {'question':'How is rotary speed measured?', 'answer': 'CONTAINS(REVOLUTIONS)ANDCONTAINS(PER)ANDCONTAINSTHREE(MINUTE)', 'help': "Rotary speed is measured in revolutions per minute rpm."}];



//input     animal cell

//which of these is not a characteristic of life




//[{'question':'What is the nucleus?', 'answer': 'CONTAINS(CONTROL)', 'help': 'The nucleus controls all activities in the cell'},
//               {'question':'What are the 5 senses?', 'answer': 'CONTAINS(SIGHT)ANDCONTAINS(SMELL)ANDCONTAINSTHREE(HEAR)ANDCONTAINSFOUR(TASTE)ANDCONTAINSFIVE(TOUCH)', 'help': 'The 5 senses are Sight, Smell, Hearing, Taste and Touch'},
//               {'question':'What is a tissue?', 'answer': 'CONTAINS(SIMILAR)ANDCONTAINS(CELLS)ANDCONTAINSTHREE(JOB)', 'help': 'A tissue is similar cells working together to do a job. eg nerve cells nerve tissue, eg xylem cells xylem tissue'}];
var schoolText;

var subjectlist = {'chemistry': chemistry, 'biology': biology, 'spanish': spanish, 'technology': technology, 'schistory': schistory, 'geography': geography};
var schoollist = {'chemistry': chemistryfull, 'biology': biologyfull, 'spanish': spanishfull, 'technology': technologyfull, 'schistory': schistoryfull, 'geography': geographyfull};


//var circleSigns = ['no sharps or flats', '1 flat', '1 sharp', '2 sharps', '3 sharps', '4 sharps'];
// future have intermediate beginner advanced change the question to not say how many
//var circleFlatSharps = ['Bb', 'F#', 'F# C# G#', 'F# C#', 'F# C# G# D#'];

var previousRelative = '';
var loadedGame = '';

var notationeasycounter = 0;

var score = 0;
var scoreMsg = '';
var skips = 0;


function resetScore() {
  score = 0;
  scoreMsg = '';
  skips = 0;
}

// or do you want to know the answer, answers right out of

function showNextGameSelection(game) {
  //reset score
  resetScore();

  //hide first set buttons
  //document.getElementById('eartraining').style.display = "none";
  document.getElementById('musictheory').style.display = "none";
  document.getElementById('notation').style.display = "none";
  document.getElementById('school').style.display = "none";
  

  //show next button set
  var gamediv = document.getElementById('gameselection');


  for (var i=0; i<nextSelectionArr.length; i++) {


      if (nextSelectionArr[i].id == game) {
        for (var j=0; j<nextSelectionArr[i].games.length; j++) {
          var counter = j+1;

          var button = document.createElement("button");
          button.className = 'gamebuttons';
          var idtext = 'gameid' + counter;
          var text = 'gametext' + counter;
          var method = 'gamemethod' + counter;
          button.id = nextSelectionArr[i].games[j][idtext];//'relativeminor';
          button.type = 'button';
          button.textContent = nextSelectionArr[i].games[j][text];//'Relative Minor';

          if(nextSelectionArr[i].games[j][method] != undefined) {
            button.setAttribute('onclick','javascript:' + nextSelectionArr[i].games[j][method]);
          }

          gamediv.appendChild(button);
        }
      }
  }

  var returnbutton = document.createElement("button");
  returnbutton.className = 'gamebuttons';
  returnbutton.id = 'return';
  returnbutton.type = 'button';
  returnbutton.textContent = 'All Games';
  //returnbutton.onclick = "games.html";
  returnbutton.setAttribute('onclick','javascript:window.location="games.html";');

  var gamereturn = document.getElementById('gamereturn');
  gamereturn.appendChild(returnbutton);

}

function relativesGame() {
  clearGameSpace();
  loadedGame = 'Relatives';
  //randomize the game
  relatives.sort(function(){
    return 0.5 - Math.random();
  });

  var gamemain = document.getElementById('gamemain');
  var gameanswers = document.getElementById('gameanswers');

  console.log('relativvvveslen' + relatives.length);

  //need a random 0-23 rel length 24
  var randomscale = Math.floor(Math.random() * relatives.length);

  var relativequestion = document.createElement("div");
  relativequestion.textContent = 'What is the relative key of ' + relatives[randomscale]['key'] + '?' ;

  gamemain.appendChild(relativequestion);

  var relativeanswer = relatives[randomscale]['rel'];



  for (var i=0; i<24; i++) {
    var qbutton = document.createElement("button");
    qbutton.className = 'answerbuttons';
    //qbutton.id = 'relatives
    qbutton.type = 'button';
    qbutton.textContent = relativesfull[i].key;
    var ansmethod = 'javascript:checkAnswer("' + relativeanswer + '", "' + relativesfull[i].key + '","javascript:relativesGame()");';
    qbutton.setAttribute('onclick',ansmethod);
    gameanswers.appendChild(qbutton);
  }

  var reentry = "javascript:relativesGame()";
  var skipmethod = 'javascript:skip("' + reentry + '");';
  addSkipButton(skipmethod, gameanswers);

  //remove item
  relatives.splice(randomscale, 1);
  if(relatives.length == 0) {
    //repopulate array
    relativesfull.forEach(rel => {
      relatives.push(rel);
    });

    scoreMsg = 'You have scored ' + (score + 1) + ' out of ' + relativesfull.length + ' questions ';
  }

  showHelp();
}

function notationGame(level){
  clearGameSpace();
  loadedGame = 'Notation';

  
  var texts = ["Slap a low E, try to memorize the notation",
               "Slap the note",
               "Slap a low E and pop a muted G string, try to memorize the notation",
               "Slap and pop the notes",
               "Play notes on notation spaces, try to memorize the notation",
               "Play the notes on notation spaces",
               "Play notes on notation lines, try to memorize the notation",
               "Play the notes on notation lines"];
  var notationimageseasy = ["resources/images/games/notation/slap_an_e.png",
                            "resources/images/games/notation/slap_an_e_no_tab.png",
                            "resources/images/games/notation/slap_pop_e_g.png",
                            "resources/images/games/notation/slap_pop_e_g_no_tab.png",
                            "resources/images/games/notation/spaces.png",
                            "resources/images/games/notation/spaces_no_tab.png",
                            "resources/images/games/notation/lines.png",
                            "resources/images/games/notation/lines_no_tab.png"];
  var gamemain = document.getElementById('gamemain');

  var textdiv = document.createElement('div');
  textdiv.textContent = texts[notationeasycounter];
  gamemain.appendChild(textdiv);

  var img = document.createElement('img');
  img.src = notationimageseasy[notationeasycounter];
  img.className = 'notationimages';
  gamemain.appendChild(img);

  var nextq = document.createElement("a");
    nextq.href = 'javascript:notationGame("Easy")';
    nextq.textContent = String.fromCodePoint('9193');
    nextq.className += 'gamebutton';
    var gameanswer = document.getElementById('gameanswer');
    gameanswer.appendChild(nextq);

  notationeasycounter++;
  if (notationeasycounter == notationimageseasy.length) {
    notationeasycounter = 0;
  }
}

function checkAnswer(answerkey, answerselected, nextmethod) {
  var gameanswer = document.getElementById('gameanswer');

  if(answerselected.startsWith('School')) {
    //{'question':"NSERTANSWER2", 'answer': 'INSERTANSWER1(BASE)INSERTANSWER2(RUBBER TUBE)', 'help': 'Fill in the missing words from this word list: above, rubber tube, base, barrel, collar, air hole', 'img': 'resources/images/games/school/chemistry/bunsen.png', 'multiquestion': 2},

  var correct = false;
  answerkey = answerkey.toUpperCase();

    if(answerkey.indexOf('INSERTANSWER1') != -1) {
      //multi question

      for (var mq=1; mq<=5; mq++) {
        var studentAnswerId = 'schoolText' + mq;
        var studentAnswer = document.getElementById(studentAnswerId);

        if(studentAnswer != undefined) {
            studentAnswer = studentAnswer.value.toUpperCase();
            var containsId = 'INSERTANSWER' + mq;
            var contains = answerkey.indexOf(containsId);
            if (contains != -1){
                var checkForContains = answerkey.substring(contains+14, answerkey.indexOf(')', contains));
                console.log(checkForContains);
                var doesItContain = studentAnswer.indexOf(checkForContains) != -1;
                console.log(doesItContain);
                if(mq == 1) {
                  correct = doesItContain;
                } else {
                  correct = correct && doesItContain;
                }
            }
        }

      }

    } else {
    var studentAnswer = document.getElementById('schoolText').value.toUpperCase();

    var is = answerkey.indexOf('IS(');
        if (is != -1){
          var checkForIs = answerkey.substring(is+3, answerkey.indexOf(')'));
          console.log(checkForIs);
          var doesItContain = studentAnswer.trim() == checkForIs;
          console.log(doesItContain);
          correct = doesItContain;
        }

    //'CONTAINS(atom)ANDCONTAINSOR(one_1)'}];
    var contains = answerkey.indexOf('CONTAINS(');
    if (contains != -1){
      var checkForContains = answerkey.substring(contains+9, answerkey.indexOf(')'));
      console.log(checkForContains);
      var doesItContain = studentAnswer.indexOf(checkForContains) != -1;
      console.log(doesItContain);
      correct = doesItContain;
    }

    var andContains = answerkey.indexOf('ANDCONTAINS(');
    if (andContains != -1){
      var clause = answerkey.substring(andContains+12, answerkey.indexOf(')', andContains));
      console.log(clause);
      var doesItContain = studentAnswer.indexOf(clause) != -1;
      console.log(doesItContain);
      correct = correct && doesItContain;
    }

    var andContainsthree = answerkey.indexOf('ANDCONTAINSTHREE(');
    if (andContainsthree != -1){
      var clause = answerkey.substring(andContainsthree+17, answerkey.indexOf(')', andContainsthree));
      console.log(clause);
      var doesItContain = studentAnswer.indexOf(clause) != -1;
      console.log(doesItContain);
      correct = correct && doesItContain;
    }

    var andContainsfour = answerkey.indexOf('ANDCONTAINSFOUR(');
        if (andContainsfour != -1){
          var clause = answerkey.substring(andContainsfour+16, answerkey.indexOf(')', andContainsfour));
          console.log(clause);
          var doesItContain = studentAnswer.indexOf(clause) != -1;
          console.log(doesItContain);
          correct = correct && doesItContain;
        }

            var andContainsfive = answerkey.indexOf('ANDCONTAINSFIVE(');
                if (andContainsfive != -1){
                  var clause = answerkey.substring(andContainsfive+16, answerkey.indexOf(')', andContainsfive));
                  console.log(clause);
                  var doesItContain = studentAnswer.indexOf(clause) != -1;
                  console.log(doesItContain);
                  correct = correct && doesItContain;
                }

                var andContainsSix = answerkey.indexOf('ANDCONTAINSSIX(');
                    if (andContainsSix != -1){
                      var clause = answerkey.substring(andContainsSix+15, answerkey.indexOf(')', andContainsSix));
                      console.log(clause);
                      var doesItContain = studentAnswer.indexOf(clause) != -1;
                      console.log(doesItContain);
                      correct = correct && doesItContain;
                    }

                var andContainsSeven = answerkey.indexOf('ANDCONTAINSSEVEN(');
                    if (andContainsSeven != -1){
                      var clause = answerkey.substring(andContainsSeven+17, answerkey.indexOf(')', andContainsSeven));
                      console.log(clause);
                      var doesItContain = studentAnswer.indexOf(clause) != -1;
                      console.log(doesItContain);
                      correct = correct && doesItContain;
                    }
    //ONEOF(KIDNEY_HEART_LUNGS_EYE_STOMACH_LIVER)
    var oneof = answerkey.indexOf('ONEOF(');
    if (oneof != -1){
      var clause = answerkey.substring(oneof+6, answerkey.indexOf(')', oneof)).split('_');
      console.log(clause);
      var doesItContain = false;
      for(var i=0; i<clause.length; i++){
        if(studentAnswer.indexOf(clause[i]) != -1) {
          doesItContain = true;
        }
      }
      console.log(doesItContain);
      if(oneof == 0) {
        //only checking oneof
        correct = doesItContain;
      } else {
        //previous clauses
        correct = correct && doesItContain;
      }
    }

    //TWOOF(INCREASING ATOMIC MASS_NO NOBLE GASES_GAPS_SEPARATE BLOCK)
    var twoof = answerkey.indexOf('TWOOF(');
        if (twoof != -1){
          var clause = answerkey.substring(twoof+6, answerkey.indexOf(')', twoof)).split('_');
          console.log(clause);
          var doesItContain = 0;
          for(var i=0; i<clause.length; i++){
            if(studentAnswer.indexOf(clause[i]) != -1) {
              doesItContain = doesItContain + 1;
            }
          }
          console.log(doesItContain);
          correct = (doesItContain > 1);
        }

    //ORDER(CHLOROPLAST,VACUOLE,CELL WALL)
    var order = answerkey.indexOf('ORDER(');
        if (order != -1){
          var clause = answerkey.substring(order+6, answerkey.indexOf(')', order)).split(',');
          console.log(clause);
          var doesItContain = false;
          var conditionsMet = true;
          var ensureOrderlastStuAnsIndex = -1;
          for(var i=0; i<clause.length; i++){
            var stuAnsIndex = studentAnswer.indexOf(clause[i]);
            if(stuAnsIndex != -1 && (stuAnsIndex > ensureOrderlastStuAnsIndex)) {
              doesItContain = true;
              ensureOrderlastStuAnsIndex = stuAnsIndex;
            } else {
              conditionsMet = false;
            }
          }
          console.log('doesItContain' + doesItContain);
          console.log('conditionsMet' + conditionsMet);
          correct = doesItContain && conditionsMet;
        }

    var requiresAnyText = answerkey.indexOf('SOMETHING()');
    if (requiresAnyText != -1){
      if (studentAnswer.length > 0) {
        correct = true;
      }
    }

    var andContainsOR = answerkey.indexOf('ANDCONTAINSOR(');
    if (andContainsOR != -1){
        var clause = answerkey.substring(andContainsOR+14, answerkey.indexOf(')', andContainsOR)).split('_');
        var value1 = clause[0];
        var value2 = clause[1];
        console.log(clause);
        var doesItContainValue1 = studentAnswer.indexOf(clause[0]) != -1;
        var doesItContainValue2 = studentAnswer.indexOf(clause[1]) != -1;
        var doesItContainOr = (doesItContainValue1 + doesItContainValue2) > 0;
        console.log(doesItContainOr);
        correct = correct && doesItContainOr;
    }
  }


  answerkey = true;//this is true as question truth
  answerselected = correct;

  }

  if(answerkey == answerselected) {
    score++;
    gameanswer.textContent = 'Well Done. ' + scoreMsg;
    gameanswer.style.background = 'green';

    var nextq = document.createElement("a");
    nextq.href = nextmethod;
    nextq.textContent = String.fromCodePoint('9193');
    nextq.className += 'gamebutton';
    gameanswer.appendChild(nextq);
  } else {
    gameanswer.textContent = 'Try Again';
    gameanswer.style.background = 'red';
  }

}

function circleOfFifthsGame() {
  clearGameSpace();
  loadedGame = 'Circle';
  var gamemain = document.getElementById('gamemain');
  var gameanswers = document.getElementById('gameanswers');
  //var gameanswer = document.getElementById('gameanswer');

  //need a random 0-26     27
  var randomquestion = Math.floor(Math.random() * 27);

  var qtoggle = false;
  var circlekey = circle[randomquestion]['key'];
  if(circlekey.indexOf('_TOGGLE') != -1) {
    qtoggle = true;
    circlekey = circlekey.substring(0,circlekey.indexOf('_'));
  }

  var circlequestion = document.createElement("div");
  circlequestion.textContent = 'The key of ' + circlekey + ' has ?' ;
  var circleanswer = circle[randomquestion]['sign'];
  var answeroptions = [circle[randomquestion].sign, ...circle[randomquestion].twowrong.split(',')].sort();

  if(qtoggle) {
    var plural = ((circle[randomquestion]['sign'].indexOf('sharps') != -1) || (circle[randomquestion]['sign'].indexOf('flats') != -1));
    var singorplu = plural ? 'are they?' : 'is it?';
    circlequestion.textContent = 'The key of ' + circlekey + ' has ' +
       circle[randomquestion]['sign'] + '. What ' + singorplu;
    circleanswer = circle[randomquestion]['flatsharp'];
    answeroptions = [circle[randomquestion].flatsharp, ...circle[randomquestion].twowrong.split(',')].sort();
  }

  //{'key':'F', 'qtoggle':'true', 'sign': '1 flat', 'flatsharp': 'Bb', 'twowrong': 'Eb,Ab'}];


    gamemain.appendChild(circlequestion);





      for (var i=0; i<3; i++) {
        var cbutton = document.createElement("button");
        cbutton.className = 'answerbuttons';
        //cbutton.id = 'relatives
        cbutton.type = 'button';
        cbutton.textContent = answeroptions[i];
        var ansmethod = 'javascript:checkAnswer("' + circleanswer + '", "' + answeroptions[i] + '","javascript:circleOfFifthsGame()");';
        cbutton.setAttribute('onclick',ansmethod);
        gameanswers.appendChild(cbutton);
      }

      var reentry = "javascript:circleOfFifthsGame()";
        var skipmethod = 'javascript:skip("' + reentry + '");';
        addSkipButton(skipmethod, gameanswers);

  showHelp();


}

function showHelp() {
  var gamehelp = document.getElementById('gamehelp');
  gamehelp.classList.remove('gamehelphidden');
  gamehelp.className = 'gamebutton';
  //  gamehelp.setAttribute('onclick', function help(){
  //    if(this.textContent == '&#129300;') {
  //      this.textContent += 'If you are in a major key move down 3 semitones to find the relative minor. If you are in a minor key move up 3 semitones to find the relative major.';
  //    } else {
  //      this.textContent = '&#129300;';
  //    }
  //  });

  //gamehelp.style.display = '';
  //mag glass 128269
}

function help(){
    var helpdetail = document.getElementById('helpdetail');
//    if(document.getElementById('gamemain').innerHTML.indexOf('relative') != -1){
//        if(gamehelp.textContent.length < 3) {
//          gamehelp.textContent = 'If you are in a major key move down 3 semitones to find the relative minor. If you are in a minor key move up 3 semitones to find the relative major.';
//        }
//    }
        var schoolfulllist = [];
        var gameSwitch = loadedGame;

        if(loadedGame.startsWith('School')) {
          var loadedGameInfo = loadedGame.split('_');
          gameSwitch = loadedGameInfo[0];
          //var schoollist =[{'chemistry': chemistryfull}, {'biology': biologyfull}];
          schoolfulllist = schoollist[loadedGameInfo[1]];
        }


        switch(gameSwitch) {
          case 'Circle':
            if(helpdetail.innerText.length == 0) {
              if(document.getElementById('gamemain').innerHTML.indexOf('flat') != -1){
                helpdetail.textContent = " Order of Flats: B E A D G C F";
              } else if(document.getElementById('gamemain').innerHTML.indexOf('sharp') != -1){
                helpdetail.textContent = " Order of Sharps: F C G D A E B";
              } else if(document.getElementById('gamemain').innerHTML.indexOf('b has ?') != -1){
                helpdetail.textContent = ' The order in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('F has ?') != -1){
                helpdetail.textContent = ' The order of flats in circle of fifths is C F Bb Eb Ab Db Gb Cb, try making up a mnemonic to remember';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('C has ?') != -1){
                helpdetail.textContent = ' The key of C has no sharps or flats';
              } else if(document.getElementById('gamemain').innerHTML.indexOf('has ?') != -1){
                helpdetail.textContent = ' The order of sharps in circle of fifths is C G D A E B F# C#, try making up a mnemonic to remember';
              }
            } else {
              helpdetail.textContent = '';
            }
            break;
          case 'Relatives':
            if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Minor') != -1)) {
              helpdetail.textContent = ' If you are in a minor key move up 3 semitones to find the relative major.';
            } else if((helpdetail.innerText.length == 0) && (document.getElementById('gamemain').innerHTML.indexOf('Major') != -1)) {
              helpdetail.textContent = ' If you are in a major key move down 3 semitones to find the relative minor.';
            } else {
              helpdetail.textContent = '';
            }
            break;
          case 'School':
              if(helpdetail.innerText.length == 0) {
                schoolfulllist.forEach(question => {
                  if(document.getElementById('gamemain').innerHTML.indexOf(question.question) !=-1 ) {
                    helpdetail.textContent = question.help;
                  } else if ((document.getElementById('gamemain').innerHTML.indexOf('To stop it falling over') !=-1 ) && (question.question.indexOf('PSTART1To stop it falling over') !=-1)) {
                    helpdetail.textContent = question.help;
                  }
                });
              } else {
                helpdetail.textContent = '';
              }
              break;
          default:
              //gamehelp.href = 'javascript:help();';
              //gamehelp.innerText = String.fromCodePoint('129300');
        }
//        else {
//          gamehelp.innerText = '&#129300;';
//        }

}

function clearGameSpace() {
  document.getElementById('gameselection').style.display="none";
  var gamemain = document.getElementById('gamemain');
  gamemain.innerHTML = '';

  var gameanswers = document.getElementById('gameanswers');
  gameanswers.innerHTML = '';

  var gameanswer = document.getElementById('gameanswer');
  gameanswer.innerHTML = '';
  gameanswer.style.background = 'lightgoldenrodyellow';

  var helpdetail = document.getElementById('helpdetail');
  //gamehelp.href = 'javascript:help();';
  helpdetail.textContent = '';

  if(scoreMsg.length != 0) {
    resetScore();
  }

}

function schoolGame(subject, qlist) {
  clearGameSpace();
  loadedGame = 'School_' + subject;

  var gamemain = document.getElementById('gamemain');
  var gameanswers = document.getElementById('gameanswers');

    // random or ordered
    var index = 0;
    if (subject.indexOf('spanish') == -1){
      index = Math.floor(Math.random() * subjectlist[subject].length);
    }

    var schoolQuestion = document.createElement("div");

        if(subjectlist[subject][index]['multiquestion'] == undefined) {
          schoolQuestion.textContent = subjectlist[subject][index]['question'];

        } else {
          // {'question':"PSTART1To stop it falling over, the Bunsen burner has a heavy INSERTANSWER1PSTART2. Gas comes into the Bunsen burner through a INSERTANSWER2", 'answer': 'INSERTANSWER1(BASE)INSERTANSWER2(RUBBER TUBE)', 'help': 'Fill in the missing words', 'img': 'resources/images/games/school/chemistry/bunsen.png', 'multiquestion': 2},
          var qtext = subjectlist[subject][index]['question'];
          for(var t=1; t<= subjectlist[subject][index]['multiquestion']; t++) {
            var p = document.createElement("p");

            var tagStart = 'PSTART' + t;
            var indexTagStart = qtext.indexOf(tagStart) + 7;

            var tagEnd = 'INSERTANSWER' + t;
            var indexTagEnd = qtext.indexOf(tagEnd);

            p.textContent = qtext.substring(indexTagStart, indexTagEnd);
            schoolQuestion.appendChild(p);

            var schoolText = document.createElement("input");
            schoolText.type = 'text';
            schoolText.id = 'schoolText' + t;
            schoolQuestion.appendChild(schoolText);
          }
        }

    gamemain.appendChild(schoolQuestion);

    //optional image
    if(subjectlist[subject][index]['img'] != undefined) {
        var img = document.createElement('img');
        img.src = subjectlist[subject][index]['img'];
        img.className = 'notationimages';
        gamemain.appendChild(img);
    }


    if(subjectlist[subject][index]['multiquestion'] == undefined) {
        schoolText = document.createElement("input");
        schoolText.type = 'text';
        schoolText.id = 'schoolText';
        gamemain.appendChild(schoolText);

        var schoolAnswer = document.getElementById('schoolText').value;
    }

    var checkStuAnswer = subjectlist[subject][index]['answer'] ;

    var reentry = "javascript:schoolGame('" + subject + "','" + qlist + "')";
    //reentry = 'javascript:test()';

    //"javascript:checkAnswer();"

    //"javascript:checkAnswer(\"CONTAINS(CONTINUITY)\", \"School_schistory\",\"javascript:schoolGame(\"schistory\",[object Object],[object Object],[object Object],[object Object])\");"

    //for (var i=0; i<1; i++) {
      var qbutton = document.createElement("button");
      qbutton.className = 'answerbuttons';
      //qbutton.id = 'relatives
      qbutton.type = 'button';
      qbutton.textContent = 'Check Answer';
      //var ansmethod = 'javascript:checkAnswer("' + checkStuAnswer + '", "' + loadedGame + '",' + reentry + ');';
      var ansmethod = 'javascript:checkAnswer("' + checkStuAnswer + '", "' + loadedGame + '","' + reentry + '");';
      qbutton.setAttribute('onclick',ansmethod);
      gameanswers.appendChild(qbutton);
    //}

    var skipmethod = 'javascript:skip("' + reentry + '");';
    addSkipButton(skipmethod, gameanswers);

    //remove item
    subjectlist[subject].splice(index, 1);
    if(subjectlist[subject].length == 0) {
      //repopulate array
      schoollist[subject].forEach(question => {
        subjectlist[subject].push(question);
      });

      scoreMsg = 'You have scored ' + (score + 1) + ' out of ' + schoollist[subject].length + ' questions ';
    }

    showHelp();
}

function addSkipButton(skipMethod, areaElement) {
  var skipButton = document.createElement("button");
  skipButton.className = 'answerbuttons';
  //skipButton.id = 'relatives
  skipButton.type = 'button';
  skipButton.textContent = 'Skip';
  skipButton.setAttribute('onclick', skipMethod);
  areaElement.appendChild(skipButton);
}


function skip(reentry) {
  var maxSkips = 3;
  if (skips < maxSkips) {
    skips++;
    window.location = reentry;
  } else {
    var gameanswer = document.getElementById('gameanswer');
    gameanswer.textContent = 'You can only skip ' + maxSkips + ' questions';
  }
}