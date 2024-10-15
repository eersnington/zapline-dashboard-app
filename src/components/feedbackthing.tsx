/* eslint-disable @typescript-eslint/no-namespace */
"use client";
import React, { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "feedback-thing": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "project-id": string;
      };
    }
  }
}

interface FeedbackWidgetProps {
  projectId: string;
}

const FeedbackThing: React.FC<FeedbackWidgetProps> = ({ projectId }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://feedback-thing.vercel.app//api/widget?projectId=d3baab1d-56fc-4742-acb7-aecbbc52ee0e`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [projectId]);

  if (!scriptLoaded) {
    return null; // or a loading indicator
  }

  return <feedback-thing project-id={projectId} />;
};

export default FeedbackThing;
