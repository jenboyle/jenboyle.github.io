//import { TheoryType } from "../components/basstheory/BassTheoryContent";
import { circleType } from "../components/games/questions/Circle";
import { RelativeType } from "../components/games/Relatives";
import { QuestionType } from "../components/games/StandardGame";

export function shuffleCircle(array: circleType[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function shuffle(array: QuestionType[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function shuffleRel(array: RelativeType[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// let curr = array.length;
// while(curr != 0) {
//     let ran = Math.floor(Math.random() * curr);
//     curr--;

//     [array[curr], array[ran]] = [array[ran], array[curr]];

// }
//}