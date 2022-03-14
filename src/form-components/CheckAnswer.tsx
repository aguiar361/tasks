import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [given, setIfEqual] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setIfEqual(event.target.value);
    }

    /**function checkEqual(): string {
        if (given === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }**/

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerBox">
                <Form.Label>User Answer:</Form.Label>
                <Form.Control value={given} onChange={updateAnswer} />
            </Form.Group>
            <div>{given === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
