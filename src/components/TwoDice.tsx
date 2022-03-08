import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, changeDice1] = useState<number>(1);
    const [rightdie, changeDice2] = useState<number>(2);

    return (
        <div>
            <Button onClick={() => changeDice1(d6())}>Roll Left</Button>
            Current Left ID:
            <span data-testid="left-die"> {leftdie} </span>
            <Button onClick={() => changeDice2(d6())}>Roll Right</Button>
            Current right ID:
            <span data-testid="right-die"> {rightdie} </span>
            {leftdie === 1 && rightdie === 1 && <div>You Lose</div>}
            {leftdie !== 1 && leftdie === rightdie && <div>You Win</div>}
        </div>
    );
}
