import shuffle from "../../../utils/GroovyShuffle";

export const iamqs = shuffle([
  {
    question: "What is a proper definition of an IAM role?",
    choices: [
      {
        choice: "IAM Users in multiple User Groups",
      },
      {
        choice:
          "An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service",
      },
      {
        choice: "An IAM entity that defines a password policy for IAM Users",
      },
      {
        choice: "Permissions assigned to IAM Users to perform actions",
      },
    ],
    answer: "1",
    help: "An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service",
  },
]);
