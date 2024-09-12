import { shuffleRel } from "../../../utils/GroovyShuffle";
import { RelativeType } from "../Relatives";

export const relatives: RelativeType[] = shuffleRel([
  { key: "Ab Major", rel: "F Minor" },
  { key: "A Major", rel: "F# Minor" },
  { key: "Bb Major", rel: "G Minor" },
  { key: "B Major", rel: "G# Minor" },
  { key: "C Major", rel: "A Minor" },
  { key: "Db Major", rel: "Bb Minor" },
  { key: "D Major", rel: "B Minor" },
  { key: "Eb Major", rel: "C Minor" },
  { key: "E Major", rel: "C# Minor" },
  { key: "F Major", rel: "D Minor" },
  { key: "Gb Major", rel: "Eb Minor" },
  { key: "G Major", rel: "E Minor" },
  { key: "F Minor", rel: "Ab Major" },
  { key: "F# Minor", rel: "A Major" },
  { key: "G Minor", rel: "Bb Major" },
  { key: "G# Minor", rel: "B Major" },
  { key: "A Minor", rel: "C Major" },
  { key: "Bb Minor", rel: "Db Major" },
  { key: "B Minor", rel: "D Major" },
  { key: "C Minor", rel: "Eb Major" },
  { key: "C# Minor", rel: "E Major" },
  { key: "D Minor", rel: "F Major" },
  { key: "Eb Minor", rel: "Gb Major" },
  { key: "E Minor", rel: "G Major" },
]);
