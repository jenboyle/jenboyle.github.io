import { shuffleCircle } from "../../../utils/GroovyShuffle";

export type circleType = {
  key: string;
  toggle?: boolean;
  sign: string;
  options: string;
  flatsharp?: string;
};

export const circle: circleType[] = shuffleCircle([
  {
    key: "C",
    sign: "no sharps or flats",
    options: "1 sharp,1 flat,no sharps or flats",
  },
  { key: "F", sign: "1 flat", options: "1 flat,3 flats,1 sharp" },
  {
    key: "F",
    toggle: true,
    sign: "1 flat",
    flatsharp: "Bb",
    options: "Bb,Eb,Ab",
  },
  { key: "G", sign: "1 sharp", options: "no sharps or flats,1 sharp,3 flats" },
  {
    key: "G",
    toggle: true,
    sign: "1 sharp",
    flatsharp: "F#",
    options: "F#,C#,G#",
  },
  {
    key: "A",
    sign: "3 sharps",
    options: "no sharps or flats,1 sharp,3 sharps",
  },
  {
    key: "A",
    toggle: true,
    sign: "3 sharps",
    flatsharp: "F# C# G#",
    options: "F# C# D#,F# G# A#,F# C# G#",
  },
  {
    key: "D",
    sign: "2 sharps",
    options: "no sharps or flats,1 sharp,2 sharps",
  },
  {
    key: "D",
    toggle: true,
    sign: "2 sharps",
    flatsharp: "F# C#",
    options: "C# G#,F# C#,F# G#",
  },
  {
    key: "E",
    sign: "4 sharps",
    options: "no sharps or flats,3 sharps,4 sharps",
  },
  {
    key: "E",
    toggle: true,
    sign: "4 sharps",
    flatsharp: "F# C# G# D#",
    options: "C# G# A# F#,F# G# C# E#,F# C# G# D#",
  },
  { key: "Eb", sign: "3 flats", options: "1 flat,2 flats,3 flats" },
  {
    key: "Eb",
    toggle: true,
    sign: "3 flats",
    flatsharp: "Bb Eb Ab",
    options: "Bb Eb Ab,Eb Ab Db,Bb Db Ab",
  },
  { key: "Bb", sign: "2 flats", options: "1 flat,2 flats,3 flats" },
  {
    key: "Bb",
    toggle: true,
    sign: "2 flats",
    flatsharp: "Bb Eb",
    options: "Bb Eb,Eb Ab,Bb Db",
  },
  { key: "Ab", sign: "4 flats", options: "1 flat,2 flats,4 flats" },
  {
    key: "Ab",
    toggle: true,
    sign: "4 flats",
    flatsharp: "Bb Eb Ab Db",
    options: "Eb Ab Cb Fb,Bb Eb Ab Db,Bb Db Gb Ab",
  },
  { key: "F#", sign: "6 sharps", options: "3 sharps,4 sharps,6 sharps" },
  {
    key: "F#",
    toggle: true,
    sign: "6 sharps",
    flatsharp: "F# C# G# D# A# E#",
    options: "F# C# G# D# E# B#,F# C# G# D# A# E#,B# E# A# D# C# G#",
  },
  { key: "Gb", sign: "6 flats", options: "3 flat,4 flats,6 flats" },
  {
    key: "Gb",
    toggle: true,
    sign: "6 flats",
    flatsharp: "Bb Eb Ab Db Gb Cb",
    options: "Bb Db Eb Ab Cb Fb,Bb Db Gb Ab Eb Fb,Bb Eb Ab Db Gb Cb",
  },
  { key: "B", sign: "5 sharps", options: "3 sharps,4 sharps,5 sharps" },
  {
    key: "B",
    toggle: true,
    sign: "5 sharps",
    flatsharp: "F# C# G# D# A#",
    options: "F# C# G# D# A#,C# G# D# E# B#,B# E# A# D# C#",
  },
  { key: "Db", sign: "5 flats", options: "3 flat,4 flats,5 flats" },
  {
    key: "Db",
    toggle: true,
    sign: "5 flats",
    flatsharp: "Bb Eb Ab Db Gb",
    options: "Bb Eb Ab Cb Fb,Bb Db Gb Eb Fb,Bb Eb Ab Db Gb",
  },
  { key: "C#", sign: "7 sharps", options: "1 sharps,5 sharps,7 sharps" },
  {
    key: "C#",
    toggle: true,
    sign: "7 sharps",
    flatsharp: "F# C# G# D# A# E# B#",
    options: "F# C# G# D# A# E# B# C,B# E# A# D# C# G# D#,F# C# G# D# A# E# B#",
  },
]);
