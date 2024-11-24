export default function AnswerChecker(answer: string, answerkey: string) {
  if (!answer || answer.length == -1) return false;
  const studentAnswer = answer.toUpperCase();
  let correct = false;

  const is = answerkey.indexOf("IS(");
  if (is != -1) {
    correct =
      studentAnswer.trim() ==
      answerkey.substring(is + 3, answerkey.indexOf(")"));
  }

  const contains = answerkey.indexOf("CONTAINS(");
  if (contains != -1) {
    correct =
      studentAnswer.indexOf(
        answerkey.substring(contains + 9, answerkey.indexOf(")"))
      ) != -1;
  }

  const andContains = answerkey.indexOf("ANDCONTAINS(");
  if (andContains != -1) {
    const clause = answerkey.substring(
      andContains + 12,
      answerkey.indexOf(")", andContains)
    );
    correct = correct && studentAnswer.indexOf(clause) != -1;
  }

  const andContainsthree = answerkey.indexOf("ANDCONTAINSTHREE(");
  if (andContainsthree != -1) {
    const clause = answerkey.substring(
      andContainsthree + 17,
      answerkey.indexOf(")", andContainsthree)
    );
    correct = correct && studentAnswer.indexOf(clause) != -1;
  }

  const andContainsfour = answerkey.indexOf("ANDCONTAINSFOUR(");
  if (andContainsfour != -1) {
    const clause = answerkey.substring(
      andContainsfour + 16,
      answerkey.indexOf(")", andContainsfour)
    );
    correct = correct && studentAnswer.indexOf(clause) != -1;
  }

  const andContainsfive = answerkey.indexOf("ANDCONTAINSFIVE(");
  if (andContainsfive != -1) {
    const clause = answerkey.substring(
      andContainsfive + 16,
      answerkey.indexOf(")", andContainsfive)
    );
    correct = correct && studentAnswer.indexOf(clause) != -1;
  }

  const andContainsSix = answerkey.indexOf("ANDCONTAINSSIX(");
  if (andContainsSix != -1) {
    const clause = answerkey.substring(
      andContainsSix + 15,
      answerkey.indexOf(")", andContainsSix)
    );
    const doesItContain = studentAnswer.indexOf(clause) != -1;
    correct = correct && doesItContain;
  }

  const andContainsSeven = answerkey.indexOf("ANDCONTAINSSEVEN(");
  if (andContainsSeven != -1) {
    const clause = answerkey.substring(
      andContainsSeven + 17,
      answerkey.indexOf(")", andContainsSeven)
    );
    const doesItContain = studentAnswer.indexOf(clause) != -1;
    correct = correct && doesItContain;
  }

  const oneof = answerkey.indexOf("ONEOF(");
  if (oneof != -1) {
    const clause = answerkey
      .substring(oneof + 6, answerkey.indexOf(")", oneof))
      .split("_");
    let doesItContain = false;
    for (let i = 0; i < clause.length; i++) {
      if (studentAnswer.indexOf(clause[i]) != -1) {
        doesItContain = true;
      }
    }
    if (oneof == 0) {
      //only checking oneof
      correct = doesItContain;
    } else {
      //previous clauses
      correct = correct && doesItContain;
    }
  }

  //TWOOF(INCREASING ATOMIC MASS_NO NOBLE GASES_GAPS_SEPARATE BLOCK)
  const twoof = answerkey.indexOf("TWOOF(");
  if (twoof != -1) {
    const clause = answerkey
      .substring(twoof + 6, answerkey.indexOf(")", twoof))
      .split("_");
    let doesItContain = 0;
    for (let i = 0; i < clause.length; i++) {
      if (studentAnswer.indexOf(clause[i]) != -1) {
        doesItContain = doesItContain + 1;
      }
    }
    correct = doesItContain > 1;
  }

  //ORDER(CHLOROPLAST,VACUOLE,CELL WALL)
  const order = answerkey.indexOf("ORDER(");
  if (order != -1) {
    const clause = answerkey
      .substring(order + 6, answerkey.indexOf(")", order))
      .split(",");
    let doesItContain = false;
    let conditionsMet = true;
    let ensureOrderlastStuAnsIndex = -1;
    for (let i = 0; i < clause.length; i++) {
      const stuAnsIndex = studentAnswer.indexOf(clause[i]);
      if (stuAnsIndex != -1 && stuAnsIndex > ensureOrderlastStuAnsIndex) {
        doesItContain = true;
        ensureOrderlastStuAnsIndex = stuAnsIndex;
      } else {
        conditionsMet = false;
      }
    }
    // console.log("doesItContain" + doesItContain);
    // console.log("conditionsMet" + conditionsMet);
    correct = doesItContain && conditionsMet;
  }

  const requiresAnyText = answerkey.indexOf("SOMETHING()");
  if (requiresAnyText != -1) {
    if (studentAnswer.length > 0) {
      correct = true;
    }
  }

  const andContainsOR = answerkey.indexOf("ANDCONTAINSOR(");
  if (andContainsOR != -1) {
    const clause = answerkey
      .substring(andContainsOR + 14, answerkey.indexOf(")", andContainsOR))
      .split("_");
    const doesItContainValue1 = studentAnswer.indexOf(clause[0]) != -1 ? 1 : 0;
    const doesItContainValue2 = studentAnswer.indexOf(clause[1]) != -1 ? 1 : 0;
    const doesItContainOr = doesItContainValue1 + doesItContainValue2 > 0;
    correct = correct && doesItContainOr;
  }

  return correct;
}
