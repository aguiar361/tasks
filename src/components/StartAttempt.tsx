import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [progress, checkProgress] = useState<boolean>(false);

    function PutInProgress(): void {
        checkProgress(!progress);
    }

    function takeOutProgress(): void {
        checkProgress(!progress);
        changeAttempts(attempts - 1);
    }

    function increaseAttempts(): void {
        changeAttempts(attempts + 1);
    }

    return (
        <div>
            {" "}
            <Button
                onClick={PutInProgress}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={takeOutProgress} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempts} disabled={progress}>
                Mulligan
                {attempts}
            </Button>
        </div>
    );
}
