//import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setHasLeft] = useState<number>(3);
    const [requesting, updateRequest] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Form.Group controlId="formNumAttempts">
                <Form.Label> Number of attempts requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requesting}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateRequest(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setHasLeft(attempts - 1)}
                    disabled={attempts <= 0 ? true : false}
                >
                    Use
                </Button>
                <Button
                    onClick={() =>
                        setHasLeft(parseInt(requesting) + attempts || attempts)
                    }
                >
                    Gain
                </Button>
            </div>
        </div>
    );
}
