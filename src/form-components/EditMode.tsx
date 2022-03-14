import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing: "
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    />
                )}
            </div>
            <div>
                {editMode ? (
                    <div>
                        <Form.Group controlId="formStudentName">
                            <Form.Label>Enter name: </Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        {isStudent
                            ? name + " is a student"
                            : name + " is not a student"}
                    </div>
                ) : (
                    <div>
                        {isStudent
                            ? name + " is a student"
                            : name + " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
