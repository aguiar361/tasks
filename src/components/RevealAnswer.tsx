import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    return (
        <div>
            {" "}
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}

/**
 * You will need a state to handle whether the text is visible.
 * There is a button labelled Reveal Answer that inverts the state.
 * The text 42 is not initially visible.
 * When the button is clicked, the text 42 should be visible.
 */
