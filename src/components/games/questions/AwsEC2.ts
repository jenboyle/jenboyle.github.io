import shuffle from "../../../utils/GroovyShuffle";

export const ec2qs = shuffle([
  {
    question:
      "Which EC2 Purchasing Option can provide you the biggest discount, but it is not suitable for critical jobs or databases?",
    choices: [
      {
        choice: "Convertible Reserved Instances",
      },
      {
        choice: "Dedicated Hosts",
      },
      {
        choice: "Spot Instances",
      },
    ],
    answer: "2",
    help: "Spot Instances",
  },
]);
