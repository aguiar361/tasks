import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
//import { AddQuiz } from "./QuizzesView";
import { QuizzesView } from "./QuizzesView";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<QuizzesView />);
    });
    test("There is Quiz List Header", () => {
        expect(screen.getByText(/Quiz List:/)).toBeInTheDocument();
    });
    test("There is a Quiz in document", () => {
        expect(screen.getByText(/Sample Quiz/)).toBeInTheDocument();
    });
    test("There is an author in document", () => {
        expect(screen.getByText(/Brandon Aguiar/)).toBeInTheDocument();
    });
    test("There is a description in document", () => {
        expect(
            screen.getByText(
                /Sample question written to show what interface looks like/
            )
        ).toBeInTheDocument();
    });
    test("There is a View Quiz button", () => {
        expect(screen.getByText(/Click to view this Quiz/)).toBeInTheDocument();
    });
    test("There is an Edit mode to add quizzes", () => {
        const editQuizzesbox = screen.getByRole("can-edit-quizzes");
        expect(editQuizzesbox).toBeInTheDocument();
    });
    test("Edit mode works to add delete", () => {
        const editQuizzesbox = screen.getByRole("can-edit-quizzes");
        editQuizzesbox.click();
        expect(
            screen.getByRole("button", { name: /Add Quiz/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Delete/i })
        ).toBeInTheDocument();
    });
    test("Edit mode opens new fields", () => {
        const editQuizzesbox = screen.getByRole("can-edit-quizzes");
        editQuizzesbox.click();
        //const quizTitle = screen.getByTestId("formQuizTitle");
        //const quizAuthor = screen.getByTestId("formQuizAuthor");
        //const quizDescription = screen.getByTestId("formQuizDescription");
        //expect(screen.getByTestId("formQuizTitle")).toBeInTheDocument();
        //expect(screen.getByTestId("formQuizAuthor")).toBeInTheDocument();
        //expect(screen.getByTestId("formQuizDescription")).toBeInTheDocument();
    });
    test("There is an view quiz button", () => {
        const viewQuizzesbox = screen.getByRole("viewQuizButton");
        expect(viewQuizzesbox).toBeInTheDocument();
    });
    test("View Quiz Button shows you quiz question, question count", () => {
        const viewQuizButton = screen.getByRole("viewQuizButton");
        viewQuizButton.click();
        expect(
            screen.getByText(
                /This is a sample question to be shown on the Sample quiz. The correct answer is 'Sample Quiz.' What quiz is this?/
            )
        ).toBeInTheDocument();
        expect(screen.getByText(/Question Count: /)).toBeInTheDocument();
    });
    test("View Quiz Button shows you edit switch to add question and published switch for published only", () => {
        const viewQuizButton = screen.getByRole("viewQuizButton");
        viewQuizButton.click();
        expect(
            screen.getByRole("show-published-questions")
        ).toBeInTheDocument();
        expect(screen.getByRole("can-edit-question")).toBeInTheDocument();
    });
});
