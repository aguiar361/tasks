import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { ColoredBox } from "../bad-components/ColoredBox";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosen, newColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>The current color is:{"  "}</div>
            <span style={{ backgroundColor: chosen }}>
                <span data-testid="colored-box">{chosen}</span>
            </span>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => newColor(event.target.value)}
                        id={"colors-choice-" + color}
                        label={color}
                        value={color}
                        checked={chosen === color}
                    />
                ))}
            </div>
        </div>
    );
}
