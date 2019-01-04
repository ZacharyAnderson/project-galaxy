import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, Col, Container, Row } from 'reactstrap';
import './CreateAccountCard.css';

class CreateAccountCard extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Container>
                    <Card className="card">
                        <Container className="Container">
                            <Row>
                                <Col>
                                    <CardText className="float-right">New to galaxy?</CardText>
                                </Col>
                                <Col className="Right-Col">
                                    <CardText className="float-left" tag={Link} to="/signup">Create an account.</CardText>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default CreateAccountCard;