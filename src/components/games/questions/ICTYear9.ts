export const ictyear9qs = [
  {
    question: "What is a LAN",
    answer: "CONTAINS(LOCAL)ANDCONTAINS(AREA)ANDCONTAINSTHREE(NETWORK)",
    help: "Local Area Network: network connects computers and devices in a limited area eg home, office, campus to share resources like files and printers. Uses ethernet or wifi. Features - limited coverage, high data transfer speeds, resource sharings, more secure as private (control over access)",
  },
  {
    question: "What is a WAN",
    answer: "CONTAINS(WIDE)ANDCONTAINS(AREA)ANDCONTAINSTHREE(NETWORK)",
    help: "Wide Area Network: network connects devices across large geographic areas allowing LANs to communicate with each other. Internet is largest eg of WAN. Global connectivity and data exchange. Features - Broader reach, large amount users (high capacity), uses public carrier, resource sharing over large area",
  },
  {
    question: "What is a simple definition of a network",
    answer: "ONEOF(CONNECTED_DEVICES_SHARE_SHARING_RESOURCES)",
    help: "Devices connected so they can share resources",
  },
  {
    question: "What is a NIC",
    answer: "ONEOF(NETWORK INTERFACE CARD_NETWORK INTERFACE CONTROLLER)",
    help: "Network interface card OR network interface controller. NIC allows device to connect to the network. (The connection can be wired or wireless)",
    img: "./images/games/school/ict/nic.png",
  },
  {
    question: "What is a Router",
    answer: "CONTAINS(NETWORK)",
    help: "To connect your network to another network. Eg network in another building / connecting your home network to the internet. ANOTHER DESCRIPTION: Device that connects 2 or more networks managing traffic between and allowing multiple devices to use same internet connection",
    img: "./images/games/school/ict/router.png",
  },
  {
    question: "When would you use a network cable?",
    answer: "CONTAINS(CONNECT)",
    help: "To connect one network device to another or connect computers to share printers. Coaxial cable, optical fibre cable, twisted pair cables",
    img: "./images/games/school/ict/cable.png",
  },
  {
    question: "What is a switch?",
    answer: "CONTAINS(ROUTER)",
    help: "A router uses a switch to let devices on LAN talk to each other",
    img: "./images/games/school/ict/switch.png",
  },
  {
    question:
      "Network topology: Ring topology, data flows from server in ___ direction?",
    answer: "IS(ONE)",
    help: "One",
    img: "./images/games/school/ict/ring.png",
  },
  {
    question:
      "Network topology: Ring topology, cable pulled anywhere in network = NO pc will work as data cannot flow around ______?",
    answer: "ONEOF(SERVER_NETWORK)",
    help: "Server",
    img: "./images/games/school/ict/ring.png",
  },
  {
    question:
      "Network topology: Bus topology, information leaves server (like a bus) when reaching 'junction' goes to each PC. At the end of each network there are 2 ___________. These collect stray information like a sponge?",
    answer: "IS(TERMINATORS)",
    help: "Terminators",
    img: "./images/games/school/ict/bus.png",
  },
  {
    question:
      "Network topology: Bus topology, if cable removed only that pc stops working, the rest are ok. The only way to disrupt the whole network is to take out main cable from the ______ to junction?",
    answer: "IS(SERVER)",
    help: "Server",
    img: "./images/games/school/ict/bus.png",
  },
  {
    question:
      "Network topology: Star topology, all pcs connected to hub. The ___ is a piece of hardware?",
    answer: "IS(HUB)",
    help: "Hub",
    img: "./images/games/school/ict/star.png",
  },
  {
    question:
      "Network topology: Star topology, server supplies data to hub which feeds information to each pc. Cable at pc pulled only that pc affected, rest network continues unless cable between server and ___ disconnected?",
    answer: "IS(HUB)",
    help: "Hub",
    img: "./images/games/school/ict/star.png",
  },
  {
    question: "Name an advantage of a computer network.",
    answer:
      "ONEOF(SHARING_HARDWARE_MONEY_DOCUMENTS_FILES_SHARED_ACCESS_DEVICE_NETWORK_BACKUP_SOFTWARE_SECURE)",
    help: "Sharing hardware saves money, documents and files easily shared, you can access files from any device on the network, backups can be created easily as all files on the central server, software can be installed easily across the whole network, files are secure as you need username and password to view",
  },
  {
    question: "Name an disadvantage of a computer network.",
    answer: "ONEOF(EXPENSIVE_DEAR_SKILLED_BREAK_STOPS_HACKERS_VIRUS_SLOW)",
    help: "Networks can be expensive to set up, if the file server breaks down the whole network stops working, large computer networks need skilled people to manage them, hackers might get access to the network, computer viruses might be installed on the network, if a lot of people use network at once it can become slow",
  },
  {
    question:
      "What is your understanding of health and safety at the computer.",
    answer:
      "ONEOF(BREAK_POSTURE_EYE_CHAIR_BACK_NECK_PAIN_HEADACHE_ORGANISE_WIRES)",
    help: "Examples: It is good to take 5-10 minute breaks every 50-60 minutes to prevent eye strain and headache. Organise workloads to avoid overuse injures of arms and hands. Maintain a good posture with a good chair at the right height to reduce back, neck, shoulder pain. Have computer near socket to avoid tripping on trailing wires.",
    img: "./images/games/school/ict/health.png",
  },
  {
    question: "Event blocks in scratch define when _____ to be run.",
    answer: "IS(SCRIPT)",
    help: "Script",
  },
  {
    question:
      "An example of a control block in scratch is a 'if then ____' block.",
    answer: "IS(ELSE)",
    help: "Else",
  },
  {
    question: "A global variable in scratch is choose for ___ sprites.",
    answer: "IS(ALL)",
    help: "All",
  },
  {
    question: "A local variable in scratch is choose for this ______ only.",
    answer: "IS(SPRITE)",
    help: "Sprite",
  },
  {
    question: "What are the main features of gaming applications.",
    answer: "ONEOF(PUZZLE_SOLVE_CONTROL_CHARACTERS_TASK_NEXT)",
    help: "Solve puzzles, control characters, set a task to complete or solve, complete task move onto the next",
    img: "./images/games/school/ict/game.png",
  },
  {
    question: "How can gaming applications help in education?",
    answer:
      "ONEOF(LEARN_INTERESTING_ATTENTION_EXCITING_INSTANT_FEEDBACK_SCORES_TEXT_SOUNDS_LEVEL_PACE_ENGAG)",
    help: "Learn in interesting format, keep attention, instant feedback scores, sounds, text, levels of difficulty, learners of all abilities, set own pace, engaging",
    img: "./images/games/school/ict/game.png",
  },
  {
    question: "What is computer crime?",
    answer:
      "ONEOF(MISUSE_HACKER_DELETE_COMPUTER_VIRUS_PIRACY_ILLEGAL_COPY_COPIES_MALWARE_HARM_WORM)",
    help: "Misuse of data, hackers break in and delete (computer misuse act). Viruses infect computers (virus scan). Software piracy illegal copies of software (copyright law). Malware = malicious software designed to harm systems eg virus, worm, trojan horse, spyware, ransomware",
  },
  {
    question: "What is Phishing?",
    answer:
      "ONEOF(EMAIL_SCAM_URGENT_URGENCY_LINKS_MONEY_BAD_SPELLING_NAME_FROM_SENDER)",
    help: "Phishing is an email scam trying to get you to click links with urgency, asking for money or alerting you to unusual activity. Sometimes they have bad spellings. They may say Dear customer if they don't know your name. The sender from email will probably not look right.",
  },
  {
    question: "What is Smishing?",
    answer: "ONEOF(TEXT_PHISHING)",
    help: "Text phishing",
  },

  {
    question: "Copyright Law, Copyright Designs and Patents Act ____?",
    answer: "IS(1988)",
    help: "1988",
  },
  {
    question:
      "Copyright Law, Copyright Designs and Patents Act 1988, a person creates something ie picture, drawing, video, tv, film, book, article, game. They ___ it?",
    answer: "IS(OWN)",
    help: "Own",
  },
  {
    question:
      "Copyright Law, Copyright Designs and Patents Act 1988, it is illegal to make ______ of the material?",
    answer: "IS(COPIES)",
    help: "Copies",
  },
  {
    question:
      "Copyright Law, Copyright Designs and Patents Act 1988, it is illegal to publish and ____ it without permission?",
    answer: "IS(SELL)",
    help: "Sell",
  },
  {
    question:
      "Copyright Law, Copyright Designs and Patents Act 1988, it is illegal to __________ it to other people?",
    answer: "IS(DISTRIBUTE)",
    help: "Distribute",
  },
  {
    question: "Computer ______ Act 1990?",
    answer: "IS(MISUSE)",
    help: "Misuse",
  },
  {
    question:
      "Computer Misuse Act 1990, to discourage people from using computers for _______ purposes?",
    answer: "IS(ILLEGAL)",
    help: "Illegal",
  },
  {
    question:
      "Computer Misuse Act 1990, illegal to ______ data stored on computer unless you have PERMISSION?",
    answer: "IS(ACCESS)",
    help: "Access",
  },
  {
    question:
      "Computer Misuse Act 1990, illegal to access data on computer to use the material to commit further illegal activity such as _____ or blackmail?",
    answer: "IS(FRAUD)",
    help: "Fraud",
  },
  {
    question:
      "Computer Misuse Act 1990, illegal to make _______ to data on computer when you do not have permission?",
    answer: "IS(CHANGES)",
    help: "Changes",
  },
  {
    question:
      "Computer Misuse Act 1990, illegal to make changes to data on computer when you do not have permission. This includes installing _____ or malware to damage change way computer works?",
    answer: "IS(VIRUS)",
    help: "Virus",
  },
  {
    question:
      "Computer Misuse Act 1990, breaking this law is max £5000 or years in ______. If computer is not well protected someone could access by accident, has to be intentional to break the law.",
    answer: "IS(PRISON)",
    help: "Prison",
    img: "./images/games/school/ict/prison.png",
  },
  {
    question: "What is Identity theft?",
    answer: "ONEOF(STEAL_APPLY_LOAN_JOB_YOU)",
    help: "If criminals can access your personal data they can steal your identity, they could apply for a job, a bank account or loan pretending to be you",
    img: "./images/games/school/ict/identity.png",
  },
  {
    question: "How to minimize chance of Identity theft?",
    answer:
      "ONEOF(SHARE_PERSONAL_DETAILS_ONLINE_AGE_DATE_PICTURE_LOCATION_PHOTO_SHARINGADDRESS_PHONE_PASSWORD_PUBLIC_PRIVATE_FRIEND)",
    help: "Do not share personal details online birthdays, pictures, locations, age. Photos can include a geotag with GPS coordinates. Turn 'location sharing' off when posting online. Do not have date of birth, address, phone number in profile. No password clues - comments of favourite movie or pet. Privacy settings - do not add non friends, do not have public setting ",
    img: "./images/games/school/ict/identity.png",
  },
];
