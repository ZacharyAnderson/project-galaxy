import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import LogIn from './LogIn';

class LogInPage extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col sm="4" />
                            <Col sm="4">
                                <LogIn />
                            </Col>
                            <Col sm="4" />
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default LogInPage;