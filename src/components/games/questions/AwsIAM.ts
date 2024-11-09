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
  {
    question: "Which of the following is an IAM Security Tool?",
    choices: [
      {
        choice: "IAM Credentials Report",
      },
      {
        choice: "IAM Root Account Manager",
      },
      {
        choice: "IAM Services Report",
      },
      {
        choice: "IAM Security Advisor",
      },
    ],
    answer: "0",
    help: "IAM Credentials Report",
  },
  {
    question: "Which answer is incorrect regarding IAM Users?",
    choices: [
      {
        choice: "IAM Users can belong to multiple User Groups",
      },
      {
        choice: "IAM Users don't have to belong to a User Group",
      },
      {
        choice: "IAM Policies can be attached directly to IAM Users",
      },
      {
        choice: "IAM Users access AWS services using root account credentials",
      },
    ],
    answer: "3",
    help: "IAM Users access AWS services using root account credentials",
  },
  {
    question: "Which of the following is an IAM best practice?",
    choices: [
      {
        choice: "Create several IAM Users for one physical person",
      },
      {
        choice:
          "Share your AWS account credentials with your colleague, so he can perform a task for you",
      },
      {
        choice: "Don't use the root user account",
      },
      {
        choice: "Do not enable MFA for easier access",
      },
    ],
    answer: "2",
    help: "Don't use the root user account",
  },
  {
    question: "What are IAM Policies?",
    choices: [
      {
        choice:
          "A set of policies defines how AWS accounts interact with each other",
      },
      {
        choice:
          "JSON documents that define a set of permissions for making requests to AWS services, and can be used by IAM Users, User Groups, and IAM Roles",
      },
      {
        choice: "A set of policies that define a password for IAM Users",
      },
      {
        choice:
          "A set of policies defined by AWS that show how customers interact with AWS",
      },
    ],
    answer: "1",
    help: "Don't use the root user account",
  },
  {
    question: "Which principle should you apply regarding IAM Permissions?",
    choices: [
      {
        choice: "Grant least privilege",
      },
      {
        choice: "Grant most privilege",
      },
      {
        choice: "Grant more permissions if your employee asks you to",
      },
      {
        choice: "Restrict root account permissions",
      },
    ],
    answer: "0",
    help: "Grant least privilege",
  },
  {
    question: "What should you do to increase your root account security?",
    choices: [
      {
        choice: "Remove permissions from the root account",
      },
      {
        choice:
          "Only access AWS services through AWS Command Line Interface (CLI)",
      },
      {
        choice: "Enable Multi-Factor Authentication (MFA)",
      },
      {
        choice:
          "Don't create IAM Users, only access your AWS account using the root account",
      },
    ],
    answer: "2",
    help: "Enable Multi-Factor Authentication (MFA)",
  },
  {
    question: "IAM User Groups can contain IAM Users and other User Groups",
    choices: [
      {
        choice: "True",
      },
      {
        choice: "False",
      },
    ],
    answer: "1",
    help: "False",
  },
]);
