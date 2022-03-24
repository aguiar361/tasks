import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface Quiz {
    title: string;
    author: string;
    description: string;
    //questionCount: number;
}

interface AddQuizBoxParams {
    // Consumes a function that consumes data and returns nothing, passes to a React State Setter).
    appendQuiz: (title: string, author: string, description: string) => void;
}

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const Inital_Quizzes: Quiz[] = [
    {
        title: "Sample Quiz",
        author: "Brandon Aguiar",
        description: "Sample question written to show what interface looks like"
        //questionCount: 0
    }
];

export function QuizzesView(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(Inital_Quizzes);
    //const [numQuizzes, updateNum] = useState<number>(0);

    function removeQuizByTitle(quizTitle: string) {
        const modifiedQuizzes = quizzes.filter(
            (quiz: Quiz): boolean => quiz.title !== quizTitle
        );
        // Update the movies array to be the new version
        setQuizzes(modifiedQuizzes);
    }

    function appendQuiz(
        title: string,
        author: string,
        description: string
        //questionCount: number
    ) {
        // Making a new array of movies, with an additional extra one
        const modifiedQuizzes = [
            ...quizzes,
            {
                title: title,
                author: author,
                description: description
                //questionCount: questionCount
            }
        ];
        // Update the movies array to be the new version
        setQuizzes(modifiedQuizzes);
    }

    return (
        <div>
            <h3>Quiz List: </h3>
            <div>
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
                                <div
                                    style={{
                                        border: "1px solid black",
                                        padding: "4px",
                                        width: "1000px"
                                    }}
                                >
                                    {quiz.description}
                                </div>
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        width: "1000px",
                                        height: "20px"
                                    }}
                                ></div>
                            </li>
                        )
                    )}
                </ol>
                <AddQuiz appendQuiz={appendQuiz}></AddQuiz>
            </div>
        </div>
    );
}

export function AddQuiz({ appendQuiz }: AddQuizBoxParams): JSX.Element {
    const [title, setTitle] = useState<string>("New Quiz");
    const [author, setAuthor] = useState<string>("Unknown author");
    const [description, setDescription] = useState<string>("Random info");
    //const [questionCount, setquestionCount] = useState<number>(0);

    return (
        <div>
            <Form>
                <Form.Group controlId="formQuizTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(event: ChangeEvent) =>
                            setTitle(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formQuizAuthor">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control
                        type="text"
                        value={author}
                        onChange={(event: ChangeEvent) =>
                            setAuthor(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formQuizDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(event: ChangeEvent) =>
                            setDescription(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            {/**setquestionCount(0)*/}
            <Button onClick={() => appendQuiz(title, author, description)}>
                Add Quiz
            </Button>
        </div>
    );
}
