import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QuestionsView } from "./QuizQuestionView";

/**
 * Try figuring out props for array questions state
 * else:
 *      ADD NUMBER QUESTIONS TO QUIZZES
 *      Do EDIT QUESTIONS????, THE TESTSSSS
 *      Sum Points
 * -
 * Add some questions
 * add question properties and stuff
 * LEARN TESTS
 */

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

export interface Question {
    belongingTo: string;
    type: string;
    question: string;
    anwser: string;
    published: boolean;
    points: string;
}

export const Inital_Questions: Question[] = [
    {
        belongingTo: "New Quiz",
        type: "short_answer_question",
        question:
            "This is a sample question to be shown on the sample quiz. The correct answer is 'Sample Quiz.' What quiz is this?",
        anwser: "Sample Quiz",
        published: true,
        points: "1"
    }
];

export function QuizzesView(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(Inital_Quizzes);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [seeQuestions, setseeQuestions] = useState<boolean>(false);
    //const [numQuizzes, updateNum] = useState<number>(0);
    //const [impString, setImpString] = useState<string>("");

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
            <h3> Quiz List: </h3>
            <div>
                <Form.Check
                    type="switch"
                    id="can-edit-quizzes"
                    label={<h5>Edit Quiz List</h5>}
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
            </div>
            <div>
                <ol>
                    {quizzes.map(
                        (quiz: Quiz): JSX.Element => (
                            <li key={quiz.title}>
                                {quiz.title + " - " + quiz.author + "  "}
                                <Button
                                    style={{
                                        backgroundColor: "black"
                                    }}
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
                                        width: "1250px"
                                    }}
                                >
                                    {quiz.description}
                                    <span>
                                        <div
                                            style={{
                                                border: "1px solid black",
                                                padding: "4px",
                                                width: "200px"
                                            }}
                                        >
                                            Question Count:
                                        </div>
                                        <div
                                            style={{
                                                border: "1px solid black",
                                                padding: "4px",
                                                width: "200px"
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    backgroundColor: "grey"
                                                }}
                                                onClick={() => {
                                                    setseeQuestions(
                                                        !seeQuestions
                                                    );
                                                }}
                                            >
                                                Click to view this Quiz
                                            </Button>
                                        </div>
                                        <div>
                                            {seeQuestions ? (
                                                <QuestionsView
                                                    impString={quiz.title}
                                                ></QuestionsView>
                                            ) : (
                                                <div> </div>
                                            )}
                                        </div>
                                    </span>
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
                <div>
                    {editMode ? (
                        <AddQuiz appendQuiz={appendQuiz}></AddQuiz>
                    ) : (
                        <div> Change to edit mode to add new quiz </div>
                    )}
                </div>
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
                        //width={"1000px"}
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
                        //width={"1000px"}
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
                        as="textarea"
                        value={description}
                        onChange={(event: ChangeEvent) =>
                            setDescription(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            {/**setquestionCount(0)*/}
            <Button
                style={{
                    backgroundColor: "black"
                }}
                onClick={() => appendQuiz(title, author, description)}
            >
                Add Quiz
            </Button>
        </div>
    );
}
