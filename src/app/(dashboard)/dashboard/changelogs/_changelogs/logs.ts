interface Changelog {
  version: string;
  date: string;
  message: string;
  changes: {
    type: "added" | "changed" | "fixed" | "coming soon";
    description: string;
  }[];
}

export const changelogs: Changelog[] = [
  //   {
  //     version: "1.1.0",
  //     date: "23rd Sept, 2024",
  //     message:
  //       "Thank you guys who showed support yesterday after my launch on reddit! I've been taking all your feedback and I'm excited to share the latest updates.",
  //     changes: [
  //       { type: "added", description: "Email notifications for new feedback" },
  //       { type: "fixed", description: "Issue with feedback sorting" },
  //     ],
  //   },
  {
    version: "1.0.1",
    date: "22rd Sept, 2024",
    message:
      "Thank you guys who showed support today! I've been taking all your feedback and in the next update, which will most likely be pushed tomorrow, I'll bring in some changes.",
    changes: [
      {
        type: "added",
        description:
          "Changed the email address to team@feedbackthing.pro and support@feedbackthing.pro",
      },
      {
        type: "coming soon",
        description: "Let users adjust the position of the widget.",
      },
      {
        type: "coming soon",
        description: "User's client details when they make a submission.",
      },
      {
        type: "coming soon",
        description:
          "The screenshot button will be available for all the feedback types, not just for bug reports.",
      },
      {
        type: "coming soon",
        description: "Fixing CSS inheritance issues on the feedback widget.",
      },
    ],
  },
];
