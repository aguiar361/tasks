import React, { useState } from "react";
import { Button } from "react-bootstrap";

/** 
type Holiday =
    | "New_Years"
    | "Easter"
    | "July_Fourth"
    | "Halloween"
    | "Christmas";

const alphabetically: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "July_Fourth",
    July_Fourth: "New_Years",
    New_Years: "Christmas"
};

const chronologically: Record<Holiday, Holiday> = {
    New_Years: "Easter",
    Easter: "July_Fourth",
    July_Fourth: "Halloween",
    Halloween: "Christmas",
    Christmas: "New_Years"
};
**/

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<string>("🥂");

    const alphabetically: Record<string, string> = {
        "🎁": "🐇",
        "🐇": "🎃",
        "🎃": "🎉",
        "🎉": "🥂",
        "🥂": "🎁"
    };

    const chronologically: Record<string, string> = {
        "🥂": "🐇",
        "🐇": "🎉",
        "🎉": "🎃",
        "🎃": "🎁",
        "🎁": "🥂"
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <div>
                <Button
                    onClick={() =>
                        changeHoliday(
                            (currentHoliday) => alphabetically[currentHoliday]
                        )
                    }
                >
                    Order by Alphabet
                </Button>
            </div>
            <div>
                <Button
                    onClick={() =>
                        changeHoliday(
                            (currentHoliday) => chronologically[currentHoliday]
                        )
                    }
                >
                    Order by Year
                </Button>
            </div>
        </div>
    );

    /**    
    const [holiday, changeHoliday] = useState<Holiday>("New_Years");

    function emoji(): string {
        if (holiday === "New_Years") {
            return "🥂";
        } else if (holiday === "Easter") {
            return "🐇";
        } else if (holiday === "July_Fourth") {
            return "🎉";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else {
            return "🎁";
        }
    }

    function changeAlphabetically(): void {
        const newHol = alphabetically[holiday];
        changeHoliday(newHol);
    }

    function changeChronologically(): void {
        const newHol = chronologically[holiday];
        changeHoliday(newHol);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>\
            <div>
                <Button onClick={() => changeHoliday(currentHoliday) => alphabetically(currentHoliday)</div>
                    changeAlphabetically}>
                    Order by Alphabet
                </Button>
            </div>
            <Button onClick={changeChronologically}>Order by Year</Button>
        </div>
    );
    **/
}
