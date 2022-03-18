import React from "react";
import { useState } from "react";
import { ChangeType } from "../components/ChangeType";
import { RevealAnswer } from "../components/RevealAnswer";
import { StartAttempt } from "../components/StartAttempt";

/**
// Just an example, many other ways to do this!
export function ShowHideTasks(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  return (
      <div>
          {visible && (
              <div>
                RevealAnswer , StartAttempt , ChangeType
              </div>
          )}
          <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
      </div>
  );
}

// App.tsx
export function App(): JSX.Element {
  return <div>
    ... Quizzer component ...
    <ShowHideTasks></ShowHideTasks>
  </div>;
}
**/
