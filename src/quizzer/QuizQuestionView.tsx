import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
import { Question, Inital_Questions } from "./QuizzesView";

interface AddQuestionBoxParams {
    // Consumes a function that consumes data and returns nothing, passes to a React State Setter).
    appendQuestion: (
        belongingTo: string,
        type: string,
        question: string,
        anwser: string,
        published: boolean,
        points: string
    ) => void;
}

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

interface titleProps {
    impString: string;
}

interface checkAnswer {
    anwser: string;
}

export function QuestionsView({ impString }: titleProps): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(Inital_Questions);
    const [editQuestion, setEditQuestion] = useState<boolean>(false);
    const [questionType, whatQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const [publishedOnly, setpublishedOnly] = useState<boolean>(false);
    //const [editSpecQuestion, seteditSpecQuestion] = useState<string>("");

    const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question"
    };

    function adjustType(): void {
        const newType = QUESTION_TRANSITIONS[questionType];
        whatQuestionType(newType);
    }

    function removeQuestionByQuestion(questionToGo: string) {
        const modifiedQuestions = questions.filter(
            (question: Question): boolean => question.question !== questionToGo
        );
        // Update the movies array to be the new version
        setQuestions(modifiedQuestions);
    }

    function appendQuestion(
        belongingTo: string,
        type: string,
        question: string,
        anwser: string,
        published: boolean,
        points: string
        //questionCount: number
    ) {
        // Making a new array of movies, with an additional extra one
        const modifiedQuestions = [
            ...questions,
            {
                belongingTo: belongingTo,
                type: type,
                question: question,
                anwser: anwser,
                published: published,
                points: points
            }
        ];
        // Update the movies array to be the new version
        setQuestions(modifiedQuestions);
    }

    const questionsBelonging = questions.filter(
        (question: Question): boolean => question.belongingTo === impString
    );
    //let lastQuestion: Question;

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="show-published-questions"
                    label="Published Only"
                    checked={publishedOnly}
                    onChange={() => setpublishedOnly(!publishedOnly)}
                />
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="can-edit-question"
                    label="Edit Question"
                    checked={editQuestion}
                    onChange={() => setEditQuestion(!editQuestion)}
                />
            </div>
            <ol>
                {questionsBelonging.map(
                    (question: Question): JSX.Element => (
                        <li key={question.belongingTo}>
                            <span>
                                <div>
                                    {" "}
                                    {publishedOnly
                                        ? question.published === true
                                            ? question.question
                                            : ""
                                        : question.question}
                                    {publishedOnly ? (
                                        question.published === true ? (
                                            <div>
                                                <CheckAnswer
                                                    anwser={question.anwser}
                                                ></CheckAnswer>
                                                <Button
                                                    style={{
                                                        backgroundColor: "black"
                                                    }}
                                                    onClick={() =>
                                                        removeQuestionByQuestion(
                                                            question.question
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )
                                    ) : (
                                        <CheckAnswer
                                            anwser={question.anwser}
                                        ></CheckAnswer>
                                    )}
                                </div>
                            </span>
                            {"(Points worth: " + question.points + ")"}
                        </li>
                    )
                )}
            </ol>
            <div>
                {editQuestion ? (
                    <div>
                        <AddQuestion
                            appendQuestion={appendQuestion}
                        ></AddQuestion>
                    </div>
                ) : (
                    <div> </div>
                )}
            </div>
            <div>
                {/**(lastQuestion = questions.slice(-1)[0])*/}
                {/**Inital_Questions.push(lastQuestion)*/}
            </div>
        </div>
    );
}

export function AddQuestion({
    appendQuestion
}: AddQuestionBoxParams): JSX.Element {
    const [belongingTo, setBelongingTo] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [published, setPublished] = useState<boolean>(true);
    const [points, setPoints] = useState<string>("1");

    //const [questionCount, setquestionCount] = useState<number>(0);
    const [Question, SETQUESTION] = useState<Question>();

    return (
        <div>
            <Form>
                <Form.Group controlId="formQuestionBelongingTO">
                    <Form.Label>
                        Enter the Quiz name this question belongs to
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={belongingTo}
                        onChange={(event: ChangeEvent) =>
                            setBelongingTo(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formQuestionType">
                    <Form.Label>
                        multiple_choice_question or short_answer_question
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={type}
                        onChange={(event: ChangeEvent) =>
                            setType(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formQuestionQuestion">
                    <Form.Label>Enter new question</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={question}
                        onChange={(event: ChangeEvent) =>
                            setQuestion(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formQuestionAnswer">
                    <Form.Label>Enter desired answer</Form.Label>
                    <Form.Control
                        type="text"
                        value={answer}
                        onChange={(event: ChangeEvent) =>
                            setAnswer(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <Form.Check
                type="switch"
                id="is-published-question"
                label="Published?"
                checked={published}
                onChange={() => setPublished(!published)}
            />
            <Form>
                <Form.Group controlId="formQuestionPoints">
                    <Form.Label>Enter question points</Form.Label>
                    <Form.Control
                        type="text"
                        value={points}
                        onChange={(event: ChangeEvent) =>
                            setPoints(event.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            {/**setquestionCount(0)*/}
            <Button
                style={{
                    backgroundColor: "black"
                }}
                onClick={() =>
                    appendQuestion(
                        belongingTo,
                        type,
                        question,
                        answer,
                        published,
                        points
                    )
                }
            >
                Add Question
            </Button>
        </div>
    );
}

export function CheckAnswer({ anwser }: checkAnswer): JSX.Element {
    const [userAnswer, setAnswer] = useState<string>("");
    return (
        <div>
            <div>
                <Form>
                    <Form.Group controlId="checkAnswer">
                        <Form.Label>Enter answer</Form.Label>
                        <Form.Control
                            type="text"
                            value={userAnswer}
                            onChange={(event: ChangeEvent) =>
                                setAnswer(event.target.value)
                            }
                        />
                    </Form.Group>
                </Form>
            </div>
            <div>{anwser === userAnswer ? "✔️ Correct" : "❌ Incorrect"}</div>
        </div>
    );
}

export function Editcode(): JSX.Element {
    const [newDat, setNewDat] = useState<string>("");

    return <div>Insert new datat from main function</div>;
}
