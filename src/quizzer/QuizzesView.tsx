import React from "react";
import { useState } from "react";
import "./App.css";

interface Quizzes {
    title: string;
    author: string;
    description: string;
    questionCount: number;
}

const Inital_Quizzes: Quizzes[] = [
    {
        title: "Sample Quiz",
        author: "Brandon Aguiar",
        description:
            "Sample question written to show what interface looks like",
        questionCount: 0
    }
];

export function QuestionView(): JSX.Element {
    const [movies, setMovies] = useState<Quizzes[]>(Inital_Quizzes);
    const [numQuizzes, updateNum] = useState<number>(0);
    const [title, setTitle] = useState<string>("New Quiz");
    const [author, setAuthor] = useState<string>("Unknown author");
    const [decription, setDescription] = useState<string>("Random info");
    const [questionCount, setquestionCount] = useState<number>(2022);

    return (
        <div>
            <h1>Quiz List: </h1>;
        </div>
    );
}
