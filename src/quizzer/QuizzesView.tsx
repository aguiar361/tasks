import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

interface Quiz {
    title: string;
    author: string;
    description: string;
    questionCount: number;
}

interface AddQuizBoxParams {
    // Consumes a function that consumes the name and released date
    //  and returns nothing (because it's passed to a React State Setter).
    // This is passed in much later
    appendQuiz: (title: string, author: string, description: string) => void;
}

const Inital_Quizzes: Quiz[] = [
    {
        title: "Sample Quiz",
        author: "Brandon Aguiar",
        description:
            "Sample question written to show what interface looks like",
        questionCount: 0
    }
];

export function QuizzesView(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(Inital_Quizzes);
    const [numQuizzes, updateNum] = useState<number>(0);
    //const [title, setTitle] = useState<string>("New Quiz");
    const [author, setAuthor] = useState<string>("Unknown author");
    const [decription, setDescription] = useState<string>("Random info");
    const [questionCount, setquestionCount] = useState<number>(2022);

    function removeQuizByTitle(quizTitle: string) {
        const modifiedQuizzes = quizzes.filter(
            (quiz: Quiz): boolean => quiz.title !== quizTitle
        );
        // Update the movies array to be the new version
        setQuizzes(modifiedQuizzes);
    }

    return (
        <div>
            <h3>Quiz List: </h3>
            <div
                style={{
                    border: "1px solid black",
                    padding: "4px",
                    width: "1000px"
                }}
            >
                <ol>
                    {quizzes.map(
                        (quiz: Quiz): JSX.Element => (
                            <li key={quiz.title}>
                                {quiz.title} ({quiz.author}):
                                <Button
                                    onClick={() =>
                                        removeQuizByTitle(quiz.title)
                                    }
                                >
                                    Delete
                                </Button>
                                <div>{quiz.description}</div>
                            </li>
                        )
                    )}
                </ol>
            </div>
        </div>
    );
}
