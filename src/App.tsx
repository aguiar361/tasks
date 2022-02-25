import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div style={{ background: "cyan" }}>
                <h1> My First Personal Header </h1>
            </div>
            <p>Brandon Aguiar. Hello World.</p>
            <img
                src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
                alt="A picture of a dog"
            />
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <ol>
                <li>Dogs are fun</li>
                <li>Dogs are cute</li>
                <li>Dogs are happy</li>
            </ol>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Dogs are so much better...
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "600px",
                                    height: "20px"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            ...And cats are so much worse
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "600px",
                                    height: "20px"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
