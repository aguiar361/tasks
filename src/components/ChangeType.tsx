import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, whatQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question"
    };

    function adjustType(): void {
        const newType = QUESTION_TRANSITIONS[question];
        whatQuestion(newType);
    }

    //    whatQuestion(question === "short_answer_question" ? "multiple_choice_question " : question === "multiple_choice_question" ? "short_answer_question")}
    return (
        <div>
            {" "}
            <Button onClick={adjustType}>Change Type</Button>
            {question === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {question === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
